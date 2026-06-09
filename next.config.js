const redir = require("./lib/redirects.config.ts").default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
  },

  async redirects() {
    return redir
      .map(({ sources, destination, permanent }) =>
        sources.map((source) => ({
          source: `${source}`,
          destination,
          permanent,
        })),
      )
      .flat();
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none';",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
