import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/company-content";

const FOOTER_LINKS = {
  Offerings: [
    { href: "/services#web-app-development", label: "Web App Development" },
    { href: "/services#mobile-app-development", label: "Mobile App Development" },
    { href: "/services#ai-integrated-development", label: "AI Integrated Development" },
    { href: "/services#cloud-infrastructure", label: "Cloud Infrastructure" },
  ],
  Company: [
    { href: "/our-work", label: "Our Work" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/services", label: "All Offerings" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-200/80 bg-gradient-to-b from-[#edf4fb] via-white to-white" role="contentinfo">
      <div className="mx-auto w-full max-w-[1540px] px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <aside className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Koraltech Softwares">
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src="/assets/images/kts-logo-192.png"
                  alt="KoralTech Logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0b192c]">
                KoralTech
              </span>
            </Link>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 max-w-sm">
              Koraltech Softwares provides requirement analysis, structured requirement
              engineering, development, project management, deployment, support, and maintenance
              from Bengaluru, India.
            </p>
            <address className="mt-4 space-y-1 not-italic text-xs sm:text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{COMPANY.location}</p>
              <a href={`mailto:${COMPANY.email}`} className="text-blue-600 font-bold hover:underline block">
                {COMPANY.email}
              </a>
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-blue-600 font-medium block">
                {COMPANY.phone}
              </a>
            </address>
          </aside>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <nav key={category} aria-label={`${category} links`}>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0b192c] flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>{category}</span>
              </h3>
              <ul className="mt-4 space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-blue-100 pt-6 sm:flex-row">
          <p className="text-xs sm:text-sm text-slate-500">
            &copy; {currentYear} Koraltech Softwares. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 text-center sm:text-right">
            Custom Software Development Bengaluru &middot; AI Integrated Development &middot; Cloud
            Infrastructure Services
          </p>
        </div>
      </div>
    </footer>
  );
}
