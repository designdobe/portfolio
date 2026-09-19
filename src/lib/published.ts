import fs from "node:fs";
import path from "node:path";
import { projects, type Project } from "@/content/projects";

/**
 * Filters the catalogue down to the projects whose imagery actually exists.
 *
 * Exports land in /public by hand (see ASSETS.md), and a project with no cover
 * would otherwise show as a labelled empty slot. Rather than commenting entries
 * out one by one, the site checks the filesystem at build time: a project
 * appears once its cover file is there, and disappears if the file is removed.
 * Body images are filtered the same way, so a project can go live with its
 * cover and gain the rest later.
 *
 * Server-only - this reads the disk, so never import it from a client
 * component. It runs during the build, not per request.
 */
function hasFile(publicPath: string) {
  try {
    return fs.statSync(path.join(process.cwd(), "public", publicPath)).size > 0;
  } catch {
    return false;
  }
}

export const publishedProjects: Project[] = projects
  .filter((project) => hasFile(project.cover))
  .map((project) => ({
    ...project,
    media: project.media?.filter((item) => hasFile(item.src)),
  }));

export const publishedFeatured = publishedProjects.filter((p) => p.featured);

export function getPublishedProject(slug: string) {
  return publishedProjects.find((p) => p.slug === slug);
}

/** Projects still waiting on a cover. Printed after a build as a reminder. */
export const pendingProjects = projects.filter(
  (project) => !hasFile(project.cover),
);
