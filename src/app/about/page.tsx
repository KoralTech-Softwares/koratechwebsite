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
              <p className="text-xs font-bold uppercase tracking-wider text-sky-600 flex items-center gap-2">
                <span>WHO WE ARE</span>
                <span className="h-0.5 w-6 bg-sky-500 rounded-full inline-block" />
              </p>
              <h1 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b192c] mt-2">
                Pioneering Custom Software &amp; AI Integration
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
                Headquartered in Bengaluru, India, Koraltech Softwares is dedicated to driving innovation, enhancing efficiency, and achieving technical excellence for businesses worldwide.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-slate-700">
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                  📍 HQ: Bengaluru, India
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                  🌐 5 Global Markets
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                  🚀 350+ Projects
                </span>
              </div>
            </header>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl bg-white p-6 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                <Image
                  src="/assets/svg/Aboutus.svg"
                  alt="About Koraltech Softwares"
                  width={380}
                  height={260}
                  className="h-auto w-full object-contain drop-shadow-md"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Purpose Section */}
      <section className="py-12" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-3xl border border-slate-100 bg-white p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 font-mono">
              Our Guiding Purpose
            </span>
            <h2 id="mission-heading" className="text-2xl sm:text-3xl font-extrabold text-[#0b192c] mt-2">
              Transforming Ideas Into Scalable Enterprise Realities
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 text-sm leading-relaxed text-slate-600">
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
            <p className="text-xs font-bold uppercase tracking-wider text-sky-600 flex items-center justify-center gap-2">
              <span>CULTURAL TENETS</span>
              <span className="h-0.5 w-6 bg-sky-500 rounded-full inline-block" />
            </p>
            <h2 id="values-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b192c] mt-2">
              Our Core Principles &amp; Values
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {VALUES.map((value) => (
              <article
                key={value.title}
                className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200/80 hover:shadow-[0_12px_32px_rgba(0,118,228,0.08)] flex flex-col justify-between"
              >
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 text-2xl shadow-inner transition-transform group-hover:scale-105">
                    {value.icon}
                  </span>
                  <h3 className="text-xl font-bold text-[#0b192c] mt-5 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
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
