import { DELIVERY_PROCESS } from "@/lib/company-content";

export default function DeliveryProcess() {
  return (
    <section className="py-20" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-accent">
            AI-Focused Development Process
          </p>
          <h2 id="process-heading" className="section-heading mt-3">
            From Requirements to Maintenance
          </h2>
          <p className="section-subheading mx-auto">
            Koraltech Softwares embeds AI at every stage of delivery — requirement analysis,
            structured requirement engineering, development, project management, deployment, support,
            and maintenance.
          </p>
        </header>

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" role="list">
          {DELIVERY_PROCESS.map((step, index) => (
            <li key={step.phase}>
              <article className="glass-panel relative h-full p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-electric to-teal-accent text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{step.phase}</h3>
                <p className="mt-1 text-sm font-medium text-teal-accent">{step.question}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.description}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
