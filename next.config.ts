import type { NextConfig } from "next";

// GitHub Pages serves the site from /Cannaplace-1080; locally it runs at the root.
const basePath = process.env.GITHUB_PAGES === "true" ? "/Cannaplace-1080" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
