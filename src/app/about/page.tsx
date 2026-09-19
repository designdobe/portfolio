import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import {
  capabilities,
  education,
  experience,
  profile,
  tools,
} from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: profile.summary,
};

export default function AboutPage() {
  return (
    <>
      {/* Mirrors 00resume: right-aligned display headline over the Korean summary. */}
      <section className="py-16 md:py-28">
        <div
          className="mx-auto max-w-[1600px]"
          style={{ paddingInline: "var(--gutter)" }}
        >
          <Reveal className="md:text-right">
            <h1 className="font-display text-[11vw] leading-[0.92] sm:text-[9vw] lg:text-[5vw]">
              {profile.headline[0]}
              <br />
              {profile.headline[1]}
            </h1>
            <p className="mt-5 text-base text-fg-muted md:text-xl">
              {profile.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <div
          className="mx-auto max-w-[1600px]"
          style={{ paddingInline: "var(--gutter)" }}
        >
          <Reveal>
            <h2 className="font-display-ko text-3xl md:text-5xl">핵심역량</h2>
          </Reveal>
          <dl className="mt-10 flex flex-col">
            {capabilities.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="grid gap-3 border-t border-line py-8 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-10"
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

      <section className="border-t border-line bg-surface py-16 md:py-24">
        <div
          className="mx-auto max-w-[1600px]"
          style={{ paddingInline: "var(--gutter)" }}
        >
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl">
              Work Experience
            </h2>
          </Reveal>
          <ul className="mt-10 flex flex-col">
            {experience.map((job, i) => (
              <Reveal
                key={`${job.company}-${job.period}`}
                delay={i * 60}
                as="li"
                className="grid gap-2 border-t border-line py-7 md:grid-cols-[12rem_minmax(0,18rem)_1fr] md:gap-8"
              >
                <span className="label pt-1 text-fg-dim">{job.period}</span>
                <span className="text-lg">{job.company}</span>
                <span className="text-sm leading-relaxed text-fg-muted md:pt-1.5">
                  {job.role}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <div
          className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-2 lg:gap-20"
          style={{ paddingInline: "var(--gutter)" }}
        >
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl">
              Education &amp; Awards
            </h2>
            <ul className="mt-8 flex flex-col">
              {education.map((item) => (
                <li
                  key={item.title}
                  className="grid gap-1 border-t border-line py-5 md:grid-cols-[5rem_1fr] md:gap-6"
                >
                  <span className="label pt-1 text-fg-dim">{item.year}</span>
                  <span className="text-fg-muted">{item.title}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-display text-2xl md:text-3xl">Core Tools</h2>
            <ul className="mt-8 flex flex-col">
              {tools.map((item) => (
                <li
                  key={item.group}
                  className="grid gap-1 border-t border-line py-5 md:grid-cols-[5rem_1fr] md:gap-6"
                >
                  <span className="label pt-1 text-fg-dim">{item.group}</span>
                  <span className="text-fg-muted">{item.items}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
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
