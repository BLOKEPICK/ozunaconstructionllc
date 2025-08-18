import React from "react";
import Link from "next/link";
import { Hammer, House, Layers, Ruler } from "lucide-react";
import { SERVICES } from "./constants";

// Map slugs to icons (fallback to Hammer)
const ICONS = {
  roofing: Layers,
  siding: Ruler,
  framing: Hammer,
  remodeling: House,
};

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative bg-slate-50 py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Background layers (decorative) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10
          bg-[linear-gradient(rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.10)_1px,transparent_1px)]
          bg-[size:22px_22px]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(closest-side,rgba(16,185,129,0.08),transparent)]
          [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)]" />
    
        <header className="max-w-2xl">
          <h2 id="services-heading" className="text-2xl md:text-3xl font-bold tracking-tight">Services</h2>
          <p className="mt-2 text-slate-600">
            Exterior and interior work performed by a licensed & insured local crew. Explore our core services below.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.slug] || Hammer;
            return (
              <article key={s.slug} className="group relative h-full rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(closest-side,rgba(16,185,129,0.08),transparent)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" aria-hidden />
                <div className="p-5">
                  <div className="inline-flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/20 w-11 h-11">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">
                    <Link href={`/services/${s.slug}`} className="hover:underline">{s.title}</Link>
                  </h3>
                  {s.excerpt ? (
                    <p className="mt-2 text-sm text-slate-600">{s.excerpt}</p>
                  ) : null}
                  <ul className="mt-3 space-y-1 text-sm text-slate-600">
                    {s.bullets?.slice(0,3).map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Link href={`/services/${s.slug}`} className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                      Learn more<span className="ml-1" aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
