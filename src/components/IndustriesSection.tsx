import { INDUSTRIES } from "@/lib/company-content";

export default function IndustriesSection() {
  return (
    <section className="relative py-10 md:py-12 overflow-hidden bg-slate-50 border-t border-slate-200" aria-labelledby="industries-heading">
      {/* Decorative soft glowing backgrounds to remove the plain white feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-sky-100/40 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10">
        <header className="text-center mb-8">
          <h2 id="industries-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industries We Serve
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Koraltech Softwares has delivered solutions across healthcare, fintech, logistics,
            e-commerce, learning management, and more.
          </p>
        </header>

        {/* Badges perfectly aligned and centered with better spacing */}
        <ul className="flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-4xl mx-auto" role="list">
          {INDUSTRIES.map((industry) => (
            <li
              key={industry}
              className="rounded-full border border-slate-200/80 bg-white/90 backdrop-blur-sm px-6 py-2.5 text-[14px] md:text-[15px] font-semibold text-slate-600 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50/80 hover:text-blue-700 cursor-default"
            >
              {industry}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
