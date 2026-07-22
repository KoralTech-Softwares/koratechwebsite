import { CLOUD_CAPABILITIES } from "@/lib/company-content";

export default function CloudCapabilities() {
  return (
    <section className="py-20" aria-labelledby="cloud-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-glow">
            Cloud Infrastructure Services
          </p>
          <h2 id="cloud-heading" className="section-heading mt-3">
            Multi-Cloud Infrastructure &amp; DevOps
          </h2>
          <p className="section-subheading mx-auto">
            Koraltech Softwares delivers cloud migration, DevOps, managed infrastructure, production
            deployment, and cost optimization across Microsoft Azure, AWS, and Firebase/GCP.
          </p>
        </header>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {CLOUD_CAPABILITIES.map((capability) => (
            <article key={capability.title} className="glass-panel p-8">
              <h3 className="text-lg font-bold text-white">{capability.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
