import Image from "next/image";
import { createPageMetadata } from "@/lib/metadata";
import DeliveryProcess from "@/components/DeliveryProcess";
import GlobalClients from "@/components/GlobalClients";
import ConsultationCTA from "@/components/ConsultationCTA";
import { COMPANY } from "@/lib/company-content";

export const metadata = createPageMetadata({
  title: "About Koraltech Softwares — Bengaluru Custom Software & AI",
  description:
    "Koraltech Softwares is a custom software development company in Bengaluru, India. We provide requirement analysis, AI-integrated development, and have delivered projects for clients in USA, London, UAE, India, and Australia.",
  path: "/about",
});

const VALUES = [
  {
    icon: "🤝",
    title: "Client-Centric Partnership",
    description:
      "Our unwavering commitment is to ensure our clients achieve their goals. By understanding their needs deeply, we tailor solutions that drive success and form enduring partnerships.",
  },
  {
    icon: "💡",
    title: "Innovation & Excellence",
    description:
      "Innovation fuels our drive to push boundaries and pioneer new solutions. We consistently deliver transformative ideas that propel businesses to new heights.",
  },
  {
    icon: "⚡",
    title: "AI-First Development",
    description:
      "Koraltech Softwares embeds AI at every stage — requirement analysis, design, development, testing, deployment, and support — enabling smarter, faster delivery.",
  },
  {
    icon: "🌍",
    title: "Global Delivery, Local Roots",
    description:
      "Headquartered in Bengaluru with delivery capabilities across USA, London, UAE, India, and Australia for seamless cross-timezone collaboration.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Illustration */}
      <section className="pt-32 pb-16 relative overflow-hidden" aria-labelledby="about-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <header className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-glow">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-accent animate-pulse" />
                Who We Are
              </div>
              <h1 id="about-heading" className="section-heading mt-3">
                Pioneering Custom Software &amp; AI Integration
              </h1>
              <p className="section-subheading">
                Headquartered in Bengaluru, India, Koraltech Softwares is dedicated to driving innovation, enhancing efficiency, and achieving technical excellence for businesses worldwide.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
                <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2">
                  📍 HQ: Bengaluru, India
                </span>
                <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2">
                  🌐 5 Global Markets
                </span>
                <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2">
                  🚀 350+ Projects
                </span>
              </div>
            </header>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-tr from-koral-blue/20 via-teal-accent/20 to-transparent p-6 border border-white/10 shadow-2xl backdrop-blur-xl">
                <Image
                  src="/assets/svg/Aboutus.svg"
                  alt="About Koraltech Softwares"
                  width={380}
                  height={260}
                  className="h-auto w-full object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Purpose Section */}
      <section className="py-16" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="glass-panel p-8 sm:p-12 relative overflow-hidden border-white/10 rounded-3xl">
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-koral-blue/15 blur-3xl" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-glow font-mono">
              Our Guiding Purpose
            </span>
            <h2 id="mission-heading" className="text-3xl font-bold text-white mt-2">
              Transforming Ideas Into Scalable Enterprise Realities
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 text-sm leading-relaxed text-slate-300">
              <p>
                Koraltech Softwares exists to help businesses build, scale, and transform through technology. We combine deep full-stack engineering with AI integration at every stage — from the first requirement workshop to production deployment and SLA support.
              </p>
              <p>
                Our value lies in our ability to deliver bespoke, scalable architectures tailored to specific business workflows, backed by rigorous quality assurance, modern DevOps practices, and transparent communication.
              </p>
            </div>
          </article>
        </div>
      </section>

      <DeliveryProcess />
      <GlobalClients />

      {/* Core Values */}
      <section className="py-20" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-glow font-mono">
              Cultural Tenets
            </span>
            <h2 id="values-heading" className="section-heading mt-2">
              Our Core Principles &amp; Values
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {VALUES.map((value) => (
              <article
                key={value.title}
                className="glass-panel-hover p-8 border-white/10 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-obsidian-950/80 border border-white/10 text-2xl shadow-inner group-hover:scale-110 transition-transform">
                    {value.icon}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-5 group-hover:text-teal-glow transition-colors">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {value.description}
                  </p>
                </div>
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

