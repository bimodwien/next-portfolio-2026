"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

type NavItem = { key: string; label: string; href: string };

// Phones only: a labelled toggle. The list wraps onto its own row inside the header (basis-full),
// so opening it pushes the page down, and it takes the header's background.
export function MobileMenu({
  links,
  current,
}: {
  links: readonly NavItem[];
  current?: string;
}) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      button.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const Icon = open ? HiXMark : HiBars3;
  return (
    <>
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg px-2 text-lg hover:bg-ink/5 active:bg-ink/10 md:hidden"
      >
        <Icon size={26} aria-hidden="true" />
        {/* The word fits from 360px up; below that the button keeps it for screen readers only. */}
        <span className="max-[359px]:sr-only">Menu</span>
      </button>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="basis-full md:hidden"
        >
          <ul className="flex flex-col pb-1">
            {links.map((l) => (
              <li key={l.key}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={current === l.key ? "page" : undefined}
                  // 44px rows: the smallest comfortable thumb target. hover: only fires with a mouse in Tailwind v4.
                  className="flex min-h-11 items-center justify-end pr-2 text-base underline-offset-4 decoration-2 underline aria-[current=page]:underline active:opacity-70"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
