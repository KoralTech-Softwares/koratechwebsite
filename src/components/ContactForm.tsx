"use client";

import { useState, FormEvent } from "react";
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
    <>
      <section className="pt-32 pb-12" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-glow">
              Contact Us
            </p>
            <h1 id="contact-heading" className="section-heading mt-3">
              Connect With Koraltech Softwares
            </h1>
            <p className="section-subheading">
              Connect with us now to elevate your business with tailored solutions and dedicated
              support. We respond within one business day.
            </p>
          </header>
        </div>
      </section>

      <section className="pb-20" aria-labelledby="contact-form-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <aside className="space-y-8">
              <article className="glass-panel p-8">
                <h2 className="text-lg font-bold text-white">Get in Touch</h2>
                <address className="mt-4 space-y-4 not-italic text-sm text-slate-400">
                  <p>
                    <strong className="text-slate-300">Email:</strong>{" "}
                    <a href={`mailto:${COMPANY.email}`} className="text-indigo-glow hover:underline">
                      {COMPANY.email}
                    </a>
                  </p>
                  <p>
                    <strong className="text-slate-300">Phone:</strong>{" "}
                    <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-white">
                      {COMPANY.phone}
                    </a>
                  </p>
                  <p>
                    <strong className="text-slate-300">Location:</strong>
                    <br />
                    {COMPANY.location}
                  </p>
                </address>
              </article>

              <article className="glass-panel p-8">
                <h2 className="text-lg font-bold text-white">What to Expect</h2>
                <ol className="mt-4 space-y-3 text-sm text-slate-400" role="list">
                  <li>1. Free discovery call to understand your requirements</li>
                  <li>2. Structured requirement analysis and proposal</li>
                  <li>3. Custom roadmap with timeline and investment range</li>
                  <li>4. AI-focused development process from day one</li>
                </ol>
              </article>
            </aside>

            <article className="glass-panel p-8">
              <h2 id="contact-form-heading" className="text-lg font-bold text-white">
                Send Us a Message
              </h2>

              {submitted ? (
                <div
                  className="mt-6 rounded-xl border border-teal-accent/30 bg-teal-accent/10 p-6 text-center"
                  role="status"
                >
                  <p className="text-lg font-semibold text-teal-glow">Thank you for reaching out!</p>
                  <p className="mt-2 text-sm text-slate-400">
                    A Koraltech Softwares representative will contact you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-white/10 bg-obsidian-900 px-4 py-3 text-sm text-white focus:border-indigo-electric/50 focus:outline-none focus:ring-2 focus:ring-indigo-electric/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-white/10 bg-obsidian-900 px-4 py-3 text-sm text-white focus:border-indigo-electric/50 focus:outline-none focus:ring-2 focus:ring-indigo-electric/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-white/10 bg-obsidian-900 px-4 py-3 text-sm text-white focus:border-indigo-electric/50 focus:outline-none focus:ring-2 focus:ring-indigo-electric/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-300">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-white/10 bg-obsidian-900 px-4 py-3 text-sm text-white focus:border-indigo-electric/50 focus:outline-none focus:ring-2 focus:ring-indigo-electric/20"
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web App Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="api">API Development</option>
                      <option value="ble">BLE App Development</option>
                      <option value="ai">AI Integrated Development</option>
                      <option value="product">Software Product Engineering</option>
                      <option value="staffing">IT Staff Augmentation</option>
                      <option value="cloud">Cloud Infrastructure Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, timeline, and goals..."
                      className="mt-1 w-full rounded-xl border border-white/10 bg-obsidian-900 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-indigo-electric/50 focus:outline-none focus:ring-2 focus:ring-indigo-electric/20"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full py-4">
                    Send Message
                  </button>
                </form>
              )}
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
