import { TECH_STACK } from "@/lib/company-content";

const categoryColors: Record<string, string> = {
  Frontend: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  Mobile: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  Backend: "border-green-500/30 bg-green-500/10 text-green-300",
  Cloud: "border-orange-500/30 bg-orange-500/10 text-orange-300",
  Database: "border-purple-500/30 bg-purple-500/10 text-purple-300",
  DevOps: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
  AI: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300",
};

export default function TechStackBadges() {
  return (
    <section className="py-16" aria-labelledby="tech-stack-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="tech-stack-heading" className="text-2xl font-bold text-white sm:text-3xl">
            Technology Stack Expertise
          </h2>
          <p className="mt-3 text-slate-400">
            Koraltech Softwares engineers work with the technologies proven across our production
            projects — React, React Native, Node.js, Microsoft Azure, Firebase, and more.
          </p>
        </div>

        <ul
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          role="list"
          aria-label="Technology stack badges"
        >
          {TECH_STACK.map((tech) => (
            <li key={tech.name}>
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-shadow hover:shadow-lg ${
                  categoryColors[tech.category] || "border-white/20 bg-white/5 text-slate-300"
                }`}
                title={`${tech.name} — ${tech.category}`}
              >
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
