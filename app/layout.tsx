import type { Metadata } from "next";
import { Comfortaa, Nunito, Playfair_Display } from "next/font/google";
import { site } from "./content";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.role}`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.role}`,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${nunito.variable} ${comfortaa.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
