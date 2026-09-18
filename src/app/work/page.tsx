import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WorkIndex } from "@/components/work-index";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "브랜드 리뉴얼, 공간 아이덴티티, 패키지, 프로모션, UI, AI 워크플로우까지 전체 프로젝트 목록.",
};

export default function WorkPage() {
  return (
    <section className="py-16 md:py-24">
      <div
        className="mx-auto max-w-[1600px]"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <Reveal>
          <h1 className="font-display text-[12vw] leading-[0.92] sm:text-[9vw] lg:text-[6vw]">
            Work
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-fg-muted">
            브랜드 경험(BX)을 중심으로 공간, 그래픽, 디지털, AI 영역에서 진행한
            프로젝트입니다. 각 프로젝트는 문제 정의와 실행, 그리고 확인된 성과
            순으로 정리했습니다.
          </p>
        </Reveal>

        <WorkIndex projects={projects} />
      </div>
    </section>
  );
}
