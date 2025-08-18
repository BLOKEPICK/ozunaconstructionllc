"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import { COMPANY, SERVICES } from "./constants";

export default function Contact() {
  const email = COMPANY.email || 'ozunaconstructionllc@gmail.com';
function handleEmailClick() {
    // Do not preventDefault: allow native mailto first
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) return; // mobile handles mailto fine
    const t = setTimeout(() => {
      if (document.hasFocus()) {
        const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
        window.open(gmail, '_blank', 'noopener,noreferrer');
      }
    }, 800);
    window.addEventListener('blur', () => clearTimeout(t), { once: true });
  }

  const mailtoHref = `mailto:${COMPANY.email || 'ozunaconstructionllc@gmail.com'}`;
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") || "";
    const phone = data.get("phone") || "";
    const email = data.get("email") || "";
    const service = data.get("service") || "Other question";
    const message = data.get("message") || "";
    const subject = `${service} — Free Quote from ${name}`.slice(0, 140);
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      message
    ].join("\n");
    const mailto = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <section id="contact" className="relative py-16 md:py-20 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <header className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Get a Free Quote</h2>
          <p className="mt-2 text-emerald-50">Tell us about your project and we’ll get back to you shortly.</p>
        </header>

        <div className="mt-8 rounded-2xl bg-white p-6 md:p-8 shadow-xl ring-1 ring-black/5">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" required aria-required="true" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="(614) 555‑1234"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com"
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="text-sm font-medium text-slate-700">Service</label>
                <div className="relative z-20">
                <select id="service" name="service"
                  className="bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 h-11 mt-1 px-3 py-2 rounded-xl text-base text-slate-900 w-full">
                  {[...SERVICES.map(s => s.title), "Other question"].map((label) => (
                    <option key={label} value={label}>{label}</option>
                  ))}
                </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Project details, timeline, address…"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <button type="submit"
                className="w-full rounded-xl bg-slate-900 text-white font-semibold py-3 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">
                Send
              </button>
              <p className="mt-2 text-xs text-slate-500">
                By sending, your email app will open with the details pre‑filled.
              </p>
            </form>

            {/* Contact options (centered) */}
            <div className="flex flex-col items-center justify-center text-center gap-4">
              <p className="text-slate-600">Prefer to talk directly?</p>
              <div className="flex items-center justify-center flex-wrap gap-3">
                <a href={COMPANY.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2 hover:bg-slate-800" aria-label="Call for a free estimate">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call
                </a>
                <a href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-400 text-slate-800 px-4 py-2 hover:bg-slate-50" aria-label="Chat on WhatsApp">
                  <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
                  WhatsApp
                </a>
                <a href={mailtoHref} onClick={handleEmailClick} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 text-slate-800 px-4 py-2 hover:bg-slate-50" aria-label="Email us"><Mail className="w-5 h-5" aria-hidden="true" />Email</a>
              </div>
              <div className="text-xs text-slate-500">
                Business hours: Mon–Sat 8:00 AM – 6:00 PM · Sun: Emergencies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
