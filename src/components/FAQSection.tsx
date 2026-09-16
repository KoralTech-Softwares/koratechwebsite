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
    <section
      id="faqs"
      className="py-12 sm:py-14 lg:py-16 relative overflow-hidden w-full"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start w-full">
          {/* Left Column: Header & Quick Contact Prompt */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/95 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>EVERYTHING YOU NEED TO KNOW</span>
            </div>

            <h2
              id="faq-heading"
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0b192c] leading-[1.15]"
            >
              Frequently Asked <br />
              <span className="text-[#0076e4]">Questions</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              Clear answers about our engineering capabilities, AI integration
              methodology, intellectual property ownership, and global delivery
              standards.
            </p>

            <div className="mt-8 rounded-3xl border border-blue-200/80 bg-gradient-to-br from-blue-50/90 via-white to-sky-50/70 p-6 sm:p-7 shadow-lg">
              <div className="flex items-center gap-3.5 mb-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white text-xl shadow-md shadow-blue-500/30">
                  💬
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#0b192c]">
                    Have a Custom Question?
                  </h3>
                  <p className="text-xs text-slate-500">
                    We respond in under 24 hours
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                Our engineering leadership is ready to discuss your specific
                architecture, timeline, team augmentation, and budget.
              </p>
              <div className="mt-5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 shadow-md shadow-blue-500/20 transition-all hover:scale-105"
                >
                  <span>Talk to an Architect</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion Cards */}
          <div className="lg:col-span-7 w-full">
            <dl className="space-y-4">
              {FAQ.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.question}
                    className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-blue-400 bg-gradient-to-b from-blue-50/60 via-white to-white shadow-lg shadow-blue-500/10 ring-1 ring-blue-400/30"
                        : "border-slate-200/90 bg-white hover:border-blue-200 hover:shadow-md"
                    }`}
                  >
                    <dt>
                      <button
                        type="button"
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                      >
                        <span className="text-base sm:text-lg font-bold text-[#0b192c] flex items-center gap-3.5">
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-mono font-black transition-colors ${
                              isOpen
                                ? "bg-blue-600 text-white shadow-sm"
                                : "bg-blue-50 border border-blue-100 text-blue-700"
                            }`}
                          >
                            0{index + 1}
                          </span>
                          <span
                            className={
                              isOpen ? "text-blue-700" : "text-[#0b192c]"
                            }
                          >
                            {item.question}
                          </span>
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors ${
                            isOpen
                              ? "border-blue-300 bg-blue-100/80 text-blue-700"
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
                          transition={{
                            duration: 0.25,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-slate-100 px-6 pb-6 pt-3 sm:px-7 sm:pb-6 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
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
        </div>
      </div>
    </section>
  );
}
