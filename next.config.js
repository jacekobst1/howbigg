/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/compare/display",
        destination: "/",
        permanent: false,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.howbigg.com" }],
        destination: "https://howbigg.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
