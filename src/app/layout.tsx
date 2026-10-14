import type { Metadata } from "next";
import { Inter, Archivo, Instrument_Serif } from "next/font/google";
import "../styles/globals.css";

import SmoothScroll from "@/components/site/SmoothScroll";
import Preloader from "@/components/site/Preloader";
import Grain from "@/components/site/Grain";
import Cursor from "@/components/site/Cursor";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  // Without this, Next resolves canonical/OG URLs against localhost:3000 —
  // i.e. the deployed site would advertise localhost. VERCEL_URL is injected
  // automatically at build time on Vercel.
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: {
    default: "Aqualume Foundation — water that is still running in ten years",
    template: "%s | Aqualume Foundation",
  },
  description:
    "A demonstration site for a fictional water charity. Clean water, built to last: community wells, piped networks and the maintenance that keeps them working.",
  openGraph: {
    title: "Aqualume Foundation",
    description:
      "A well is not the achievement. A well still running ten years later is.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} ${instrument.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Preloader />
        <SmoothScroll />
        <Grain />
        <Cursor />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
