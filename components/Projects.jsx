import React from "react";
import { PROJECTS, COMPANY } from "./constants";

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Projects recientes</h2>
            <p className="mt-2 text-slate-600">Galería con fotos seleccionadas del Instagram del cliente. En producción usaré versiones .webp optimizadas y alt text SEO.</p>
          </div>
          <a className="text-emerald-700 font-semibold" href={COMPANY.instagram} target="_blank">Ver Instagram →</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJECTS.map((p, i) => (
            <a key={i} href={p.href || "#"} target="_blank" className="group block">
              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 grid place-items-center">
                {p.img ? (
                  <img src={p.img} alt={`${p.title} in ${p.city}`} className="h-full w-full object-cover group-hover:scale-105 transition"/>
                ) : (
                  <div className="text-center p-6 text-slate-500">
                    <p className="font-semibold">{p.title}</p>
                    <p className="text-sm">{p.service} – {p.city}</p>
                    <p className="mt-3 text-xs">(Imagen de ejemplo — sustituir por foto real)</p>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
