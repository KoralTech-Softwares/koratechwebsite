import { FAQ } from "@/lib/company-content";

export default function FAQSection() {
  return (
    <section className="py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 id="faq-heading" className="section-heading">
            Frequently Asked Questions
          </h2>
        </header>

        <dl className="mt-12 space-y-6">
          {FAQ.map((item) => (
            <div key={item.question} className="glass-panel p-6">
              <dt className="text-base font-semibold text-white">{item.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-400">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
