import { activeSocials, site } from "../content";
import { PhotoCrop } from "./PhotoCrop";

const button =
  "inline-flex min-h-11 items-center rounded-lg px-5 text-lg font-semibold motion-safe:transition-colors";
export const primaryButton = `${button} bg-accent hover:bg-[#f0b41c] active:bg-[#e2a50f]`;

// Below 1024px: a yellow circle like the About page, but with the photo in colour.
// 1024px and up: the Figma blob.
function HeroPhoto() {
  return (
    // translate-y lifts the blob (and the photo) to line up with the text; its top stays off-screen,
    // so the nav keeps its yellow backdrop. translate-x nudges the blob right; keep the photo's
    // left at 35% minus that amount so the photo itself stays put.
    <div className="hero-blob relative mx-auto mt-4 aspect-square w-[72%] max-w-80 overflow-hidden rounded-full bg-accent lg:absolute lg:mx-0 lg:mt-0 lg:overflow-visible lg:rounded-none lg:right-0 lg:top-0 lg:aspect-720/629 lg:w-[50vw] lg:max-w-280 lg:translate-x-[6%] lg:translate-y-[0%] lg:pt-0">
      <PhotoCrop
        sizes="(min-width: 1024px) 29vw, min(54vw, 240px)"
        className="absolute bottom-0 left-1/2 w-[75%] -translate-x-1/2 lg:left-[23%] lg:w-[58%] lg:translate-x-0"
      />
    </div>
  );
}

export function Hero() {
  const linkedin = activeSocials.find((s) => s.kind === "linkedin");
  // Desktop: fills the screen (never shorter than the blob). Phones size to content instead.
  return (
    // overflow-x-clip: the blob is nudged past the right edge; clip it instead of adding a sideways scroll.
    <section className="relative lg:flex lg:overflow-x-clip lg:min-h-[max(100svh,min(43.68vw,769px))] lg:items-center">
      <HeroPhoto />
      <div className="container-x lg:w-full">
        {/* On wide screens the text column stops 2rem short of the blob, which starts at 50vw. */}
        <div className="max-w-132 pt-8 lg:max-w-[min(33rem,calc(50vw-clamp(2.5rem,8.33vw,7.5rem)-2rem))] lg:py-24">
          <p className="text-lg font-semibold uppercase text-accent lg:text-xl">
            {site.role}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,4.45vw,4rem)] font-bold leading-[1.2] lg:mt-6">
            Hello, my name is {site.name}
          </h1>
          <p className="mt-6 text-lg leading-[1.8] text-muted lg:mt-8 lg:text-xl">
            {site.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={primaryButton}>
              Projects
            </a>
            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${button} border-2 border-ink hover:bg-ink hover:text-page active:opacity-80`}
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
