"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { semanticSearch, getSuggestedQueries, type SearchResult } from "@/lib/search-knowledge";

export default function SemanticSearchBar() {
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
    <section className="py-14 sm:py-16 lg:py-20 bg-white/60 relative overflow-hidden w-full" aria-labelledby="search-heading">
      <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <header className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-sky-600 flex items-center justify-center gap-2">
            <span>AI ASSISTANT SEARCH</span>
            <span className="h-0.5 w-6 bg-sky-500 rounded-full inline-block" />
          </p>
          <h2 id="search-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0b192c] mt-2">
            Ask Us Anything
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            Type a question about our services, cloud migration, AI integration, or IT staffing.
            Our semantic search engine serves direct, contextual answers instantly.
          </p>
        </header>

        <div ref={containerRef} className="relative mt-10">
          <label htmlFor="semantic-search" className="sr-only">
            Search Koraltech Softwares knowledge base
          </label>
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
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
              id="semantic-search"
              type="search"
              role="combobox"
              aria-expanded={isOpen && results.length > 0}
              aria-controls="search-results"
              aria-autocomplete="list"
              aria-activedescendant={
                activeIndex >= 0 ? `search-result-${activeIndex}` : undefined
              }
              placeholder='Try: "How can I migrate my legacy database to AWS?"'
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              onKeyDown={handleKeyDown}
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-base text-[#0b192c] placeholder:text-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <AnimatePresence>
            {isOpen && (results.length > 0 || query.length < 2) && (
              <motion.div
                id="search-results"
                role="listbox"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="absolute inset-x-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl"
              >
                {query.length < 2 ? (
                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Suggested Questions
                    </p>
                    <ul className="mt-2 space-y-1" role="list">
                      {suggestions.map((suggestion) => (
                        <li key={suggestion}>
                          <button
                            type="button"
                            onClick={() => {
                              setQuery(suggestion);
                              setIsOpen(true);
                            }}
                            className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {suggestion}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <ul role="list">
                    {results.map((result, index) => (
                      <li
                        key={result.title}
                        id={`search-result-${index}`}
                        role="option"
                        aria-selected={index === activeIndex}
                      >
                        <Link
                          href={result.href}
                          onClick={() => setIsOpen(false)}
                          className={`block border-b border-slate-100 px-4 py-4 transition-colors last:border-0 ${
                            index === activeIndex
                              ? "bg-blue-50/70"
                              : "hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-[#0b192c]">
                              {result.title}
                            </span>
                            <span className="rounded-full bg-blue-50 border border-blue-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-600">
                              {result.category}
                            </span>
                          </div>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600 line-clamp-2">
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
      </div>
    </section>
  );
}
