import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true,
  compress: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    domains: ['unpkg.com'],
  },
};

export default nextConfig;
