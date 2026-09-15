import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-32 text-center">
      <div className="glass-panel p-8 sm:p-12 max-w-lg border-white/10 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -left-20 h-40 w-40 rounded-full bg-koral-blue/20 blur-2xl" />
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-glow">
          404 &middot; Page Not Found
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Lost in Navigation
        </h1>
        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          The requested page could not be located on Koraltech Softwares. Please return to the homepage or explore our offerings.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn-primary w-full sm:w-auto text-sm px-6 py-3">
            Back to Homepage
          </Link>
          <Link href="/services" className="btn-secondary w-full sm:w-auto text-sm px-6 py-3">
            Explore Offerings
          </Link>
        </div>
      </div>
    </div>
  );
}
