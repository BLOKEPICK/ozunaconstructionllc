import React from "react";
import { SERVICES } from "./constants";

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Services</h2>
        <p className="mt-2 text-slate-600">Framing · Roofing · Siding · Carpentry · Remodeling</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SERVICES.map((s) => (
            <div key={s.slug} className="rounded-2xl border border-slate-200 p-5 hover:shadow-sm">
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-emerald-700 font-semibold">Free estimate →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
