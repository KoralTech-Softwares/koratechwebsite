import Link from "next/link";
import { SERVICES } from "@/lib/company-content";
import WebAppIcon from "./all-services/WebAppIcon";
import MobileAppIcon from "./all-services/MobileAppIcon";
import ApiIcon from "./all-services/ApiIcon";
import BleIcon from "./all-services/BleIcon";
import AiIcon from "./all-services/AiIcon";
import SoftwareProductIcon from "./all-services/SoftwareProductIcon";
import ItStaffIcon from "./all-services/ItStaffIcon";
import CloudIcon from "./all-services/CloudIcon";

const SERVICE_CONFIG: Record<
  string,
  {
    Icon: React.ComponentType<{ className?: string }>;
    colorClass: string;
    borderClass?: string;
    buttonBgClass: string;
  }
> = {
  "web-app-development": {
    Icon: WebAppIcon,
    colorClass: "text-[#0284C7]",
    borderClass: "hover:border-[#0284C7] hover:bg-[#F0F9FF]",
    buttonBgClass:
      "bg-[#0284C7] hover:bg-[#0369A1] shadow-md shadow-[#0284C7]/40",
  },
  "mobile-app-development": {
    Icon: MobileAppIcon,
    colorClass: "text-[#059669]",
    borderClass: "hover:border-[#059669] hover:bg-[#ECFDF5]",
    buttonBgClass:
      "bg-[#059669] hover:bg-[#047857] shadow-md shadow-[#059669]/40",
  },
  "api-development": {
    Icon: ApiIcon,
    colorClass: "text-[#EA580C]",
    borderClass: "hover:border-[#EA580C] hover:bg-[#FFF7ED]",
    buttonBgClass:
      "bg-[#EA580C] hover:bg-[#C2410C] shadow-md shadow-[#EA580C]/40",
  },
  "ble-app-development": {
    Icon: BleIcon,
    colorClass: "text-[#7C3AED]",
    borderClass: "hover:border-[#7C3AED] hover:bg-[#F5F3FF]",
    buttonBgClass:
      "bg-[#7C3AED] hover:bg-[#6D28D9] shadow-md shadow-[#7C3AED]/40",
  },
  "ai-integrated-development": {
    Icon: AiIcon,
    colorClass: "text-[#EC4899]",
    borderClass: "hover:border-[#EC4899] hover:bg-[#FDF2F8]",
    buttonBgClass:
      "bg-[#EC4899] hover:bg-[#DB2777] shadow-md shadow-[#EC4899]/40",
  },
  "software-product-engineering": {
    Icon: SoftwareProductIcon,
    colorClass: "text-[#3B82F6]",
    borderClass: "hover:border-[#3B82F6] hover:bg-[#EFF6FF]",
    buttonBgClass:
      "bg-[#3B82F6] hover:bg-[#2563EB] shadow-md shadow-[#3B82F6]/40",
  },
  "it-staff-augmentation": {
    Icon: ItStaffIcon,
    colorClass: "text-[#10B981]",
    borderClass: "hover:border-[#10B981] hover:bg-[#ECFDF5]",
    buttonBgClass:
      "bg-[#10B981] hover:bg-[#059669] shadow-md shadow-[#10B981]/40",
  },
  "cloud-infrastructure": {
    Icon: CloudIcon,
    colorClass: "text-[#4F46E5]",
    borderClass: "hover:border-[#4F46E5] hover:bg-[#EEF2FF]",
    buttonBgClass:
      "bg-[#4F46E5] hover:bg-[#4338CA] shadow-md shadow-[#4F46E5]/40",
  },
};

export default function ServicesGrid({
  hideHeader = false,
}: {
  hideHeader?: boolean;
}) {
  return (
    <section
      className={`pb-10 bg-slate-50 relative overflow-hidden ${hideHeader ? "pt-4" : "pt-24"}`}
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="mb-14">
            <header className="max-w-4xl">
              <div className="flex items-center gap-3 text-xs font-bold text-[#0284C7] uppercase tracking-widest mb-3">
                COMPREHENSIVE CAPABILITIES
                <span className="h-[2px] w-10 bg-[#0284C7]"></span>
              </div>
              <h2 id="services-heading" className="text-4xl md:text-[42px] font-extrabold text-[#111827] tracking-tight leading-[1.2] mb-4">
                Full-Spectrum <span className="bg-gradient-to-r from-[#0284C7] to-[#9333EA] bg-clip-text text-transparent">Engineering</span> <span className="text-[#0284C7]">Services</span>
              </h2>
              <p className="text-[15px] text-slate-500 leading-relaxed max-w-3xl">
                From UX architecture and custom web/mobile apps to AI automation, IoT BLE integration, and multi-cloud operations — tailored for enterprise scale.
              </p>
            </header>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, idx) => {
            const config =
              SERVICE_CONFIG[service.id] ||
              SERVICE_CONFIG["web-app-development"];
            const { Icon, colorClass, buttonBgClass, borderClass } = config;

            return (
              <article
                key={service.id}
                id={service.id}
                className={`group relative flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm transition-all duration-300 p-4 ${borderClass}`}
              >
                <div className="flex-1">
                  {/* Icon Area */}
                  <div className="h-24 w-full mb-3 flex items-center justify-center">
                    <Icon className="h-full w-full object-contain" />
                  </div>

                  {/* Number & Capability */}
                  <div className="flex items-center gap-1.5 mb-1.5 font-bold">
                    <span className={`font-mono text-xs ${colorClass}`}>
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-semibold text-[#1C6C8E]">
                      &bull; Capability
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-4 line-clamp-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-5" role="list">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-[13px] text-slate-600 font-medium"
                      >
                        <span
                          className={`mt-[2px] flex-shrink-0 flex items-center justify-center w-4 h-4 rounded-full text-white ${buttonBgClass.split(" ")[0]}`}
                        >
                          {/* Solid colored checkmark circle matching the design */}
                          <svg
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-2.5 h-2.5"
                          >
                            <path
                              d="M11.6667 3.5L5.25004 9.91667L2.33337 7"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 mt-auto flex items-center justify-between border-t border-slate-100">
                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center px-3 py-1.5 text-[11px] font-bold text-white rounded-md transition-colors ${buttonBgClass}`}
                  >
                    Request Consultation &rarr;
                  </Link>

                  <Link
                    href={`/services#${service.id}`}
                    className="text-[12px] font-semibold text-[#1C6C8E] bg-[#F0F8FA] hover:bg-[#E1F1F6] px-3 py-1.5 rounded-md transition-colors"
                  >
                    Deep Dive
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
