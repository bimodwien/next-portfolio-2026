import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker copies .next/standalone into the image (see Dockerfile).
  output: "standalone",
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
