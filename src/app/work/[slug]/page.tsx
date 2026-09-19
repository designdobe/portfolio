import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaSlot } from "@/components/media-slot";
import { VideoEmbed } from "@/components/video-embed";
import { Reveal } from "@/components/reveal";
import { getPublishedProject, publishedProjects } from "@/lib/published";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getPublishedProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.titleKo,
    openGraph: { title: project.title, description: project.overview },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getPublishedProject(slug);
  if (!project) notFound();

  const index = publishedProjects.findIndex((p) => p.slug === slug);
  const next = publishedProjects[(index + 1) % publishedProjects.length];

  return (
    <article>
      {/* Cover - the deck's project title slide: full-bleed media, type bottom-left. */}
      <header className="relative">
        <MediaSlot
          src={project.cover}
          alt={`${project.title} - ${project.titleKo}`}
          caption={project.titleKo}
          aspect="aspect-[3/2] sm:aspect-[16/9] lg:aspect-[2/1]"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div
          className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-[1600px] pb-8 md:pb-14"
          style={{ paddingInline: "var(--gutter)" }}
        >
          <p className="label text-white/70">{project.category}</p>
          <h1 className="font-display mt-3 max-w-[20ch] text-[9vw] leading-[0.92] text-white sm:text-[7vw] lg:text-[4.6vw]">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-white/80 md:text-base">
            {project.titleKo}
          </p>
        </div>
      </header>

      {/* Meta - ROLE / TOOLS field markers, as in the deck. */}
      <div className="border-b border-line">
        <dl
          className="mx-auto grid max-w-[1600px] gap-6 py-8 md:grid-cols-2 md:py-10"
          style={{ paddingInline: "var(--gutter)" }}
        >
          <div className="grid gap-2 md:grid-cols-[5rem_1fr] md:gap-4">
            <dt className="label pt-0.5 text-fg-dim">Role</dt>
            <dd className="text-sm leading-relaxed text-fg-muted">{project.role}</dd>
          </div>
          {project.tools && (
            <div className="grid gap-2 md:grid-cols-[5rem_1fr] md:gap-4">
              <dt className="label pt-0.5 text-fg-dim">Tools</dt>
              <dd className="text-sm leading-relaxed text-fg-muted">
                {project.tools}
              </dd>
            </div>
          )}
        </dl>
      </div>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div
          className="mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16"
          style={{ paddingInline: "var(--gutter)" }}
        >
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl">Overview</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-[70ch] text-base leading-loose text-fg-muted md:text-lg">
              {project.overview}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Film - the project's own video, where there is one. */}
      {project.video && (
        <section className="border-t border-line py-16 md:py-24">
          <div
            className="mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16"
            style={{ paddingInline: "var(--gutter)" }}
          >
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl">Film</h2>
            </Reveal>
            <Reveal delay={100}>
              <VideoEmbed {...project.video} />
            </Reveal>
          </div>
        </section>
      )}

      {/* Strategy sections */}
      {project.sections && project.sections.length > 0 && (
        <section className="border-t border-line">
          <div
            className="mx-auto max-w-[1600px]"
            style={{ paddingInline: "var(--gutter)" }}
          >
            {project.sections.map((section, i) => (
              <Reveal
                key={section.heading}
                delay={i * 60}
                className="grid gap-4 border-b border-line py-12 last:border-b-0 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16 lg:py-16"
              >
                <h2 className="text-lg font-normal md:text-xl">
                  {section.heading}
                </h2>
                <p className="max-w-[70ch] leading-loose text-fg-muted">
                  {section.body}
                </p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Media */}
      {project.media && project.media.length > 0 && (
        <section className="border-t border-line py-16 md:py-24">
          <div
            className="mx-auto flex max-w-[1600px] flex-col gap-10 md:gap-16"
            style={{ paddingInline: "var(--gutter)" }}
          >
            {project.media.map((item, i) => (
              <Reveal key={item.src} delay={i * 60}>
                <MediaSlot
                  src={item.src}
                  alt={item.caption ? `${project.title} - ${item.caption}` : project.title}
                  caption={item.caption}
                  aspect="aspect-[16/10]"
                />
                {item.caption && (
                  <p className="mt-3 text-sm text-fg-dim">{item.caption}</p>
                )}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <section className="border-t border-line bg-surface py-16 md:py-24">
          <div
            className="mx-auto max-w-[1600px]"
            style={{ paddingInline: "var(--gutter)" }}
          >
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl">Results</h2>
            </Reveal>
            {/*
              Separators are drawn on the cells, not as gaps over a tinted
              parent: a tinted parent shows through wherever a row is short of
              cells, which reads as a stray grey box. Horizontal rules only,
              matching the hairlines used elsewhere on the site.
            */}
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3">
              {project.results.map((result, i) => (
                <Reveal
                  key={result.value}
                  delay={i * 80}
                  className="border-t border-line py-8 sm:pr-8 lg:pr-10"
                >
                  <p className="font-display text-2xl md:text-3xl">
                    {result.value}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {result.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Customer voice */}
      {project.quote && (
        <section className="border-t border-line py-16 md:py-24">
          <div
            className="mx-auto max-w-[1600px]"
            style={{ paddingInline: "var(--gutter)" }}
          >
            <Reveal>
              <blockquote className="max-w-4xl">
                <p className="text-xl leading-relaxed md:text-3xl md:leading-snug">
                  “{project.quote}”
                </p>
                <footer className="label mt-6 text-fg-dim">
                  매장 방문 고객 리뷰 中
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </section>
      )}

      {/* Next - hidden while only this project has its imagery */}
      {publishedProjects.length > 1 && (
      <nav className="border-t border-line" aria-label="다음 프로젝트">
        <Link
          href={`/work/${next.slug}`}
          className="group block py-12 transition-colors hover:bg-surface md:py-16"
        >
          <div
            className="mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-4"
            style={{ paddingInline: "var(--gutter)" }}
          >
            <div>
              <p className="label text-fg-dim">Next project</p>
              <p className="font-display mt-3 text-3xl md:text-5xl">
                {next.title}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="font-display text-3xl transition-transform group-hover:translate-x-2 md:text-5xl"
            >
              →
            </span>
          </div>
        </Link>
      </nav>
      )}
    </article>
  );
}
