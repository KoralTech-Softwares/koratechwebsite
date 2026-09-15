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
    <div className="pt-28 pb-20 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-koral-blue/30 bg-koral-blue/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-koral-blue-light">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-accent animate-pulse" />
            Let&apos;s Build Together
          </div>
          <h1 id="contact-heading" className="section-heading mt-3">
            Connect With Koraltech Softwares
          </h1>
          <p className="section-subheading">
            Have a project in mind or looking to augment your development engineering? Talk with our solution architects today.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left Column: Contact Cards & Illustration */}
          <aside className="lg:col-span-5 space-y-6">
            {/* Visual Header Box */}
            <div className="glass-panel p-6 sm:p-8 flex items-center gap-6 overflow-hidden relative border-white/10">
              <div className="relative z-10 flex-1">
                <h2 className="text-xl font-bold text-white">Direct Communication</h2>
                <p className="mt-1 text-xs text-slate-300">
                  Speak directly with engineering leadership and solution designers.
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
            <article className="glass-panel-hover p-6 sm:p-8 border-white/10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-koral-blue/15 border border-koral-blue/30 text-koral-blue-light">
                  ✉️
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono uppercase block">Email Address</span>
                  <a href={`mailto:${COMPANY.email}`} className="text-sm font-semibold text-white hover:text-indigo-glow transition-colors">
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-accent/15 border border-teal-accent/30 text-teal-glow">
                  📞
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono uppercase block">Phone / WhatsApp</span>
                  <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="text-sm font-semibold text-white hover:text-teal-glow transition-colors">
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-electric/15 border border-indigo-electric/30 text-indigo-glow">
                  📍
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono uppercase block">Engineering HQ</span>
                  <p className="text-sm font-semibold text-white">{COMPANY.location}</p>
                </div>
              </div>
            </article>

            {/* Response SLA Card */}
            <article className="rounded-2xl border border-teal-accent/20 bg-teal-accent/5 p-6 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-accent animate-pulse" />
                <h3 className="text-sm font-bold text-white">1 Business Day Response SLA</h3>
              </div>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                All client project submissions are reviewed by a senior technical project manager within 24 hours.
              </p>
            </article>
          </aside>

          {/* Right Column: Interactive Form */}
          <section className="lg:col-span-7">
            <article className="glass-panel p-6 sm:p-10 border-white/10 rounded-2xl shadow-2xl">
              <h2 id="contact-form-heading" className="text-2xl font-bold text-white">
                Send a Message &amp; Schedule Discovery
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Fields marked with * are required.
              </p>

              {submitted ? (
                <div
                  className="mt-8 rounded-2xl border border-teal-accent/40 bg-teal-accent/10 p-8 text-center animate-fade-in"
                  role="status"
                >
                  <span className="text-4xl block mb-2">🎉</span>
                  <p className="text-xl font-bold text-teal-glow">Thank you for reaching out!</p>
                  <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                    Your message has been dispatched. A Koraltech Softwares representative will contact you at <strong className="text-white">{formData.email || "your email"}</strong> within one business day.
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
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-obsidian-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-koral-blue focus:outline-none focus:ring-2 focus:ring-koral-blue/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Business Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-obsidian-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-koral-blue focus:outline-none focus:ring-2 focus:ring-koral-blue/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 234 567 8900"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-obsidian-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-koral-blue focus:outline-none focus:ring-2 focus:ring-koral-blue/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                        Primary Service Area *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-obsidian-950/80 px-4 py-3 text-sm text-white focus:border-koral-blue focus:outline-none focus:ring-2 focus:ring-koral-blue/20"
                      >
                        <option value="">Select an Offering</option>
                        <option value="web">Web App Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="ai">AI Integrated Development</option>
                        <option value="cloud">Cloud Infrastructure &amp; DevOps</option>
                        <option value="api">API Development &amp; Integrations</option>
                        <option value="ble">BLE IoT Application Development</option>
                        <option value="product">Software Product Engineering</option>
                        <option value="staffing">IT Staff Augmentation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                      Project Goals, Scope &amp; Timeline *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a brief overview of your business objectives, expected timeline, and technical requirements..."
                      className="w-full rounded-xl border border-white/10 bg-obsidian-950/80 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-koral-blue focus:outline-none focus:ring-2 focus:ring-koral-blue/20"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full py-4 text-base shadow-xl shadow-koral-blue/25">
                    <span>Submit Project Inquiry</span>
                    <span>→</span>
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

