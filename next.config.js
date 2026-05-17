const data = require("./lib/staticdata.config.ts").default;
const { invite, github } = data;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: "/invite",
        destination: invite,
        permanent: false,
      },
      {
        source: "/discord",
        destination: invite,
        permanent: false,
      },
      {
        source: "/github",
        destination: github,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
