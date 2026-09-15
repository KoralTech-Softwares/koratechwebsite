"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ } from "@/lib/company-content";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleFAQ(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="py-24 relative overflow-hidden" aria-labelledby="faq-heading">
      {/* Background neon ambient highlight */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-koral-blue/10 blur-3xl opacity-60"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-accent animate-pulse" />
            Everything You Need To Know
          </div>
          <h2 id="faq-heading" className="section-heading mt-3">
            Frequently Asked Questions
          </h2>
          <p className="section-subheading mx-auto">
            Clear answers about our engineering capabilities, AI integration methodology, and global delivery standards.
          </p>
        </header>

        <dl className="mt-12 space-y-4">
          {FAQ.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-koral-blue/40 bg-gradient-to-b from-obsidian-800/90 to-obsidian-900/90 shadow-xl shadow-koral-blue/10"
                    : "border-white/10 bg-obsidian-800/50 hover:border-white/20 hover:bg-obsidian-800/70"
                }`}
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  >
                    <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-koral-blue/15 border border-koral-blue/30 text-xs font-mono font-bold text-koral-blue-light">
                        0{index + 1}
                      </span>
                      <span>{item.question}</span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm transition-colors ${
                        isOpen
                          ? "border-koral-blue bg-koral-blue/20 text-teal-glow"
                          : "border-white/10 bg-white/5 text-slate-400"
                      }`}
                    >
                      ▼
                    </motion.span>
                  </button>
                </dt>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 px-5 pb-6 pt-3 sm:px-6 sm:pb-6 text-sm sm:text-base leading-relaxed text-slate-300">
                        {item.answer}
                      </div>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

