import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { COMPANY } from "./constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#10b981 1px, transparent 1px)", backgroundSize: "16px 16px"}}/>
      <div className="mx-auto max-w-7xl px-4 py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Roofing, Siding & Remodeling in {COMPANY.city}</h1>
          <p className="mt-4 text-lg text-slate-200">Licensed & Insured · Free Estimates · Warranty on Labor</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-slate-900 hover:bg-emerald-600 px-5 py-2 font-semibold shadow-sm transition-colors">Get a Free Quote</a>
            <a href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-700 text-gray-700 bg-white hover:bg-gray-700 hover:text-white px-5 py-2 font-medium shadow-sm transition-colors"><FaWhatsapp className="text-lg" /> Chat on WhatsApp</a></div></div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl bg-white/5 ring-1 ring-white/10 grid place-items-center text-center p-6">
            <p className="text-slate-200">Replace this block with a real client Instagram photo (16:9 or 4:3).
              <br/>Optimizada en .webp para mejor performance.</p></div></div></div></section>
  );
}