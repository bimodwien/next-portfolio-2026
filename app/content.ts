// Site copy and links in one place. Lorem ipsum marks text that still needs real content.

export const site = {
  name: "Bimo Dwien Prabowo",
  year: 2026,
  role: "Full Stack Developer",
  url: "https://bimodwien.id",
  description:
    "Bimo Dwien Prabowo is a full stack developer who builds and runs web apps with Next.js, NestJS, Express and Go.",
  intro:
    "I'm a full stack developer who cares about the unglamorous parts: data that stays correct, auth that holds up, and deploys that don't break things. I ship apps and stay around to keep them running.",
  about:
    "I learn by building things all the way through. I design the database, write the API and the interface, then set up the server and the deploy pipeline myself. Running my own apps taught me the parts tutorials skip: backups before every deploy, rate limits on login, and bugs that only show up in production.",
  // Link to your CV (PDF in /public or an external URL). Empty = Resume button hidden.
  resume: "",
  github: "https://github.com/bimodwien",
  photo: {
    src: "/bimo-hero.webp",
    alt: "Bimo wearing glasses, a black hoodie and a blue plaid shirt",
    width: 1200,
    height: 1362,
    visibleHeight: 1362, // already cropped to half body, so show all of it
  },
  aboutPhoto: {
    src: "/about-photo.webp",
    alt: "Bimo smiling, wearing glasses and a black hoodie",
    width: 704,
    height: 515,
  },
};

export type Social = {
  kind: "whatsapp" | "linkedin" | "email";
  label: string;
  href: string;
};

export const socials: Social[] = [
  {
    kind: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/6281282525002",
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
    title: "Nobimotion",
    description:
      "A Notion-style workspace with nested pages, a task board, and live editing synced through a small Go service.",
    href: "https://nobimotion.bimodwien.id",
    image: {
      src: "/projects/nobimotion.png",
      alt: "NoBimotion home page: Team docs and tasks in one workspace",
    },
  },
  {
    title: "Tokopakbimo",
    description:
      "A multi-seller marketplace where one checkout pays several sellers through Midtrans, confirmed by a verified webhook.",
    href: "https://tokopakbimo.bimodwien.id",
    image: {
      src: "/projects/tokopakbimo.png",
      alt: "tokopakbimo home page with product categories, a newsletter banner and new products",
    },
  },
  {
    title: "More to come...",
    description: "Look forward to more exciting projects",
    href: "",
    image: {
      src: "/projects/more-to-come.jpg",
      alt: "Two people sketching wireframes on paper next to their laptops",
    },
  },
];

export const activeSocials = socials.filter((s) => s.href !== "");
