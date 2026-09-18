import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ghchart.rshah.org" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
  reactStrictMode: true,
  compress: true,
};

export default nextConfig;
