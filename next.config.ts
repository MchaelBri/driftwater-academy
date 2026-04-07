import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/driftwater-academy",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
