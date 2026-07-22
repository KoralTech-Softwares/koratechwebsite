import Link from "next/link";
import { COMPANY } from "@/lib/company-content";

export default function ConsultationCTA() {
  return (
    <section className="py-20" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-electric/20 bg-gradient-to-br from-indigo-electric/10 via-obsidian-800 to-teal-accent/10 p-12 text-center sm:p-16">
          <div
            className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-20"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 id="cta-heading" className="text-3xl font-bold text-white sm:text-4xl text-balance">
              Ready to Start Your Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              Improving your business or taking the first step digitally — Koraltech Softwares
              will give you the best and unique solution to expand your business and capture the
              world.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                {COMPANY.ctaPrimary}
              </Link>
              <a href={`mailto:${COMPANY.email}`} className="btn-secondary px-8 py-4 text-base">
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
