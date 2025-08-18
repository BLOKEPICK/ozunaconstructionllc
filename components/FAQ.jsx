import React from "react";
import { COMPANY } from "./constants";

export default function FAQ() {
  const faqs = [
    { q: "¿Ofrecen estimados gratis?", a: "Sí, en Columbus y ciudades cercanas." },
    { q: "¿Tienen licencia y aseguranza?", a: "Sí, somos LLC, con licencia y asegurados. Documentos disponibles a solicitud." },
    { q: "¿Qué garantía ofrecen?", a: "Garantía en mano de obra; materiales según fabricante (p. ej., shingles)." },
    { q: "¿Trabajan con reclamos de seguro?", a: "Podemos asistir con fotos, estimados y documentación." },
    { q: "¿Qué materiales usan para roofing?", a: "Asphalt, metal y sistemas para techos planos según el caso." },
    { q: "¿Plazos de obra?", a: "Según el alcance: reparaciones 1–2 días; reemplazos 1–3; remodelaciones varían." },
  ];
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Preguntas frecuentes</h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group open:bg-slate-50 p-5">
              <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">{f.q}<span className="text-slate-400 group-open:rotate-45 transition">＋</span></summary>
              <p className="mt-3 text-slate-700">{f.a}</p></details>
          ))}
        </div></div></section>
  );
}
