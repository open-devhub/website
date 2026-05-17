const redir = require("./lib/redirects.config.ts").default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
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
};

module.exports = nextConfig;
