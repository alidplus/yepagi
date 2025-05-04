import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/trpc/:path*",
        destination: 'http://localhost:3030/trpc/:path*'
      },
    ]
  }
};

export default nextConfig;
