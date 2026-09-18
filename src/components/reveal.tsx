"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  /** Stagger in milliseconds, for sibling items revealed together. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Reveals its children once when they scroll into view.
 *
 * Uses IntersectionObserver rather than a scroll listener, and the animation
 * itself lives in globals.css behind `prefers-reduced-motion: no-preference`,
 * so a reduced-motion visitor gets the content immediately and statically.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.dataset.reveal = "shown";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.reveal = "shown";
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-reveal=""
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  );
}
