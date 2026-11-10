import { activeSocials, site } from "../content";
import { SocialIcon } from "./SocialIcon";

export function SiteFooter() {
  return (
    <footer id="contact" className="container-x pb-16 pt-24 text-center lg:pb-20 lg:pt-36">
      {activeSocials.length > 0 && (
        <ul className="flex justify-center gap-2 sm:gap-4">
          {activeSocials.map((s) => (
            <li key={s.kind}>
              <a
                href={s.href}
                // mailto opens the mail app; a new tab would just be left blank.
                target={s.kind === "email" ? undefined : "_blank"}
                rel={s.kind === "email" ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                className="grid size-14 place-items-center rounded-lg hover:bg-accent active:opacity-70 motion-safe:transition-colors"
              >
                <SocialIcon kind={s.kind} />
              </a>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-6 text-muted">
        {site.name} {site.year}
      </p>
    </footer>
  );
}
