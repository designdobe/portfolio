import Link from "next/link";
import { MediaSlot } from "@/components/media-slot";
import type { Project } from "@/content/projects";

/**
 * Work card.
 *
 * Mirrors the deck's project cover: full-bleed media with the wide display
 * title and its Korean subtitle sitting at the bottom-left, over a scrim so the
 * white type keeps its contrast on any photograph.
 */
export function WorkCard({
  project,
  size = "default",
  priority = false,
}: {
  project: Project;
  size?: "default" | "large";
  priority?: boolean;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block overflow-hidden bg-surface"
    >
      <MediaSlot
        src={project.cover}
        alt={`${project.title} - ${project.titleKo}`}
        caption={project.titleKo}
        aspect={size === "large" ? "aspect-[3/2] md:aspect-[21/9]" : "aspect-[4/3]"}
        priority={priority}
        className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-8">
        <p className="label text-white/70">{project.category}</p>
        <h3
          className={`font-display mt-2 text-white ${
            size === "large"
              ? "text-2xl sm:text-4xl md:text-5xl"
              : "text-xl sm:text-2xl md:text-3xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-2 max-w-xl text-sm text-white/75">{project.titleKo}</p>
      </div>
    </Link>
  );
}
