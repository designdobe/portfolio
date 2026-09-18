/**
 * Prefixes a path in /public with the deployment base path.
 *
 * next/link and next/image apply basePath on their own, but a plain <img src>
 * does not, so every image that lives in /public has to go through this or it
 * 404s on GitHub Pages, where the site is served from /portfolio.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  if (/^(https?:)?\/\//.test(path)) return path;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
