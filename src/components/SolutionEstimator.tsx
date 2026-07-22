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
    }, 1500);
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
    <section className="py-20" aria-labelledby="estimator-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-glow">
            AI Solution Estimator
          </p>
          <h2 id="estimator-heading" className="section-heading mt-3">
            Get Your Project Roadmap
          </h2>
          <p className="section-subheading mx-auto">
            Answer three quick questions and our AI simulation engine will generate a suggested
            project roadmap and cloud infrastructure recommendation tailored to your needs.
          </p>
        </header>

        <div className="mt-12 glass-panel p-8">
          {/* Progress indicator */}
          {step !== "result" && (
            <div className="mb-8 flex items-center justify-center gap-2" role="progressbar" aria-valuenow={typeof step === "number" ? step : 3} aria-valuemin={1} aria-valuemax={3} aria-label="Estimator progress">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-2 flex-1 rounded-full transition-colors ${
                    typeof step === "number" && step >= s
                      ? "bg-gradient-to-r from-indigo-electric to-teal-accent"
                      : "bg-white/10"
                  }`}
                />
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <fieldset>
                  <legend className="text-lg font-semibold text-white">
                    What is your business size?
                  </legend>
                  <div className="mt-4 grid gap-3">
                    {businessSizes.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setBusinessSize(option.value);
                          setStep(2);
                        }}
                        className={`rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                          businessSize === option.value
                            ? "border-indigo-electric bg-indigo-electric/10 text-white"
                            : "border-white/10 bg-white/5 text-slate-300 hover:border-indigo-electric/40"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <fieldset>
                  <legend className="text-lg font-semibold text-white">
                    What is your primary tech challenge?
                  </legend>
                  <div className="mt-4 grid gap-3">
                    {techChallenges.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setTechChallenge(option.value);
                          setStep(3);
                        }}
                        className={`rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                          techChallenge === option.value
                            ? "border-indigo-electric bg-indigo-electric/10 text-white"
                            : "border-white/10 bg-white/5 text-slate-300 hover:border-indigo-electric/40"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="mt-4 text-sm text-slate-400 hover:text-white"
                >
                  &larr; Back
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <fieldset>
                  <legend className="text-lg font-semibold text-white">
                    What is your primary goal?
                  </legend>
                  <div className="mt-4 grid gap-3">
                    {primaryGoals.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setPrimaryGoal(option.value)}
                        className={`rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                          primaryGoal === option.value
                            ? "border-indigo-electric bg-indigo-electric/10 text-white"
                            : "border-white/10 bg-white/5 text-slate-300 hover:border-indigo-electric/40"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <div className="mt-6 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-sm text-slate-400 hover:text-white"
                  >
                    &larr; Back
                  </button>
                  <button
                    type="button"
                    onClick={handleGenerate}
                    disabled={!primaryGoal}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Generate Roadmap
                  </button>
                </div>
              </motion.div>
            )}

            {step === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {isGenerating ? (
                  <div className="flex flex-col items-center py-12" aria-live="polite">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-electric/30 border-t-indigo-electric" />
                    <p className="mt-4 text-sm text-slate-400">
                      Analyzing your requirements and generating roadmap...
                    </p>
                  </div>
                ) : result ? (
                  <article aria-label="Generated project roadmap">
                    <header className="border-b border-white/10 pb-6">
                      <h3 className="text-xl font-bold text-white">{result.projectType}</h3>
                      <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div>
                          <dt className="text-xs uppercase tracking-wider text-slate-500">
                            Estimated Timeline
                          </dt>
                          <dd className="mt-1 text-lg font-semibold text-teal-glow">
                            {result.estimatedTimeline}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs uppercase tracking-wider text-slate-500">
                            Estimated Investment
                          </dt>
                          <dd className="mt-1 text-lg font-semibold text-indigo-glow">
                            {result.estimatedInvestment}
                          </dd>
                        </div>
                      </dl>
                    </header>

                    <section className="mt-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                        Cloud Infrastructure Recommendation
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {result.cloudRecommendation}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2" role="list">
                        {result.cloudServices.map((service) => (
                          <li
                            key={service}
                            className="rounded-md bg-orange-500/10 px-2.5 py-1 text-xs font-medium text-orange-300"
                          >
                            {service}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="mt-8">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                        Project Roadmap
                      </h4>
                      <ol className="mt-4 space-y-4" role="list">
                        {result.roadmap.map((phase, index) => (
                          <li
                            key={phase.phase}
                            className="relative border-l-2 border-indigo-electric/30 pl-6"
                          >
                            <span className="absolute -left-[9px] top-0 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-electric text-[10px] font-bold text-white">
                              {index + 1}
                            </span>
                            <h5 className="font-semibold text-white">{phase.phase}</h5>
                            <p className="text-xs text-teal-accent">{phase.duration}</p>
                            <ul className="mt-2 space-y-1" role="list">
                              {phase.deliverables.map((d) => (
                                <li key={d} className="text-sm text-slate-400">
                                  &bull; {d}
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ol>
                    </section>

                    <section className="mt-8">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                        AI Capabilities Included
                      </h4>
                      <ul className="mt-3 space-y-2" role="list">
                        {result.aiCapabilities.map((cap) => (
                          <li key={cap} className="text-sm text-slate-400">
                            &#10003; {cap}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <footer className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-white">Ready to get started?</p>
                        <p className="text-xs text-slate-500">
                          {result.nextSteps[0]}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={handleReset}
                          className="btn-secondary text-sm"
                        >
                          Start Over
                        </button>
                        <Link href="/contact" className="btn-primary text-sm">
                          Schedule Consultation
                        </Link>
                      </div>
                    </footer>
                  </article>
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
