import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

function extractMeta(html: string, property: string): string | null {
  const patterns = [
    new RegExp(
      `<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']*)["']`,
      "i",
    ),
    new RegExp(
      `<meta[^>]+content=["']([^"']*)["'][^>]+(?:property|name)=["']${property}["']`,
      "i",
    ),
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return match[1];
  }
  return null;
}

function extractTitleTag(html: string): string | null {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return match ? match[1] : null;
}

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

const PRIVATE_HOSTNAME_PATTERNS = [
  /^localhost$/i,
  /^0\.0\.0\.0$/,
  /^127\./,
  /^10\./,
  /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
  /^192\.168\./,
  /^169\.254\./,
  /^::1$/,
  /^fc00:/i,
  /^fe80:/i,
];

function isSafeUrl(candidate: string): boolean {
  let parsed: URL;
  try {
    parsed = new URL(candidate);
  } catch {
    return false;
  }
  if (!["http:", "https:"].includes(parsed.protocol)) {
    return false;
  }
  const hostname = parsed.hostname.toLowerCase();
  return !PRIVATE_HOSTNAME_PATTERNS.some((pattern) => pattern.test(hostname));
}

const ALLOWED_ORIGINS = [
  "https://devhub.vercel.app",
  // "http://localhost:3000",
  // "http://127.0.0.1",
];

function isAllowedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  if (origin) {
    return ALLOWED_ORIGINS.includes(origin);
  }
  const referer = request.headers.get("referer");
  if (referer) {
    try {
      return ALLOWED_ORIGINS.includes(new URL(referer).origin);
    } catch {
      return false;
    }
  }
  return false;
}

export async function GET(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    // console.log(request.url);
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "missing url" }, { status: 400 });
  }

  if (!isSafeUrl(url)) {
    return NextResponse.json(
      { error: "invalid or disallowed url" },
      { status: 400 },
    );
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(url, {
      signal: controller.signal,
      redirect: "error",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; LinkPreviewBot/1.0; +https://example.com/bot)",
      },
    });

    clearTimeout(timeout);

    if (!res.ok) {
      return NextResponse.json({ error: "failed to fetch" }, { status: 502 });
    }

    const contentLength = res.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 1024 * 1024) {
      return NextResponse.json(
        { error: "response too large" },
        { status: 502 },
      );
    }

    const html = await res.text();
    if (html.length > 1024 * 1024) {
      return NextResponse.json(
        { error: "response too large" },
        { status: 502 },
      );
    }

    const rawTitle = extractMeta(html, "og:title") || extractTitleTag(html);
    const rawDescription =
      extractMeta(html, "og:description") || extractMeta(html, "description");
    const rawImage = extractMeta(html, "og:image");

    let image: string | null = null;
    if (rawImage) {
      try {
        const resolvedImage = new URL(rawImage, url).toString();
        image = isSafeUrl(resolvedImage) ? resolvedImage : null;
      } catch {
        image = null;
      }
    }

    return NextResponse.json(
      {
        title: rawTitle ? decodeHtmlEntities(rawTitle).trim() : null,
        description: rawDescription
          ? decodeHtmlEntities(rawDescription).trim()
          : null,
        image,
        url,
      },
      { headers: { "Cache-Control": "public, max-age=3600" } },
    );
  } catch {
    return NextResponse.json({ error: "failed to fetch" }, { status: 502 });
  }
}
