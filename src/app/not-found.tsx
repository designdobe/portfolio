import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <div
        className="mx-auto w-full max-w-[1600px]"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <p className="label text-fg-dim">404</p>
        <h1 className="font-display mt-4 text-[12vw] leading-[0.92] sm:text-[8vw] lg:text-[5vw]">
          Page not found
        </h1>
        <p className="mt-5 max-w-md text-fg-muted">
          요청하신 페이지를 찾을 수 없습니다. 주소가 바뀌었거나 삭제된 것 같습니다.
        </p>
        <Link
          href="/"
          className="label mt-9 inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-accent-fg active:translate-y-px"
        >
          홈으로 <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
