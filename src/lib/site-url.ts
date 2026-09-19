/**
 * The site's absolute base URL, for sitemap entries, robots and OG tags.
 *
 * Resolved in order:
 *  1. NEXT_PUBLIC_SITE_URL - set this once a real domain exists.
 *  2. VERCEL_PROJECT_PRODUCTION_URL - Vercel sets this itself, so a fresh
 *     import gets correct absolute URLs without anyone filling in a variable
 *     they cannot know before the first deploy.
 *  3. localhost, for dev and for any build outside those two.
 *
 * Only ever used to build absolute URLs, never to fetch anything.
 */
function resolve() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return "http://localhost:3000";
}

export const siteUrl = resolve();
