import Link from "next/link";
import { COMPANY } from "@/lib/company-content";

export default function ConsultationCTA() {
  return (
    <section id="contact" className="py-20 lg:py-24 scroll-mt-20" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-600 via-sky-600 to-indigo-700 p-12 text-center sm:p-16 shadow-2xl shadow-blue-500/20 text-white">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent_70%)]"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 id="cta-heading" className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight text-balance">
              Ready to Start Your Journey?
            </h2>
            <p className="mx-auto mt-4 text-base sm:text-lg text-blue-100 leading-relaxed">
              Improving your business or taking the first step digitally — Koraltech Softwares
              will give you the best and unique solution to expand your business and capture the
              world.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-blue-700 shadow-lg shadow-black/10 transition-all duration-300 hover:bg-slate-50 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Make Your Journey with Us</span>
                <span>→</span>
              </Link>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Email Us Directly</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
