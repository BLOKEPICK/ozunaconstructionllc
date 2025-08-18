import React from "react";
import { COMPANY } from "./constants";

export default function FAQ() {
  const faqs = [
  {
    "q": "Do you offer free estimates?",
    "a": "Yes — we provide free, no‑obligation estimates in Columbus and nearby areas."
  },
  {
    "q": "Are you licensed and insured?",
    "a": "Yes. We are properly licensed and insured, and we offer a warranty on labor."
  },
  {
    "q": "What roofing materials do you install?",
    "a": "Primarily architectural asphalt shingles; metal and flat roofing systems are available upon request."
  },
  {
    "q": "Do you handle siding and framing?",
    "a": "Yes. We install vinyl and fiber‑cement siding and provide structural framing for additions and garages."
  },
  {
    "q": "What’s the typical project timeline?",
    "a": "Repairs: 1–2 days. Full roof replacements: 1–3 days (weather‑dependent). Remodeling timelines vary by scope."
  },
  {
    "q": "Do you offer remodeling services?",
    "a": "Yes — kitchens, bathrooms, basements, and general interior upgrades with clear schedules and daily cleanup."
  }
];
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group open:bg-slate-50 p-5">
              <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">{f.q}<span className="text-slate-400 group-open:rotate-45 transition">＋</span></summary>
              <p className="mt-3 text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
