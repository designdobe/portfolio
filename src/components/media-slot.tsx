"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  /** Shown inside the placeholder while the export is missing. */
  caption?: string;
  className?: string;
  /** Tailwind aspect utility, e.g. "aspect-[16/9]". */
  aspect?: string;
  priority?: boolean;
  /**
   * Decorative slots render nothing at all when the file is missing, instead of
   * a labelled placeholder - used for the hero monogram, where an empty box
   * would read as a layout bug. They also drop the surface fill and switch to
   * object-contain, so a transparent PNG keeps its shape and sits on the page
   * background rather than on a grey card.
   */
  decorative?: boolean;
};

/**
 * An image slot that degrades to a labelled placeholder.
 *
 * The Figma asset host is blocked from the build environment, so the project
 * imagery has to be exported by hand into /public/work (see ASSETS.md). Until a
 * file lands, this renders the slot with the name of the missing export rather
 * than a broken image icon, and it starts working the moment the file appears -
 * no code change needed.
 *
 * Plain <img> rather than next/image on purpose: next/image treats a missing
 * local file as a hard error, which would take the whole page down while the
 * exports are still outstanding.
 */
export function MediaSlot({
  src,
  alt,
  caption,
  className = "",
  aspect = "aspect-[16/9]",
  priority = false,
  decorative = false,
}: Props) {
  const [missing, setMissing] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // A 404 that resolves before hydration never fires onError, so re-check the
  // element once on mount: a decoded image always reports a non-zero width.
  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth === 0) setMissing(true);
  }, []);

  if (missing && decorative) return null;

  return (
    <figure
      className={`relative overflow-hidden ${
        decorative ? "" : "bg-surface"
      } ${aspect} ${className}`}
    >
      {!missing && (
        // next/image fails on a local file that has not been exported yet, so
        // this slot deliberately uses a plain img. See the note above.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          src={src}
          alt={alt}
          onError={() => setMissing(true)}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className={`absolute inset-0 size-full ${
            decorative ? "object-contain" : "object-cover"
          }`}
        />
      )}

      {missing && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-line p-6 pb-24 text-center"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 12px, transparent 12px 24px)",
          }}
        >
          <span className="label text-fg-dim">Image pending</span>
          <span className="max-w-sm text-xs leading-relaxed text-fg-dim">
            {caption ?? alt}
          </span>
          <code className="mt-1 text-[10px] break-all text-fg-dim/70">{src}</code>
        </div>
      )}
    </figure>
  );
}
