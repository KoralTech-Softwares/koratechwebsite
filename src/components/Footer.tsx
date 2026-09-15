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
    <footer className="border-t border-slate-200 bg-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <aside className="lg:col-span-1">
            <Link href="/" className="inline-block" aria-label="Koraltech Softwares">
              <Image
                src="/logo.svg"
                alt="Koraltech Softwares"
                width={180}
                height={54}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Koraltech Softwares provides requirement analysis, structured requirement
              engineering, development, project management, deployment, support, and maintenance
              from Bengaluru, India.
            </p>
            <address className="mt-4 space-y-1 not-italic text-sm text-slate-500">
              {COMPANY.location}
              <br />
              <a href={`mailto:${COMPANY.email}`} className="text-blue-600 font-semibold hover:underline">
                {COMPANY.email}
              </a>
              <br />
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-blue-600">
                {COMPANY.phone}
              </a>
            </address>
          </aside>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <nav key={category} aria-label={`${category} links`}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0b192c]">
                {category}
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Koraltech Softwares. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Custom Software Development Bengaluru &middot; AI Integrated Development &middot; Cloud
            Infrastructure Services
          </p>
        </div>
      </div>
    </footer>
  );
}
