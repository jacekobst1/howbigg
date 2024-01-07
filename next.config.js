/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/compare/display",
        destination: "/",
        permanent: false,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www" }],
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
