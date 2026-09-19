/**
 * A YouTube embed for a project's own film.
 *
 * Server component - no client JS. The iframe is lazy, so the player's
 * payload is only fetched once the section is close to the viewport rather
 * than on every page load. nocookie is the privacy-preserving host; it serves
 * the same player.
 *
 * A direct link sits under the frame: embedding is blocked on some networks
 * and in some regions, and a blank rectangle with no way out is worse than an
 * extra line of text.
 */
export function VideoEmbed({
  youtubeId,
  title,
  vertical = false,
}: {
  youtubeId: string;
  title: string;
  /** Shorts are 9:16; a full-width vertical frame would swallow the page. */
  vertical?: boolean;
}) {
  const src = `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`;

  return (
    <div className={vertical ? "w-full max-w-[380px]" : "w-full max-w-[960px]"}>
      <div
        className={`relative w-full overflow-hidden bg-surface ${
          vertical ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      </div>

      <a
        href={`https://www.youtube.com/watch?v=${youtubeId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-sm text-fg-dim underline-offset-4 transition-colors hover:text-fg hover:underline"
      >
        YouTube에서 보기 <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
