import Link from "next/link";
import { SERVICES } from "@/lib/company-content";

export default function ServicesGrid() {
  return (
    <section className="py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 id="services-heading" className="section-heading">
            Our Offerings
          </h2>
          <p className="section-subheading mx-auto">
            At Koraltech Softwares, we offer a comprehensive range of high-tech IT services
            designed to meet your business needs — from requirement analysis through deployment,
            support, and maintenance.
          </p>
        </header>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="glass-panel group p-8 transition-colors hover:border-indigo-electric/30"
            >
              <h3 className="text-xl font-bold text-white group-hover:text-indigo-glow transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2" role="list">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-glow hover:text-teal-glow transition-colors"
              >
                Learn more
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
