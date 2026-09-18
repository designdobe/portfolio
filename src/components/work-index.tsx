"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/reveal";
import { WorkCard } from "@/components/work-card";
import { categories, type Category, type Project } from "@/content/projects";

type Filter = Category | "ALL";

export function WorkIndex({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("ALL");

  const available = useMemo(() => {
    const used = new Set(projects.map((p) => p.category));
    return categories.filter((c) => used.has(c));
  }, [projects]);

  const visible = useMemo(
    () => (filter === "ALL" ? projects : projects.filter((p) => p.category === filter)),
    [projects, filter],
  );

  const filters: Filter[] = ["ALL", ...available];

  return (
    <>
      <div
        role="group"
        aria-label="분야별 필터"
        className="mt-10 flex flex-wrap gap-2"
      >
        {filters.map((value) => {
          const active = value === filter;
          return (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              aria-pressed={active}
              className={`label border px-4 py-2.5 transition-colors active:translate-y-px ${
                active
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-line text-fg-muted hover:border-line-strong hover:text-fg"
              }`}
            >
              {value}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-fg-dim" aria-live="polite">
        {visible.length}개 프로젝트
      </p>

      {visible.length === 0 ? (
        <p className="mt-16 border-t border-line pt-16 text-fg-muted">
          이 분야에 해당하는 프로젝트가 아직 없습니다.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 80}>
              <WorkCard project={project} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      )}
    </>
  );
}
