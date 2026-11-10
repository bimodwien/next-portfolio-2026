import Link from "next/link";
import { site } from "../content";
import { MobileMenu } from "./MobileMenu";

const navLink =
  "inline-flex min-h-12 items-center px-1 text-lg underline-offset-8 decoration-2 hover:underline aria-[current=page]:underline active:opacity-70 lg:text-[1.375rem]";

const links = [
  { key: "about", label: "About", href: "/about" },
  { key: "projects", label: "Projects", href: "/#projects" },
  { key: "contact", label: "Contact", href: "#contact" }, // every page ends with the contact footer
] as const;

// 1024px and up: overlays the hero so the nav sits on the yellow blob, as in the mockup.
// Below that: in the page flow, so the open menu pushes the hero down instead of covering it.
// onHero paints it yellow there, joining the yellow photo block underneath.
export function SiteHeader({
  current,
  onHero = false,
}: {
  current?: (typeof links)[number]["key"];
  onHero?: boolean;
}) {
  return (
    <header
      className={`relative z-10 lg:absolute lg:inset-x-0 lg:top-0 lg:bg-transparent ${onHero ? "bg-accent" : ""}`}
    >
      <div className="container-x flex flex-wrap items-center justify-between gap-x-4 py-2 lg:py-5">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center font-brand text-lg sm:text-2xl lg:text-[1.75rem]"
        >
          {site.name}
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-10">
            {links.map((l) => (
              <li key={l.key}>
                <Link
                  href={l.href}
                  aria-current={current === l.key ? "page" : undefined}
                  className={navLink}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu links={links} current={current} />
      </div>
    </header>
  );
}
