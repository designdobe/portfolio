import type { Metadata } from "next";
import { Archivo, Gothic_A1 } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/content/profile";
import "./globals.css";

/** Open stand-in for the deck's Owners XXWide. See globals.css .font-display. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

/**
 * Stand-in for SUIT, which Google Fonts does not serve.
 *
 * Gothic A1 exposes no named "korean" subset: Google returns the Hangul blocks
 * as extra unicode-range @font-face rules alongside the latin request, and
 * next/font self-hosts all of them. Korean copy therefore renders in Gothic A1,
 * not in a system fallback.
 */
const gothicA1 = Gothic_A1({
  variable: "--font-gothic-a1",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kimyuri.portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} · ${profile.tagline}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.summary,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: `${profile.name} · ${profile.tagline}`,
    description: profile.summary,
    siteName: profile.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${archivo.variable} ${gothicA1.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-fg">
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-fg focus:px-4 focus:py-2 focus:text-accent-fg"
        >
          본문으로 건너뛰기
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
