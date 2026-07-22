import { createPageMetadata } from "@/lib/metadata";
import DeliveryProcess from "@/components/DeliveryProcess";
import GlobalClients from "@/components/GlobalClients";
import ConsultationCTA from "@/components/ConsultationCTA";
import { COMPANY } from "@/lib/company-content";

export const metadata = createPageMetadata({
  title: "About Koraltech Softwares",
  description:
    "Koraltech Softwares is a custom software development company in Bengaluru, India. We provide requirement analysis, AI-integrated development, and have delivered projects for clients in USA, London, UAE, India, and Australia.",
  path: "/about",
});

const VALUES = [
  {
    title: "Client-Centric Partnership",
    description:
      "Our unwavering commitment is to ensure our clients achieve their goals. By understanding their needs deeply, we tailor solutions that drive success and form enduring partnerships.",
  },
  {
    title: "Innovation & Excellence",
    description:
      "Innovation fuels our drive to push boundaries and pioneer new solutions. We consistently deliver transformative ideas that propel businesses to new heights.",
  },
  {
    title: "AI-First Development",
    description:
      "Koraltech Softwares embeds AI at every stage — requirement analysis, design, development, testing, deployment, and support — enabling smarter, faster delivery.",
  },
  {
    title: "Global Delivery, Local Roots",
    description:
      "Headquartered in Bengaluru with delivery capabilities across USA, London, UAE, India, and Australia for seamless cross-timezone collaboration.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-12" aria-labelledby="about-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-accent">
              About Us
            </p>
            <h1 id="about-heading" className="section-heading mt-3">
              About Koraltech Softwares
            </h1>
            <p className="section-subheading">
              As pioneers in software development, Koraltech Softwares specializes in harnessing
              the latest technological advancements to drive innovation and transform industries.
              We provide requirement analysis, structured requirement engineering, development,
              project management, deployment, support, and maintenance.
            </p>
          </header>
        </div>
      </section>

      <section className="py-16" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="glass-panel p-8 sm:p-12">
            <h2 id="mission-heading" className="text-2xl font-bold text-white">
              Our Mission
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Koraltech Softwares exists to help businesses build, scale, and transform through
              technology. We combine deep full-stack development expertise with AI integration at
              every stage — from the first requirement workshop to ongoing maintenance after launch.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Our value lies in our ability to deliver innovative solutions tailored to your needs,
              supported by a commitment to excellence, collaboration, and long-term success.
            </p>
          </article>
        </div>
      </section>

      <DeliveryProcess />
      <GlobalClients />

      <section className="py-16" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="values-heading" className="section-heading text-center">
            Our Values
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALUES.map((value) => (
              <article key={value.title} className="glass-panel p-8">
                <h3 className="text-lg font-bold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />

      <aside className="sr-only" aria-label="Company location facts">
        <p>Koraltech Softwares is located in {COMPANY.location}.</p>
        <p>
          Koraltech Softwares has delivered projects for clients in{" "}
          {COMPANY.globalMarkets.join(", ")}.
        </p>
      </aside>
    </>
  );
}
