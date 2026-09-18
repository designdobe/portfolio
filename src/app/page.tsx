import Link from "next/link";
import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { WorkCard } from "@/components/work-card";
import { capabilities, experience, impact, profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";

const [lead, ...rest] = featuredProjects;

export default function HomePage() {
  return (
    <>
      {/* Hero - asymmetric split, mirrors 00COVER: chrome monogram beside wide
          display type on black. Text and monogram occupy separate columns so
          the headline never sits on top of the metal. */}
      <section className="relative flex min-h-[92dvh] items-center overflow-hidden pb-16 pt-24">
        <div
          className="mx-auto grid w-full max-w-[1600px] items-center gap-10 lg:grid-cols-[66fr_34fr] lg:gap-8"
          style={{ paddingInline: "var(--gutter)" }}
        >
          <div className="order-2 lg:order-1">
            <Reveal>
              <h1 className="font-display chrome-text text-[12vw] leading-[0.9] sm:text-[10vw] lg:text-[3.9vw]">
                {profile.headline[0]}
                <br />
                {profile.headline[1]}
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-base text-fg-muted md:text-lg">
                {profile.summary}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="label inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-accent-fg transition-transform active:translate-y-px"
                >
                  선택 작업 보기 <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/about"
                  className="label inline-flex items-center border border-line-strong px-6 py-3.5 text-fg transition-colors hover:bg-surface-2 active:translate-y-px"
                >
                  이력 보기
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2" aria-hidden="true">
            <MediaSlot
              src="/brand/monogram.png"
              alt=""
              caption="00COVER 크롬 모노그램"
              aspect="aspect-square"
              priority
              decorative
              className="mx-auto w-2/3 sm:w-1/2 lg:w-full"
            />
          </div>
        </div>
      </section>

      {/* Impact - four figures, each quoted from a results slide in the deck. */}
      <section
        aria-label="주요 성과"
        className="border-y border-line bg-surface"
      >
        <div
          className="mx-auto grid max-w-[1600px] grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4"
          style={{ paddingInline: "var(--gutter)" }}
        >
          {impact.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 80}
              className="py-8 sm:px-6 sm:py-12 sm:first:pl-0 sm:last:pr-0 lg:px-8 [&:not(:first-child)]:sm:border-l [&:not(:first-child)]:sm:border-line lg:[&:nth-child(3)]:border-l"
            >
              <p className="flex flex-wrap items-baseline gap-x-2">
                <span className="font-display text-4xl md:text-5xl">
                  {item.value}
                </span>
                <span className="label text-fg-muted">{item.unit}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Selected work - one lead card, then a two-up grid. Six items, six cells. */}
      <section className="py-20 md:py-28">
        <div
          className="mx-auto max-w-[1600px]"
          style={{ paddingInline: "var(--gutter)" }}
        >
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl md:text-6xl">Selected Work</h2>
            <Link
              href="/work"
              className="label text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
            >
              전체 프로젝트 보기 →
            </Link>
          </Reveal>

          {lead && (
            <Reveal className="mt-10 block">
              <WorkCard project={lead} size="large" priority />
            </Reveal>
          )}

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {rest.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 100}>
                <WorkCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities - 핵심역량 from 00resume, as a definition list. */}
      <section className="border-t border-line py-20 md:py-28">
        <div
          className="mx-auto max-w-[1600px]"
          style={{ paddingInline: "var(--gutter)" }}
        >
          <Reveal>
            <h2 className="font-display-ko text-4xl md:text-6xl">핵심역량</h2>
          </Reveal>

          <dl className="mt-12 flex flex-col">
            {capabilities.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="grid gap-3 border-t border-line py-8 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-10 md:py-10"
              >
                <dt className="text-lg font-normal md:text-xl">{item.title}</dt>
                <dd className="max-w-[65ch] leading-relaxed text-fg-muted">
                  {item.body}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* About teaser - split editorial, with the experience rows condensed. */}
      <section className="border-t border-line bg-surface py-20 md:py-28">
        <div
          className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20"
          style={{ paddingInline: "var(--gutter)" }}
        >
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl">
              {profile.name}
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-fg-muted">
              F&amp;B와 리빙 산업군에서 브랜드 신규 런칭부터 전면 리뉴얼까지,
              공간·그래픽·디지털 접점을 하나의 시스템으로 설계합니다. 최근에는
              생성형 AI를 업무 플로우에 적용해 리드타임과 외주 비용을 줄이는
              방식을 실험하고 있습니다.
            </p>
            <Link
              href="/about"
              className="label mt-8 inline-flex items-center gap-2 border border-line-strong px-6 py-3.5 transition-colors hover:bg-bg active:translate-y-px"
            >
              전체 이력 보기 <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <ul className="flex flex-col">
              {experience.map((job) => (
                <li
                  key={`${job.company}-${job.period}`}
                  className="grid gap-1 border-t border-line py-5 md:grid-cols-[10rem_1fr] md:gap-6"
                >
                  <span className="label pt-1 text-fg-dim">{job.period}</span>
                  <span>
                    <span className="block">{job.company}</span>
                    <span className="mt-1 block text-sm text-fg-muted">
                      {job.role}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Contact - full-width statement. The page's single contact CTA. */}
      <section
        id="contact"
        className="scroll-mt-20 border-t border-line py-24 md:py-36"
      >
        <div
          className="mx-auto max-w-[1600px]"
          style={{ paddingInline: "var(--gutter)" }}
        >
          <Reveal>
            <h2 className="font-display-ko max-w-[16ch] text-[8.5vw] sm:text-[6vw] lg:text-[3.8vw]">
              브랜드의 다음 단계를
              <br />
              함께 설계할 팀을 찾고 있습니다.
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="label mt-10 inline-flex items-center gap-2 bg-accent px-7 py-4 text-accent-fg transition-transform active:translate-y-px"
            >
              {profile.email} <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
