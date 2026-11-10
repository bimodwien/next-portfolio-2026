import Image from "next/image";
import type { Project } from "../content";

function ProjectImage({
  image,
  side,
}: {
  image: Project["image"];
  side: string;
}) {
  const box = `relative order-first aspect-[4/3] md:aspect-auto ${side}`;
  if (!image) {
    // Honest placeholder until a real screenshot exists.
    return (
      <div
        className={`${box} grid place-items-center bg-placeholder text-muted`}
      >
        Project image
      </div>
    );
  }
  return (
    <div className={box}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 768px) 496px, 100vw"
        className="object-cover"
      />
    </div>
  );
}

// Cards alternate image side on wide screens, matching the mockup; on phones the image always leads.
export function ProjectCard({
  project,
  flip,
}: {
  project: Project;
  flip: boolean;
}) {
  return (
    <article className="grid overflow-hidden rounded-3xl bg-card shadow-[0_16px_48px_rgb(41_44_120/0.07)] md:min-h-88 md:grid-cols-2 lg:min-h-131">
      <ProjectImage
        image={project.image}
        side={flip ? "md:order-first" : "md:order-last"}
      />
      <div className="flex flex-col justify-center p-6 sm:p-10 lg:px-12.5">
        <h3 className="font-display text-3xl font-bold leading-tight lg:text-[2.5rem]">
          {project.title}
        </h3>
        <p className="mt-4 max-w-92 text-lg leading-normal text-muted lg:mt-6">
          {project.description}
        </p>
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 w-fit items-center rounded-full border-[1.5px] border-ink px-6 font-semibold hover:bg-ink hover:text-card active:opacity-80 motion-safe:transition-colors lg:mt-8"
          >
            View Project<span className="sr-only">: {project.title}</span>
          </a>
        )}
      </div>
    </article>
  );
}
