"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  generateEstimate,
  getEstimatorLabels,
  type BusinessSize,
  type TechChallenge,
  type PrimaryGoal,
  type EstimatorResult,
} from "@/lib/estimator-engine";

const { businessSizes, techChallenges, primaryGoals } = getEstimatorLabels();

type Step = 1 | 2 | 3 | "result";

export default function SolutionEstimator() {
  const [step, setStep] = useState<Step>(1);
  const [businessSize, setBusinessSize] = useState<BusinessSize | null>(null);
  const [techChallenge, setTechChallenge] = useState<TechChallenge | null>(null);
  const [primaryGoal, setPrimaryGoal] = useState<PrimaryGoal | null>(null);
  const [result, setResult] = useState<EstimatorResult | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  function handleGenerate() {
    if (!businessSize || !techChallenge || !primaryGoal) return;

    setIsGenerating(true);
    setStep("result");

    // Simulate AI processing delay for UX
    setTimeout(() => {
      setResult(generateEstimate({ businessSize, techChallenge, primaryGoal }));
      setIsGenerating(false);
    }, 1000);
  }

  function handleReset() {
    setStep(1);
    setBusinessSize(null);
    setTechChallenge(null);
    setPrimaryGoal(null);
    setResult(null);
    setIsGenerating(false);
  }

  return (
    <section
      id="estimator"
      className="py-12 sm:py-14 lg:py-16 relative overflow-hidden w-full"
      aria-labelledby="estimator-heading"
    >
      <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start w-full">
          {/* Left Column: Heading, Subtitle & Value Props */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/95 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>AI SOLUTION ESTIMATOR</span>
            </div>

            <h2
              id="estimator-heading"
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0b192c] leading-[1.15]"
            >
              Get Your Custom <br />
              <span className="text-[#0076e4]">Project Roadmap</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              Answer three quick questions and our AI simulation engine will generate a suggested project roadmap and cloud infrastructure recommendation tailored to your needs.
            </p>

            {/* 3 Quick Value Prop Cards */}
            <div className="mt-8 space-y-3.5">
              <div className="flex items-start gap-3.5 rounded-2xl bg-white/90 border border-blue-100 p-4 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 text-xl border border-blue-200">
                  ⚡
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#0b192c]">Instant AI Sizing</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Immediate sprint timelines, team compositions, and technology stack recommendations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl bg-white/90 border border-blue-100 p-4 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 text-xl border border-emerald-200">
                  🔒
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#0b192c]">Zero Obligation</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Review and tailor your architectural scope with no upfront commitments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl bg-white/90 border border-blue-100 p-4 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 text-xl border border-purple-200">
                  ☁️
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#0b192c]">Full-Stack &amp; DevOps Blueprint</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Production-ready Azure/AWS recommendations tailored to your scale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Estimator Form & Result Panel */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-3xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 lg:p-9 shadow-xl relative overflow-hidden">
              {/* Glowing Top Edge Highlight */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-sky-400 to-teal-400" />

              {/* Progress indicator */}
              {step !== "result" && (
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2 font-mono">
                    <span>
                      Step {step} of 3
                    </span>
                    <span className="text-blue-600">
                      {step === 1 ? "Business Scale" : step === 2 ? "Tech Challenge" : "Primary Goal"}
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2"
                    role="progressbar"
                    aria-valuenow={typeof step === "number" ? step : 3}
                    aria-valuemin={1}
                    aria-valuemax={3}
                    aria-label="Estimator progress"
                  >
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`h-2 flex-1 rounded-full transition-colors duration-300 ${
                          typeof step === "number" && step >= s
                            ? "bg-gradient-to-r from-blue-600 to-sky-500 shadow-sm"
                            : "bg-slate-100"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <fieldset>
                      <legend className="text-lg sm:text-xl font-bold text-[#0b192c] mb-1">
                        What is your business size?
                      </legend>
                      <p className="text-xs text-slate-500 mb-4">
                        Select the tier that best matches your organization.
                      </p>

                      <div className="grid gap-3">
                        {businessSizes.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setBusinessSize(option.value);
                              setStep(2);
                            }}
                            className={`rounded-2xl border p-4 text-left text-sm font-bold transition-all duration-200 ${
                              businessSize === option.value
                                ? "border-blue-500 bg-blue-50/80 text-blue-700 shadow-md ring-1 ring-blue-400/40"
                                : "border-slate-200/90 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/40 shadow-sm"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{option.label}</span>
                              <span className="text-blue-600 font-bold">→</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <fieldset>
                      <legend className="text-lg sm:text-xl font-bold text-[#0b192c] mb-1">
                        What is your primary tech challenge?
                      </legend>
                      <p className="text-xs text-slate-500 mb-4">
                        Choose the core problem your team wants to solve.
                      </p>

                      <div className="grid gap-3">
                        {techChallenges.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setTechChallenge(option.value);
                              setStep(3);
                            }}
                            className={`rounded-2xl border p-4 text-left text-sm font-bold transition-all duration-200 ${
                              techChallenge === option.value
                                ? "border-blue-500 bg-blue-50/80 text-blue-700 shadow-md ring-1 ring-blue-400/40"
                                : "border-slate-200/90 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/40 shadow-sm"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{option.label}</span>
                              <span className="text-blue-600 font-bold">→</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600"
                    >
                      <span>←</span>
                      <span>Back to Step 1</span>
                    </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <fieldset>
                      <legend className="text-lg sm:text-xl font-bold text-[#0b192c] mb-1">
                        What is your primary goal?
                      </legend>
                      <p className="text-xs text-slate-500 mb-4">
                        Select the primary business outcome you expect.
                      </p>

                      <div className="grid gap-3">
                        {primaryGoals.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => setPrimaryGoal(option.value)}
                            className={`rounded-2xl border p-4 text-left text-sm font-bold transition-all duration-200 ${
                              primaryGoal === option.value
                                ? "border-blue-500 bg-blue-50/80 text-blue-700 shadow-md ring-1 ring-blue-400/40"
                                : "border-slate-200/90 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/40 shadow-sm"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{option.label}</span>
                              {primaryGoal === option.value && (
                                <span className="text-blue-600 font-black">✓</span>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600"
                      >
                        <span>←</span>
                        <span>Back to Step 2</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleGenerate}
                        disabled={!primaryGoal}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span>Generate Roadmap</span>
                        <span>→</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === "result" && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isGenerating ? (
                      <div className="flex flex-col items-center py-10" aria-live="polite">
                        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
                        <p className="mt-4 text-xs sm:text-sm text-slate-600 font-bold">
                          Synthesizing architecture &amp; engineering roadmap...
                        </p>
                      </div>
                    ) : result ? (
                      <article aria-label="Generated project roadmap" className="space-y-6">
                        <header className="border-b border-slate-100 pb-4">
                          <span className="rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold px-2.5 py-0.5 border border-emerald-200">
                            Custom Solution Blueprint
                          </span>
                          <h3 className="text-xl font-black text-[#0b192c] mt-2">
                            {result.projectType}
                          </h3>

                          <dl className="mt-4 grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-2xl bg-blue-50/80 border border-blue-100">
                              <dt className="text-[10px] uppercase tracking-wider text-slate-500 font-bold font-mono">
                                Estimated Timeline
                              </dt>
                              <dd className="mt-0.5 text-base font-black text-blue-700 font-mono">
                                {result.estimatedTimeline}
                              </dd>
                            </div>
                            <div className="p-3 rounded-2xl bg-sky-50/80 border border-sky-100">
                              <dt className="text-[10px] uppercase tracking-wider text-slate-500 font-bold font-mono">
                                Estimated Investment
                              </dt>
                              <dd className="mt-0.5 text-base font-black text-sky-700 font-mono">
                                {result.estimatedInvestment}
                              </dd>
                            </div>
                          </dl>
                        </header>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono">
                            Cloud Infrastructure Recommendation
                          </h4>
                          <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                            {result.cloudRecommendation}
                          </p>
                          <ul className="mt-2.5 flex flex-wrap gap-1.5" role="list">
                            {result.cloudServices.map((service) => (
                              <li
                                key={service}
                                className="rounded-lg bg-blue-50 border border-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-700 font-mono"
                              >
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono">
                            Project Roadmap Phases
                          </h4>
                          <ol className="mt-3 space-y-3" role="list">
                            {result.roadmap.map((phase, index) => (
                              <li
                                key={phase.phase}
                                className="relative border-l-2 border-blue-300 pl-4 text-xs"
                              >
                                <span className="absolute -left-[7px] top-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white">
                                  {index + 1}
                                </span>
                                <h5 className="font-bold text-[#0b192c]">{phase.phase}</h5>
                                <p className="text-[11px] text-blue-600 font-bold">{phase.duration}</p>
                              </li>
                            ))}
                          </ol>
                        </div>

                        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                          <button
                            type="button"
                            onClick={handleReset}
                            className="text-xs font-bold text-slate-500 hover:text-blue-600"
                          >
                            ← Start Over
                          </button>
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-700 transition-colors"
                          >
                            <span>Schedule Consultation</span>
                            <span>→</span>
                          </Link>
                        </footer>
                      </article>
                    ) : null}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
