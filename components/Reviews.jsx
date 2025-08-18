import React from "react";
import { REVIEWS } from "./constants";

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Reviews</h2>
        <p className="mt-2 text-slate-600">For compliance, this section shows sample reviews. Replace with verified customer reviews when available.as reviews son de ejemplo (*Sample*). Sustituiremos por reviews verificadas del cliente cuando estén disponibles.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rounded-2xl bg-white border border-slate-200 p-6">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-slate-900">{r.name}</p>
                <p className="text-amber-500" aria-label={`${r.rating} stars`}>{"★".repeat(r.rating)}</p>
              </div>
              <p className="text-xs text-slate-500">{r.city}</p>
              <p className="mt-3 text-slate-700">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
