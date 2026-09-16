"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { COMPANY } from "@/lib/company-content";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-24 pb-16 sm:pt-28 w-full">
      <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10">
        {/* Left-Aligned Header */}
        <header className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/95 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span>LET&apos;S BUILD TOGETHER</span>
          </div>

          <h1
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0b192c] mt-4 leading-[1.15]"
          >
            Connect With{" "}
            <span className="text-[#0076e4]">KoralTech Softwares</span>
          </h1>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            Have a project in mind or looking to augment your development
            engineering? Talk with our solution architects today.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-12 items-start w-full">
          {/* Left Column: Contact Cards & Illustration */}
          <aside className="lg:col-span-5 space-y-6">
            {/* Visual Header Box */}
            <div className="rounded-3xl border border-blue-200/90 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 p-6 sm:p-7 flex items-center gap-6 overflow-hidden relative shadow-lg">
              <div className="relative z-10 flex-1">
                <span className="inline-block rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold font-mono px-2.5 py-0.5 border border-blue-200 mb-2">
                  DIRECT LINE
                </span>
                <h2 className="text-xl font-bold text-[#0b192c]">
                  Direct Communication
                </h2>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Speak directly with engineering leadership and solution
                  designers.
                </p>
              </div>
              <div className="w-24 shrink-0">
                <Image
                  src="/assets/svg/Contactillus.svg"
                  alt="Contact Koraltech"
                  width={100}
                  height={100}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            {/* Direct Contact Details */}
            <article className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 text-xl shadow-sm">
                  ✉️
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-mono uppercase block font-bold">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-sm sm:text-base font-bold text-[#0b192c] hover:text-blue-600 transition-colors mt-0.5 block"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 text-xl shadow-sm">
                  📞
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-mono uppercase block font-bold">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                    className="text-sm sm:text-base font-bold text-[#0b192c] hover:text-blue-600 transition-colors mt-0.5 block"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 text-xl shadow-sm">
                  📍
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-mono uppercase block font-bold">
                    Engineering HQ
                  </span>
                  <p className="text-sm sm:text-base font-bold text-[#0b192c] mt-0.5">
                    {COMPANY.location}
                  </p>
                </div>
              </div>
            </article>

            {/* Response SLA Card */}
            <article className="rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50/90 to-sky-50/80 p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <h3 className="text-sm font-bold text-blue-950">
                  1 Business Day Response SLA
                </h3>
              </div>
              <p className="mt-2 text-xs text-blue-900 leading-relaxed font-medium">
                All client project submissions are reviewed by a senior
                technical project manager within 24 hours.
              </p>
            </article>
          </aside>

          {/* Right Column: Interactive Form */}
          <section className="lg:col-span-7 w-full">
            <article className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl relative overflow-hidden">
              {/* Glowing Top Edge Highlight */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-sky-400 to-teal-400" />

              <h2
                id="contact-form-heading"
                className="text-2xl sm:text-3xl font-bold text-[#0b192c]"
              >
                Send a Message &amp; Schedule Discovery
              </h2>
              <p className="mt-1 text-xs text-slate-500 font-mono">
                Fields marked with * are required.
              </p>

              {submitted ? (
                <div
                  className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/60 p-8 text-center animate-fade-in"
                  role="status"
                >
                  <span className="text-4xl block mb-2">🎉</span>
                  <p className="text-xl font-bold text-blue-600">
                    Thank you for reaching out!
                  </p>
                  <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                    Your message has been dispatched. A Koraltech Softwares
                    representative will contact you at{" "}
                    <strong className="text-slate-900">
                      {formData.email || "your email"}
                    </strong>{" "}
                    within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 btn-secondary text-xs py-2 px-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 font-mono"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 font-mono"
                      >
                        Business Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 font-mono"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 font-mono"
                      >
                        Primary Service Area *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-800 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      >
                        <option value="">Select an Offering</option>
                        <option value="web">Web App Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="ai">AI Integrated Development</option>
                        <option value="cloud">
                          Cloud Infrastructure &amp; DevOps
                        </option>
                        <option value="api">
                          API Development &amp; Integrations
                        </option>
                        <option value="ble">
                          BLE IoT Application Development
                        </option>
                        <option value="product">
                          Software Product Engineering
                        </option>
                        <option value="staffing">IT Staff Augmentation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 font-mono"
                    >
                      Project Goals, Scope &amp; Timeline *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share a brief overview of your business objectives, expected timeline, and technical requirements..."
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>Submit Project Inquiry</span>
                    <span className="font-black">→</span>
                  </button>
                </form>
              )}
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}
