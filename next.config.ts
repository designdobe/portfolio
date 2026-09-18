import type { NextConfig } from "next";

/**
 * GitHub Pages serves this repo from a subpath (/portfolio), so the Pages
 * workflow sets NEXT_PUBLIC_BASE_PATH and we switch to a static export with
 * that prefix. Left unset - local dev, and hosts that serve from the root such
 * as Vercel - the build stays a normal Next build at "/".
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(basePath
    ? { output: "export" as const, basePath, trailingSlash: true }
    : {}),
};

export default nextConfig;
