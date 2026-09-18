import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

// Fully static site: emit this file at build time, never per-request.
export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kimyuri.portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, priority: 1 },
    { url: `${siteUrl}/work`, lastModified: now, priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified: now, priority: 0.8 },
    ...projects.map((p) => ({
      url: `${siteUrl}/work/${p.slug}`,
      lastModified: now,
      priority: 0.6,
    })),
  ];
}
