"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `transition-all duration-300 ${
      pathname === href ? "text-black" : "text-black/50 hover:text-black"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.04] bg-[#F7F4EE]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <Link
          href="/"
          className="font-editorial text-[1.75rem] leading-none text-black transition-opacity duration-300 hover:opacity-60 md:text-[2rem]"
        >
          Inês Rosado Ceramic Studio
        </Link>

        <nav className="hidden items-center gap-7 text-xs uppercase tracking-[0.18em] md:flex">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>

          <Link href="/gallery" className={linkClass("/gallery")}>
            Gallery
          </Link>

          <Link href="/workshops" className={linkClass("/workshops")}>
            Workshops
          </Link>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>

          <Link
            href="/book"
            className={`rounded-full border px-5 py-2.5 transition-all duration-300 ${
              pathname === "/book"
                ? "border-black bg-black text-white"
                : "border-black/15 bg-[#E8DED2] text-black/70 hover:border-black hover:bg-black hover:text-white"
            }`}
          >
            Book
          </Link>
        </nav>
      </div>
    </header>
  );
}