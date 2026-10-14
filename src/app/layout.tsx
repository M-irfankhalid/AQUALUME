import { Inter } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  // Without this, Next resolves canonical/OG URLs against localhost:3000 —
  // i.e. the deployed site would advertise localhost. VERCEL_URL is injected
  // automatically at build time on Vercel.
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: {
    default: "Cornerstone Construction",
    template: "%s | Cornerstone Construction",
  },
  description:
    "Cornerstone Construction delivers commercial, residential, and industrial building projects with uncompromising quality, safety, and on-time delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scrollbar-thin">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <Navbar />
        <main className="container mx-auto px-4 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
