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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "missing url" }, { status: 400 });
  }

  try {
    new URL(url);
  } catch {
    return NextResponse.json({ error: "invalid url" }, { status: 400 });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; LinkPreviewBot/1.0; +https://example.com/bot)",
      },
    });

    clearTimeout(timeout);

    if (!res.ok) {
      return NextResponse.json({ error: "failed to fetch" }, { status: 502 });
    }

    const html = await res.text();

    const rawTitle = extractMeta(html, "og:title") || extractTitleTag(html);
    const rawDescription =
      extractMeta(html, "og:description") || extractMeta(html, "description");
    const rawImage = extractMeta(html, "og:image");

    let image: string | null = null;
    if (rawImage) {
      try {
        image = new URL(rawImage, url).toString();
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
