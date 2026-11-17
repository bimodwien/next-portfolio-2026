import type { Metadata } from "next";
import Image from "next/image";
import { primaryButton } from "../_components/Hero";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { site } from "../content";

export const metadata: Metadata = {
  title: `About | ${site.name}`,
  description: `About ${site.name}, a full stack developer who builds and runs his own web apps.`,
  alternates: { canonical: "/about" },
};

function Portrait() {
  return (
    <div className="relative mx-auto aspect-square w-[80%] max-w-108 overflow-hidden rounded-full bg-accent lg:order-last lg:mr-0">
      <Image
        src={site.aboutPhoto.src}
        alt={site.aboutPhoto.alt}
        width={site.aboutPhoto.width}
        height={site.aboutPhoto.height}
        loading="eager"
        sizes="(min-width: 1024px) 432px, 80vw"
        className="absolute bottom-0 left-0 h-auto w-full grayscale"
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
          <h1 className="font-display text-[clamp(2.25rem,3.6vw,3.25rem)] font-bold leading-[1.2]">
            About me
          </h1>
          <p className="mt-6 max-w-152 text-base leading-[1.7] text-muted lg:mt-10 lg:text-lg">
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
