"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Offerings" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll for dynamic header styling
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/15 bg-obsidian-950/90 backdrop-blur-2xl py-1 shadow-2xl shadow-obsidian-950/60"
          : "border-b border-white/10 bg-koral-navy/95 backdrop-blur-xl py-0 shadow-xl shadow-obsidian-950/40"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Enriched & Larger Brand Logo */}
        <Link href="/" className="group flex items-center" aria-label="Koraltech Softwares home">
          <Image
            src="/logo.svg"
            alt="Koraltech Softwares"
            width={240}
            height={70}
            priority
            className="h-11 sm:h-13 lg:h-15 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
          />
        </Link>

        {/* Larger & Bolder Navigation Links with Active Indicator */}
        <ul className="hidden items-center gap-2 md:flex" role="list">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`relative rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="header-active-tab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-koral-blue/25 to-teal-accent/20 border border-koral-blue/40 shadow-inner"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Prominent CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="btn-primary text-sm font-bold px-6 py-3 shadow-lg shadow-koral-blue/30 hover:shadow-koral-blue/50 group"
          >
            <span>Schedule Consultation</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Snappy Mobile Menu Button with Morphing Animation */}
        <button
          type="button"
          className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white md:hidden active:scale-95 transition-transform"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <div className="relative h-5 w-5 flex flex-col justify-center items-center">
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-200 ${
                mobileOpen ? "translate-y-1 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-200 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-200 ${
                mobileOpen ? "-translate-y-0.5 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Instant Zero-Lag Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-obsidian-950/98 backdrop-blur-2xl md:hidden"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.04, delayChildren: 0.02 } },
                closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
              }}
              className="flex flex-col gap-1.5 px-4 py-5"
              role="list"
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <motion.li
                    key={link.href}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -10 },
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-koral-blue/25 to-teal-accent/20 border border-koral-blue/40 text-white font-bold"
                          : "text-slate-200 hover:bg-white/10 hover:text-white"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-teal-accent animate-pulse" />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 10 },
                }}
                className="pt-3"
              >
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center text-base py-3.5 shadow-xl shadow-koral-blue/30"
                  onClick={() => setMobileOpen(false)}
                >
                  Schedule Consultation →
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


