"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home", sectionId: "home" },
  { href: "/services", label: "Offerings", sectionId: "offerings" },
  { href: "/our-work", label: "Our Work", sectionId: "our-work" },
  { href: "/about", label: "About Us", sectionId: "about" },
  { href: "/contact", label: "Contact", sectionId: "contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();

  // Dynamic Scrollspy to automatically update active nav item as user scrolls
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = [
          { id: "home", el: document.getElementById("home") },
          { id: "offerings", el: document.getElementById("offerings") },
          { id: "our-work", el: document.getElementById("our-work") },
          {
            id: "about",
            el:
              document.getElementById("process") ||
              document.getElementById("about"),
          },
          { id: "contact", el: document.getElementById("contact") },
        ];

        const triggerPoint = window.scrollY + 220;
        let current = "home";

        for (let i = sections.length - 1; i >= 0; i--) {
          const item = sections[i];
          if (item.el) {
            const rect = item.el.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            if (triggerPoint >= elementTop) {
              current = item.id;
              break;
            }
          }
        }

        setActiveSection(current);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-blue-100/90 bg-white/95 backdrop-blur-xl py-2.5 shadow-sm shadow-blue-900/5"
          : "border-b border-blue-100/60 bg-white/90 backdrop-blur-md py-3.5"
      }`}
    >
      <nav
        className="mx-auto flex w-full max-w-[1540px] items-center justify-between px-4 sm:px-6 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Official KTS Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
          aria-label="KoralTech Softwares Home"
        >
          <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center">
            <Image
              src="/assets/images/kts-logo-192.png"
              alt="KoralTech Logo"
              width={50}
              height={50}
              priority
              className="h-full w-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0b192c] leading-none">
              KoralTech
            </span>
          </div>
        </Link>

        {/* Center Navigation Links with Animated Active Indicator */}
        <ul className="hidden items-center gap-1 lg:gap-2 md:flex" role="list">
          {NAV_LINKS.map((link) => {
            let isActive = false;
            if (pathname === "/") {
              isActive = activeSection === link.sectionId;
            } else {
              isActive = pathname.startsWith(link.href);
            }

            const isAnchorOnHome =
              pathname === "/" &&
              link.sectionId !== "about" &&
              link.sectionId !== "contact";
            const targetHref = isAnchorOnHome
              ? `#${link.sectionId}`
              : link.href;

            return (
              <li key={link.href} className="relative">
                <Link
                  href={targetHref}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-blue-600 font-bold"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="header-active-line"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-blue-600 shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Consultation CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-sky-50 hover:from-blue-100 hover:to-sky-100 text-blue-700 font-bold px-5 py-2.5 text-sm transition-all duration-300 shadow-sm hover:shadow active:scale-[0.98] group"
          >
            <span>Schedule a Consultation</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/90 text-slate-800 hover:bg-slate-100 md:hidden active:scale-95 transition-transform shadow-sm"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <div className="relative h-5 w-5 flex flex-col justify-center items-center">
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-200 ${
                mobileOpen ? "translate-y-1 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-200 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-800 transition-all duration-200 ${
                mobileOpen ? "-translate-y-0.5 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-slate-200 bg-white/95 px-4 pb-6 pt-2 shadow-lg backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-1" role="list">
              {NAV_LINKS.map((link) => {
                const isAnchorOnHome =
                  pathname === "/" &&
                  link.sectionId !== "about" &&
                  link.sectionId !== "contact";
                const targetHref = isAnchorOnHome
                  ? `#${link.sectionId}`
                  : link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={targetHref}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2 text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full text-center"
              >
                Schedule a Consultation →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
