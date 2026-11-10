// Site copy and links in one place. Lorem ipsum marks text that still needs real content.

export const site = {
  name: "Bimo Dwien Prabowo",
  year: 2026,
  role: "Lorem ipsum",
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  about:
    "Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet sit.",
  // Link to your CV (PDF in /public or an external URL). Empty = Resume button hidden.
  resume: "",
  // Shown under the project list. Guessed from your git username; check it's your profile.
  github: "https://github.com/bimodwien",
  // Transparent cut-out. width/height must match the file's real pixel size.
  // visibleHeight: how many px from the top are shown (crop line); raise it to show more body.
  photo: {
    // 1200px wide is enough: the photo shows at most ~560px wide, so this covers 2x screens.
    src: "/bimo-hero.webp",
    alt: "Bimo wearing glasses, a black hoodie and a blue plaid shirt",
    width: 1200,
    height: 1362,
    visibleHeight: 1362, // already cropped to half body, so show all of it
  },
};

export type Social = { kind: "instagram" | "linkedin" | "email"; label: string; href: string };

// Empty href = not provided yet; the link is hidden instead of pointing nowhere.
export const socials: Social[] = [
  {
    kind: "instagram",
    label: "Instagram",
    href: "https://instagram.com/bimodprabowo",
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/bimodwien",
  },
  { kind: "email", label: "Email", href: "mailto:bimodwien2@gmail.com" },
];

export type Project = {
  title: string;
  description: string;
  href: string;
  image?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis.",
    href: "",
  },
  {
    title: "Dolor Sit",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    href: "",
  },
  {
    title: "Amet Consectetur",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    href: "",
  },
];

export const activeSocials = socials.filter((s) => s.href !== "");
