import { ServiceDetail } from "@/lib/service-details-data";
import { TechIconByName } from "@/components/TechIcons";

export default function KeyFeaturesTab({ service }: { service: ServiceDetail }) {
  if (!service.detailedFeatures || service.detailedFeatures.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Key Features</h3>
        <p className="text-slate-500">Feature details are currently being updated.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm w-full">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Core Capabilities & Features</h2>
          <p className="text-lg text-slate-600">
            Explore the powerful features and technical capabilities that make our {service.title} services stand out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-2 lg:gap-y-6">
          {service.detailedFeatures.map((feature, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col sm:flex-row items-start gap-5 p-6 rounded-2xl hover:bg-slate-50 transition-all duration-300 border border-transparent hover:border-slate-100"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] border border-[#BAE6FD]/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <TechIconByName name={feature.icon} className="w-6 h-6 text-[#0284C7]" />
              </div>
              <div className="pt-1">
                <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#0284C7] transition-colors">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-[15px] max-w-3xl">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
