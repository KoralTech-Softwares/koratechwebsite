import { COMPANY } from "@/lib/company-content";

export default function GlobalClients() {
  return (
    <section className="py-16" aria-labelledby="global-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-glow">
            Global Delivery
          </p>
          <h2 id="global-heading" className="section-heading mt-3">
            Trusted Across Continents
          </h2>
          <p className="section-subheading mx-auto">
            Koraltech Softwares has worked with clients in the USA, London, UAE, India, and
            Australia — delivering software products with seamless cross-timezone collaboration.
          </p>
        </header>

        <ul
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
          role="list"
          aria-label="Countries where Koraltech Softwares has delivered projects"
        >
          {COMPANY.globalMarkets.map((market) => (
            <li
              key={market}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
            >
              {market}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
