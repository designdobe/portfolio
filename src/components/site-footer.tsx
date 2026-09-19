import { LogoMark } from "@/components/logo-mark";
import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div
        className="mx-auto max-w-[1600px] py-12 md:py-16"
        style={{ paddingInline: "var(--gutter)" }}
      >
        {/* Same tone as the line under it: the mark and the tagline are one
            block, so the mark carrying more weight than its own caption read
            as two competing elements. */}
        <LogoMark className="h-20 w-auto text-fg-muted md:h-24" />

        <p className="label mt-4 text-fg-muted">{profile.tagline}</p>

        {/* Instagram and the copyright carry the same weight: both are footer
            fine print, neither is a call to action. */}
        <div className="mt-12 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <p className="text-xs text-fg-dim">
            © {new Date().getFullYear()} {profile.nameKo}. All rights reserved.
          </p>
          <a
            href={profile.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-fg-dim underline-offset-4 transition-colors hover:text-fg hover:underline"
          >
            Instagram @{profile.instagram.handle}
          </a>
        </div>
      </div>
    </footer>
  );
}
