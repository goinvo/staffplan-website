import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? "/staffplan-website" : "",
  assetPrefix: isProduction ? "/staffplan-website" : "",
};

export default nextConfig;
