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
    <section className="py-20 lg:py-24 relative overflow-hidden" aria-labelledby="faq-heading">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600 flex items-center justify-center gap-2">
            <span>EVERYTHING YOU NEED TO KNOW</span>
            <span className="h-0.5 w-6 bg-sky-500 rounded-full inline-block" />
          </p>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b192c] mt-2">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            Clear answers about our engineering capabilities, AI integration methodology, and global delivery standards.
          </p>
        </header>

        <dl className="mt-12 space-y-4">
          {FAQ.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
                  isOpen
                    ? "border-blue-300 shadow-md shadow-blue-500/5 ring-1 ring-blue-400/20"
                    : "border-slate-100 hover:border-slate-200 shadow-sm"
                }`}
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0b192c] flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 border border-blue-100 text-xs font-mono font-bold text-blue-600">
                        0{index + 1}
                      </span>
                      <span>{item.question}</span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors ${
                        isOpen
                          ? "border-blue-200 bg-blue-50 text-blue-600"
                          : "border-slate-200 bg-slate-50 text-slate-500"
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
                      <div className="border-t border-slate-100 px-5 pb-6 pt-3 sm:px-6 sm:pb-6 text-sm sm:text-base leading-relaxed text-slate-600">
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
