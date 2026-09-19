import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

// Fully static site: emit this file at build time, never per-request.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
