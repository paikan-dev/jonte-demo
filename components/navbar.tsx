"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/catalogo?cat=cascos", label: "Cascos" },
  { href: "/catalogo?cat=indumentaria", label: "Indumentaria" },
  { href: "/catalogo?cat=accesorios", label: "Accesorios" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-xl hairline-b"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-10 h-20 md:h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center group" aria-label="Motos Jonte — Inicio">
          <Image
            src="/logo-jonte-blanco.png"
            alt="Motos Jonte"
            width={984}
            height={450}
            priority
            className="h-14 md:h-20 w-auto transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="mono-label text-bone hover:text-ember transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-ember group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end">
            <span className="mono-label text-bone-dim">Mar del Plata · AR</span>
            <span className="mono-label text-ember">+54 9 223 695 3889</span>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-hairline"
            aria-label="Menu"
          >
            <span
              className={`w-4 h-px bg-bone transition-all ${
                open ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`w-4 h-px bg-bone transition-all ${
                open ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-ink-2 hairline-t hairline-b">
          <nav className="flex flex-col p-6 gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-extrabold uppercase tracking-tight hover:text-ember transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
