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

/** 01.jpg, 02.png, ... - the numbered body images of a project. */
const MEDIA_FILE = /^\d+\.(jpe?g|png|webp)$/i;

/**
 * Builds a project's body gallery from whatever is actually in its folder.
 *
 * Numbering the files is the whole interface: drop 03.jpg into the folder and
 * it appears, in order, with no code change. A caption declared in
 * projects.ts for that exact path is used when there is one; otherwise the
 * image runs uncaptioned, which beats labelling it with a guess.
 */
function mediaFor(project: Project) {
  const dir = path.join(process.cwd(), "public", "work", project.slug);
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter((f) => MEDIA_FILE.test(f)).sort();
  } catch {
    return [];
  }

  return files.map((file) => {
    const src = `/work/${project.slug}/${file}`;
    return {
      src,
      caption: project.media?.find((m) => m.src === src)?.caption ?? "",
    };
  });
}

export const publishedProjects: Project[] = projects
  .filter((project) => !project.hidden && hasFile(project.cover))
  .map((project) => ({ ...project, media: mediaFor(project) }));

export const publishedFeatured = publishedProjects.filter((p) => p.featured);

export function getPublishedProject(slug: string) {
  return publishedProjects.find((p) => p.slug === slug);
}

/** Projects still waiting on a cover, ignoring the ones hidden on purpose. */
export const pendingProjects = projects.filter(
  (project) => !project.hidden && !hasFile(project.cover),
);
