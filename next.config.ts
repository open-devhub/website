import redirects from "./lib/redirects";

const nextConfig = {
  // eslint: {
  //   ignoreDuringBuilds: true,
  //  },

  images: {
    unoptimized: true,
  },

  async redirects() {
    return redirects
      .map(({ sources, destination }) =>
        sources.map((source) => ({
          source: `${source}`,
          destination,
          permanent: false,
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

export default nextConfig;
