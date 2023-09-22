/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/champions/:id",
        destination: "/champions/[id]",
      },
    ];
  },
};

module.exports = nextConfig;
