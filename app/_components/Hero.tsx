import { activeSocials, site } from "../content";
import { PhotoCrop } from "./PhotoCrop";

const button =
  "inline-flex min-h-11 items-center rounded-lg px-5 text-lg font-semibold motion-safe:transition-colors";
export const primaryButton = `${button} bg-accent hover:bg-[#f0b41c] active:bg-[#e2a50f]`;

function HeroPhoto() {
  return (
    <div className="hero-blob relative mx-auto mt-4 aspect-square w-[60%] max-w-64 overflow-hidden rounded-full bg-accent lg:absolute lg:mx-0 lg:mt-0 lg:overflow-visible lg:rounded-none lg:right-0 lg:top-0 lg:aspect-720/692 lg:w-[42vw] lg:max-w-236 lg:translate-x-[6%] lg:pt-0">
      <PhotoCrop
        sizes="(min-width: 1024px) 25vw, min(45vw, 192px)"
        className="absolute bottom-0 left-1/2 w-[75%] -translate-x-1/2 lg:left-[23%] lg:w-[58%] lg:translate-x-0"
      />
    </div>
  );
}

export function Hero() {
  const linkedin = activeSocials.find((s) => s.kind === "linkedin");
  return (
    <section className="relative lg:flex lg:overflow-x-clip lg:min-h-[max(100svh,min(40.37vw,711px))] lg:items-center">
      <HeroPhoto />
      <div className="container-x lg:w-full">
        <div className="max-w-132 pt-8 lg:max-w-[min(33rem,calc(50vw-clamp(2.5rem,8.33vw,7.5rem)-2rem))] lg:py-24">
          <p className="text-base font-semibold uppercase text-accent lg:text-lg">
            {site.role}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.25rem,3.6vw,3.25rem)] font-bold leading-[1.2] lg:mt-6">
            Hello, my name is {site.name}
          </h1>
          <p className="mt-6 text-base leading-[1.7] text-muted lg:mt-8 lg:text-lg">
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
