import { ServiceDetail } from "@/lib/service-details-data";
import { TechIconByName } from "@/components/TechIcons";

export default function UseCasesTab({ service }: { service: ServiceDetail }) {
  return (
    <div className="bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-sm w-full">
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Industry Use Cases</h2>
        <p className="text-lg text-slate-600">
          See how our {service.title.toLowerCase()} services translate into tangible solutions across various industries and business models.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
        {service.commonUseCases.map((useCase, idx) => (
          <div key={idx} className="group flex items-start gap-5 p-4 -ml-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 border border-transparent hover:border-slate-100">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FCE7F3] to-[#FBCFE8] border border-[#F9A8D4]/50 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
              <TechIconByName name={useCase.icon} className="w-6 h-6 text-[#DB2777]" />
            </div>
            <div className="pt-0.5">
              <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-[#DB2777] transition-colors">{useCase.title}</h3>
              <p className="text-slate-600 leading-relaxed text-[14px]">
                {useCase.description || "We provide custom solutions tailored perfectly to address the unique challenges of this specific use case, driving efficiency and growth."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
