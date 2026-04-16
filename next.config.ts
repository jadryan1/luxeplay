import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/collections",
        destination: "/packages",
        permanent: true,
      },
      {
        source: "/collections/:path*",
        destination: "/packages/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
