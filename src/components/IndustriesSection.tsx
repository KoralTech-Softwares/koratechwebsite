import { INDUSTRIES } from "@/lib/company-content";

export default function IndustriesSection() {
  return (
    <section className="py-16" aria-labelledby="industries-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 id="industries-heading" className="section-heading">
            Industries We Serve
          </h2>
          <p className="section-subheading mx-auto">
            Koraltech Softwares has delivered solutions across healthcare, fintech, logistics,
            e-commerce, learning management, and more.
          </p>
        </header>

        <ul className="mt-10 flex flex-wrap justify-center gap-3" role="list">
          {INDUSTRIES.map((industry) => (
            <li
              key={industry}
              className="rounded-lg border border-white/10 bg-obsidian-800/60 px-4 py-2 text-sm text-slate-300"
            >
              {industry}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
