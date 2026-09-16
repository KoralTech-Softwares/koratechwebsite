import { ServiceDetail } from "@/lib/service-details-data";

export default function ProcessTab({ service }: { service: ServiceDetail }) {
  if (!service.process || service.process.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Development Process</h3>
        <p className="text-slate-500">Process details are currently being updated.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-sm w-full">
      <div className="max-w-3xl mb-16">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Our Delivery Process</h2>
        <p className="text-lg text-slate-600">
          A proven, step-by-step methodology designed to eliminate risk and ensure the successful delivery of your {service.title.toLowerCase()} project.
        </p>
      </div>

      <div className="max-w-4xl ml-2 md:ml-6 border-l-2 border-slate-100 py-2 space-y-10">
        {service.process.map((step, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12 group">
            {/* Minimal Node */}
            <div className="absolute left-[-17px] top-0 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 group-hover:border-[#0284C7] group-hover:text-[#0284C7] group-hover:bg-[#F0F9FF] transition-all duration-300">
              {step.step}
            </div>
            
            {/* Content */}
            <div className="pt-0.5">
              <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#0284C7] transition-colors">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
