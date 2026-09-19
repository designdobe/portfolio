import fs from "node:fs";
import path from "node:path";
import { profile } from "@/content/profile";
import { asset } from "@/lib/asset";

const LOGO = "/brand/logo.svg";

/** Server component, so the logo slot can check the file at build time. */
function hasLogo() {
  try {
    return fs.statSync(path.join(process.cwd(), "public", LOGO)).size > 0;
  } catch {
    return false;
  }
}

export function SiteFooter() {
  const logo = hasLogo();

  return (
    <footer className="border-t border-line">
      <div
        className="mx-auto max-w-[1600px] py-12 md:py-16"
        style={{ paddingInline: "var(--gutter)" }}
      >
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset(LOGO)}
            alt={profile.name}
            width={257}
            height={327}
            className="h-14 w-auto md:h-16"
          />
        ) : (
          // Until the mark is in the repo, the wordmark stands in at the same
          // scale. Dropping public/brand/logo.svg in swaps it, no code change.
          <p className="font-display text-xl md:text-2xl">{profile.wordmark}</p>
        )}

        <p className="label mt-3 text-fg-muted">{profile.tagline}</p>

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
