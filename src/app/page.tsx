import Link from "next/link";
import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { WorkCard } from "@/components/work-card";
import {
  capabilities,
  experience,
  impact,
  impactNote,
  profile,
} from "@/content/profile";
import { publishedFeatured } from "@/lib/published";

const [lead, ...rest] = publishedFeatured;

export default function HomePage() {
  return (
    <>
      {/* Hero - 00COVER in web form: an oversized chrome monogram bleeding off
          the right edge, with the display type set over it. A left-to-right
          scrim keeps the text side near-black so white type stays legible
          where it crosses the metal. */}
      <section className="relative flex min-h-[92dvh] items-center overflow-hidden pb-16 pt-24">
        {/*
          Small screens give the monogram the empty band above the headline, so
          it reads as a mark rather than a fragment behind the type. From lg the
          type has room beside it, so the monogram grows and the headline is set
          over it.
        */}
        <div
          className="pointer-events-none absolute right-[-12%] top-0 h-[36%] w-[86%] sm:right-[-8%] sm:h-[40%] sm:w-[62%] lg:right-[-7%] lg:h-full lg:w-[72%]"
          aria-hidden="true"
        >
          <MediaSlot
            src="/brand/monogram.png"
            alt=""
            caption="00COVER 크롬 모노그램"
            aspect="h-full"
            priority
            decorative
            className="size-full"
          />
        </div>

        {/* Scrim - above the monogram, below the type. Only the overlapping
            breakpoints need it. */}
        <div
          className="pointer-events-none absolute inset-0 hidden lg:block lg:bg-gradient-to-r lg:from-bg lg:from-20% lg:via-bg/60 lg:via-55% lg:to-transparent"
          aria-hidden="true"
        />

        <div
          className="relative mx-auto w-full max-w-[1600px]"
          style={{ paddingInline: "var(--gutter)" }}
        >
          <Reveal>
            <h1 className="font-display chrome-text chrome-text-over-art text-[12vw] leading-[0.9] sm:text-[10vw] lg:text-[6.1vw]">
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
      </section>

      {/* Impact - lead times cut by the AI workflow, all the same kind of
          figure so the row reads as one statement. */}
      <section aria-label="AI 워크플로우 성과" className="border-y border-line bg-surface">
        <div
          className="mx-auto max-w-[1600px] py-12 md:py-16"
          style={{ paddingInline: "var(--gutter)" }}
        >
          <Reveal>
            <p className="label text-fg-dim">{impactNote}</p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((item, i) => (
              <Reveal
                key={item.label}
                delay={i * 80}
                className="border-t border-line py-6 sm:pr-8 lg:pr-10"
              >
                {/* Two lines reserved from lg, where the longest pair wraps:
                    without it the captions sit at different heights. */}
                <p className="font-display flex flex-wrap items-baseline gap-x-2 text-2xl md:text-3xl lg:min-h-[1.9em] lg:content-start">
                  <span className="text-fg-dim">{item.from}</span>
                  <span aria-hidden="true" className="text-fg-dim">
                    →
                  </span>
                  <span>{item.to}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {item.label}
                </p>
              </Reveal>
            ))}
          </div>
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

          {rest.length > 0 && (
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {rest.map((project, i) => (
                <Reveal key={project.slug} delay={(i % 2) * 100}>
                  <WorkCard project={project} />
                </Reveal>
              ))}
            </div>
          )}
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
            {/* Teaser: the periods and what was worked on, capped so the
                column stays short. The about page carries the full list. */}
            <ul className="flex flex-col">
              {experience.map((job) => {
                const shown = job.projects.slice(0, 3);
                const rest = job.projects.length - shown.length;
                return (
                  <li
                    key={job.period}
                    className="grid gap-1 border-t border-line py-5 md:grid-cols-[10rem_1fr] md:gap-6"
                  >
                    <span className="label pt-1 text-fg-dim">{job.period}</span>
                    <span className="text-sm leading-relaxed text-fg-muted">
                      {shown.join(", ")}
                      {rest > 0 && ` 외 ${rest}건`}
                    </span>
                  </li>
                );
              })}
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
            <h2 className="font-display text-4xl md:text-6xl">Contact</h2>
            <p className="mt-5 max-w-lg text-base text-fg-muted md:text-lg">
              프로젝트 문의는 메일로 주세요.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="label mt-9 inline-flex items-center gap-2 bg-accent px-7 py-4 text-accent-fg transition-transform active:translate-y-px"
            >
              {profile.email} <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
