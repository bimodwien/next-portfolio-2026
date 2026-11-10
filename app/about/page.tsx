import type { Metadata } from "next";
import { primaryButton } from "../_components/Hero";
import { PhotoCrop } from "../_components/PhotoCrop";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { site } from "../content";

export const metadata: Metadata = {
  title: `About | ${site.name}`,
  description: `About ${site.name}.`,
};

// Mockup: grayscale portrait on a solid yellow circle, text on the left.
function Portrait() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-131 overflow-hidden rounded-full bg-accent lg:order-last lg:mr-0">
      <PhotoCrop
        sizes="(min-width: 1024px) 325px, 62vw"
        className="absolute bottom-0 left-1/2 w-[62%] -translate-x-1/2 grayscale"
      />
    </div>
  );
}

export default function About() {
  return (
    <>
      <SiteHeader current="about" />
      <main className="container-x grid items-center gap-10 pt-6 lg:min-h-svh lg:grid-cols-2 lg:gap-16 lg:py-28">
        <Portrait />
        <div>
          <h1 className="font-display text-[clamp(2.5rem,4.45vw,4rem)] font-bold leading-[1.2]">
            About me
          </h1>
          <p className="mt-6 max-w-152 text-lg leading-[1.8] text-muted lg:mt-10 lg:text-2xl lg:leading-[1.7]">
            {site.about}
          </p>
          {site.resume && (
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`${primaryButton} mt-8 lg:mt-10`}
            >
              Resume
            </a>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
