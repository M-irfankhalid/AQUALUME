"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { IconMenu, IconX, IconBuildingSkyscraper } from "@tabler/icons-react";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/service" },
  { title: "Projects", href: "/project" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-background">
            <IconBuildingSkyscraper size={24} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-tight text-foreground">
              CORNERSTONE
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-primary">
              CONSTRUCTION
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-primary"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.title}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+15551234567"
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            +1 (555) 123-4567
          </a>
          <Button text="Get a Quote" link="/contact" variant="primary" size="sm" />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-lg text-foreground hover:bg-surface-2 transition-colors"
        >
          {menuOpen ? <IconX size={26} /> : <IconMenu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden border-t border-border ${
          menuOpen ? "max-h-[32rem] opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"
        }`}
      >
        <div className="bg-background">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 text-base font-semibold uppercase tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-primary bg-surface-2"
                  : "text-muted hover:text-foreground hover:bg-surface"
              }`}
            >
              {link.title}
            </Link>
          ))}
          <div className="px-6 pt-3">
            <Button text="Get a Quote" link="/contact" variant="primary" size="sm" fullWidth />
          </div>
        </div>
      </div>
    </nav>
  );
}
