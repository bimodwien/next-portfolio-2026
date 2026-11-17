import type { IconType } from "react-icons";
import { FaEnvelope, FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";
import type { Social } from "../content";

type Kind = Social["kind"];

const icons: Record<Kind, IconType> = {
  whatsapp: FaSquareWhatsapp,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

export function SocialIcon({ kind }: { kind: Kind }) {
  const Icon = icons[kind];
  return <Icon size={36} aria-hidden="true" />;
}
