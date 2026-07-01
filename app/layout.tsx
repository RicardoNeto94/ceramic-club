import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "../components/Navbar";
import Link from "next/link";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inês Rosado Studio",
  description:
    "Ceramics, handcrafted objects and workshops by Inês Rosado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body>
        <Navbar />

        {children}

        <footer className="bg-[#EFE7DC]">
          <div className="mx-auto max-w-7xl px-8 py-20">
            <div className="grid gap-14 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
              <div>
                <h3 className="text-lg font-light uppercase tracking-[0.24em]">
                  Inês Rosado
                </h3>

                <p className="mt-6 max-w-sm text-sm leading-relaxed text-black/60">
                  Ceramics, handcrafted objects and creative workshops inspired
                  by texture, form and everyday rituals.
                </p>

                <Link
                  href="/book"
                  className="mt-8 inline-block rounded-full border border-black/20 bg-[#F7F4EE] px-6 py-3 text-xs uppercase tracking-[0.18em] transition hover:border-black hover:bg-black hover:text-white"
                >
                  Book Workshop
                </Link>
              </div>

              <div>
                <h4 className="mb-6 text-xs uppercase tracking-[0.28em] text-black/45">
                  Explore
                </h4>

                <div className="flex flex-col gap-3 text-sm text-black/65">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/gallery">Gallery</Link>
                  <Link href="/workshops">Workshops</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>

              <div>
                <h4 className="mb-6 text-xs uppercase tracking-[0.28em] text-black/45">
                  Studio
                </h4>

                <div className="flex flex-col gap-3 text-sm text-black/65">
                  <Link href="/gallery">Collections</Link>
                  <Link href="/contact">Commissions</Link>
                  <Link href="/book">Private Events</Link>
                  <Link href="/book">Gift Cards</Link>
                </div>
              </div>

              <div>
                <h4 className="mb-6 text-xs uppercase tracking-[0.28em] text-black/45">
                  Contact
                </h4>

                <div className="flex flex-col gap-3 text-sm text-black/65">
                  <p>Portimão, Portugal</p>
                  <a href="mailto:hello@inesrosado.com">
                    hello@inesrosado.com
                  </a>
                  <a href="#" target="_blank" rel="noreferrer">
                    @inesrosado.studio
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col justify-between gap-5 border-t border-black/10 pt-8 text-xs uppercase tracking-[0.18em] text-black/45 md:flex-row">
              <p>
                © {new Date().getFullYear()} Inês Rosado Studio. All rights
                reserved.
              </p>

              <div className="flex gap-6">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}