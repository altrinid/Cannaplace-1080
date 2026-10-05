import type { NextConfig } from "next";

// GitHub Pages serves the site from /Cannaplace-1080 (or a preview subfolder below it); locally it runs at the root.
const basePath = process.env.GITHUB_PAGES === "true" ? (process.env.PAGES_BASE_PATH ?? "/Cannaplace-1080") : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // DE and EN have their own root layouts (correct <html lang>), so the 404 page needs the global variant.
  experimental: { globalNotFound: true },
};

export default nextConfig;
