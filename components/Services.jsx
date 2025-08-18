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
    <section id="services" aria-labelledby="services-heading" className="relative overflow-hidden py-20 md:py-24 bg-slate-50">
  {/* Background (safe, non-interactive) */}
  <div aria-hidden className="absolute inset-0 z-0 pointer-events-none
    bg-[linear-gradient(rgba(148,163,184,0.10)_1px,transparent_1px),
        linear-gradient(90deg,rgba(148,163,184,0.10)_1px,transparent_1px)]
    bg-[size:22px_22px]" />
  <div aria-hidden className="absolute inset-0 z-0 pointer-events-none
    bg-[radial-gradient(closest-side,rgba(16,185,129,0.08),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
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
