import Link from "next/link";
import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div
        className="mx-auto max-w-[1600px] py-12 md:py-16"
        style={{ paddingInline: "var(--gutter)" }}
      >
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-3xl md:text-5xl">{profile.name}</p>
            <p className="label mt-2 text-fg-muted">{profile.tagline}</p>
          </div>

          <ul className="flex flex-col gap-3 md:items-end">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
              >
                Instagram @{profile.instagram.handle}
              </a>
            </li>
            <li>
              <Link
                href="/work"
                className="text-sm text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
              >
                전체 프로젝트
              </Link>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-xs text-fg-dim">
          © {new Date().getFullYear()} {profile.nameKo}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
