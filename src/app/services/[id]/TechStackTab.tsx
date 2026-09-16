import { ServiceDetail } from "@/lib/service-details-data";
import { TechIconByName } from "@/components/TechIcons";

export default function TechStackTab({ service }: { service: ServiceDetail }) {
  // Let's creatively group the existing flat technologyStack array into categories for a better display.
  // In a real app, the data itself should be grouped, but we can do a simple split here based on common keywords.
  
  const frontend = service.technologyStack.filter(t => ["React", "Next.js", "Angular", "Vue.js", "React Native", "Flutter", "Swift", "Kotlin", "TypeScript", "D3.js"].includes(t.name));
  const backend = service.technologyStack.filter(t => ["Node.js", "Python", "PHP", ".NET", "Express", "FastAPI", ".NET Core", "C / C++"].includes(t.name));
  const database = service.technologyStack.filter(t => ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Firebase", "SQLite", "GraphQL", "Pinecone"].includes(t.name));
  const devops = service.technologyStack.filter(t => ["AWS", "Docker", "Azure", "GCP", "Terraform", "Kubernetes", "GitHub Actions", "Azure DevOps", "Linux", "Nginx", "Prometheus", "Grafana"].includes(t.name));
  const other = service.technologyStack.filter(t => !frontend.includes(t) && !backend.includes(t) && !database.includes(t) && !devops.includes(t));

  const categories = [
    { title: "Frontend & Mobile", items: frontend, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
    { title: "Backend & API", items: backend, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
    { title: "Database & Data", items: database, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
    { title: "Cloud & DevOps", items: devops, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
    { title: "Tools & Others", items: other, color: "text-slate-600", bg: "bg-slate-50", border: "border-slate-100" }
  ].filter(c => c.items.length > 0);

  return (
    <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm w-full">
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Technology Stack</h2>
        <p className="text-lg text-slate-600">
          We utilize modern, battle-tested technologies to ensure your {service.title.toLowerCase()} solution is scalable, secure, and future-proof.
        </p>
      </div>

      <div className="space-y-5 lg:space-y-6">
        {categories.map((category, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-start gap-3 md:gap-8 border-b border-slate-100 pb-5 lg:pb-6 last:border-0 last:pb-0">
            <div className="w-48 flex-shrink-0 pt-1.5">
              <h3 className={`font-bold text-[13px] uppercase tracking-widest ${category.color}`}>{category.title}</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 flex-1 w-full">
              {category.items.map((tech, tIdx) => (
                <div key={tIdx} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-white shadow-sm hover:border-[#0284C7]/30 hover:shadow transition-all group cursor-default">
                  <div className="flex-shrink-0 w-6 h-6 rounded-md bg-white border border-slate-100 flex items-center justify-center group-hover:border-[#0284C7]/20 transition-colors">
                    <TechIconByName name={tech.icon} className="w-3.5 h-3.5 text-slate-600 group-hover:scale-110 group-hover:text-[#0284C7] transition-all" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 truncate group-hover:text-[#0284C7] transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
