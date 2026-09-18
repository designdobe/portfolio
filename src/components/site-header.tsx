"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Lock body scroll only while the sheet is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div
        className="mx-auto flex h-16 max-w-[1600px] items-center justify-between md:h-[72px]"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <Link href="/" className="font-display text-lg leading-none md:text-xl">
          {profile.wordmark}
        </Link>

        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="label text-fg-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="label -mr-2 px-2 py-2 text-fg md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-bg md:hidden"
      >
        <nav aria-label="모바일 메뉴">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line last:border-b-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display block px-[var(--gutter)] py-5 text-2xl"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
