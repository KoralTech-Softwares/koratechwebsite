"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { semanticSearch, getSuggestedQueries, type SearchResult } from "@/lib/search-knowledge";
import { COMPANY } from "@/lib/company-content";

export default function SearchAndConsultationRow() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const suggestions = getSuggestedQueries();

  const performSearch = useCallback((q: string) => {
    if (q.trim().length < 2) {
      setResults([]);
      return;
    }
    setResults(semanticSearch(q));
    setActiveIndex(-1);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => performSearch(query), 200);
    return () => clearTimeout(timer);
  }, [query, performSearch]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen || results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      window.location.href = results[activeIndex].href;
    } else if (e.key === "Escape") {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  }

  return (
    <section
      id="search-and-consultation"
      className="py-12 sm:py-14 lg:py-16 relative overflow-hidden w-full"
      aria-label="Search and Consultation Section"
    >
      <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8 items-stretch w-full">
          {/* Card 1: Ask Us Anything (AI Assistant Search) */}
          <div className="lg:col-span-6 relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white/95 border border-blue-200/90 p-6 sm:p-8 lg:p-10 shadow-xl">
            {/* Glowing Top Edge Highlight */}
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-sky-400 to-teal-400" />

            <div>
              {/* Header */}
              <div className="flex flex-col items-start text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-blue-50/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                  <span>AI KNOWLEDGE ASSISTANT</span>
                </div>

                <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0b192c] leading-tight">
                  Ask Us <span className="text-[#0076e4]">Anything</span>
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  Type a question about our services, cloud migration, AI workflows, or SLA.
                  Our semantic engine provides direct, contextual answers instantly.
                </p>
              </div>

              {/* Search Box */}
              <div ref={containerRef} className="relative mt-6">
                <label htmlFor="semantic-search-input" className="sr-only">
                  Search Koraltech Softwares knowledge base
                </label>
                <div className="relative">
                  <svg
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    ref={inputRef}
                    id="semantic-search-input"
                    type="search"
                    role="combobox"
                    aria-expanded={isOpen && results.length > 0}
                    aria-controls="semantic-results"
                    aria-autocomplete="list"
                    aria-activedescendant={
                      activeIndex >= 0 ? `search-item-${activeIndex}` : undefined
                    }
                    placeholder='Try: "How can I migrate to Azure cloud?"'
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    onKeyDown={handleKeyDown}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 py-3.5 pl-12 pr-4 text-sm text-[#0b192c] placeholder:text-slate-400 shadow-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                {/* Dropdown Results */}
                <AnimatePresence>
                  {isOpen && (results.length > 0 || query.length < 2) && (
                    <motion.div
                      id="semantic-results"
                      role="listbox"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="absolute inset-x-0 top-full z-50 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-blue-100 bg-white shadow-2xl p-2"
                    >
                      {query.length < 2 ? (
                        <div className="p-3">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                            Suggested Queries:
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {suggestions.slice(0, 4).map((suggestion) => (
                              <button
                                key={suggestion}
                                type="button"
                                onClick={() => {
                                  setQuery(suggestion);
                                  setIsOpen(true);
                                }}
                                className="rounded-lg bg-blue-50/80 px-2.5 py-1 text-left text-xs font-semibold text-blue-700 hover:bg-blue-100 transition-colors"
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <ul role="list">
                          {results.map((result, index) => (
                            <li
                              key={result.title}
                              id={`search-item-${index}`}
                              role="option"
                              aria-selected={index === activeIndex}
                            >
                              <Link
                                href={result.href}
                                onClick={() => setIsOpen(false)}
                                className={`block rounded-xl p-3 transition-colors ${
                                  index === activeIndex
                                    ? "bg-blue-50 text-blue-900"
                                    : "hover:bg-slate-50"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-[#0b192c]">
                                    {result.title}
                                  </span>
                                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold font-mono text-blue-700">
                                    {result.category}
                                  </span>
                                </div>
                                <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                                  {result.answer}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Quick Suggestion Pills Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-[11px] font-mono text-slate-400 uppercase font-bold block mb-2">
                Popular Knowledge Topics:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Cloud Migration", "AI OCR", "React Native", "DevOps SLA", "Staffing"].map(
                  (topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => {
                        setQuery(topic);
                        setIsOpen(true);
                      }}
                      className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-colors shadow-sm"
                    >
                      {topic}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Card 2: Ready to Start Your Journey? (Consultation Call to Action) */}
          <div
            id="contact"
            className="lg:col-span-6 relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-sky-600 to-indigo-700 p-6 sm:p-8 lg:p-10 text-white shadow-xl shadow-blue-500/20"
          >
            {/* Ambient Decorative Blur */}
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.22),transparent_70%)]"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                <span>🚀</span>
                <span>READY TO BUILD SOMETHING IMPACTFUL?</span>
              </div>

              <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                Ready to Start <br />
                <span className="text-sky-200">Your Digital Journey?</span>
              </h3>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-blue-100 max-w-xl">
                Improving your business or taking the first step digitally — Koraltech Softwares
                will give you the best and unique solution to expand your business and capture the world.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-blue-700 shadow-lg shadow-black/10 transition-all duration-300 hover:bg-slate-50 hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  <span>Schedule Consultation</span>
                  <span className="font-black">→</span>
                </Link>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95"
                >
                  <span>Email Directly</span>
                </a>
              </div>
            </div>

            {/* Trust Checklist Footer */}
            <div className="relative z-10 mt-8 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-blue-100">
              <div className="flex items-center gap-2">
                <span className="text-emerald-300 font-black">✓</span>
                <span>Free Architecture Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-300 font-black">✓</span>
                <span>24-Hour Response SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-300 font-black">✓</span>
                <span>Dedicated PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
