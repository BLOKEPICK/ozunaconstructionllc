import React from "react";
import { AREAS, COMPANY } from "./constants";

export default function Areas() {
  return (
    <section id="areas" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Areas de servicio</h2>
        <p className="mt-2 text-slate-600">{COMPANY.city} y alrededores.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {AREAS.map((a) => (
            <div key={a} className="rounded-xl bg-white border border-slate-200 py-3 text-center font-medium text-slate-700">{a}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
