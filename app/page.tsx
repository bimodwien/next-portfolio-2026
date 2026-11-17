import { Hero } from "./_components/Hero";
import { ProjectCard } from "./_components/ProjectCard";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { FaGithub } from "react-icons/fa6";
import { activeSocials, projects, site } from "./content";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  image: `${site.url}${site.photo.src}`,
  sameAs: [
    ...activeSocials.filter((s) => s.kind === "linkedin").map((s) => s.href),
    site.github,
  ],
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Hero />
        <section
          id="projects"
          aria-labelledby="projects-title"
          className="container-x pt-20"
        >
          <h2
            id="projects-title"
            className="text-center font-display text-3xl font-bold lg:text-4xl"
          >
            Projects
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-3 block h-1 w-25 rounded-full bg-accent"
          />
          <ul className="mx-auto mt-12 grid max-w-248 gap-10 lg:mt-20 lg:gap-20">
            {projects.map((project, i) => (
              <li key={i}>
                <ProjectCard project={project} flip={i % 2 === 1} />
              </li>
            ))}
          </ul>
          {site.github && (
            <p className="mx-auto mt-12 max-w-248 text-center text-base text-muted lg:text-lg lg:mt-20">
              If you want to see more of my portfolio, please visit: {"  "}
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="mx-auto block w-fit py-2.5 font-semibold text-ink underline-offset-4 decoration-2 hover:underline active:opacity-70 md:inline md:py-0"
              >
                <span className="md:hidden">GitHub</span>
                <FaGithub
                  aria-hidden="true"
                  className="hidden size-[1.1em] align-[-0.15em] md:inline"
                />
              </a>
            </p>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
