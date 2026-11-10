import type { IconType } from "react-icons";
import { FaEnvelope, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import type { Social } from "../content";

type Kind = Social["kind"];

// Solid Font Awesome glyphs, closest to the filled icons in the mockup.
const icons: Record<Kind, IconType> = {
  instagram: FaSquareInstagram,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

export function SocialIcon({ kind }: { kind: Kind }) {
  const Icon = icons[kind];
  return <Icon size={36} aria-hidden="true" />;
}
