import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { COMPANY } from "./constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="inline-block rounded-full bg-emerald-600 text-white w-9 h-9 grid place-items-center font-bold">O</span>
          <div className="leading-tight">
            <p className="font-extrabold tracking-tight text-slate-900 text-lg">Ozuna Construction LLC</p>
            <p className="text-xs text-slate-500">{COMPANY.city}</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#services" className="hover:text-emerald-700">Services</a>
          <a href="#projects" className="hover:text-emerald-700">Projects</a>
          <a href="#reviews" className="hover:text-emerald-700">Reviews</a>
          <a href="#areas" className="hover:text-emerald-700">Areas</a>
          <a href="#faq" className="hover:text-emerald-700">FAQ</a>
          <a href="#contact" className="hover:text-emerald-700">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={COMPANY.whatsappHref} className="hidden sm:inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-emerald-600 text-white text-sm font-semibold shadow hover:bg-emerald-700" aria-label="WhatsApp">
            <WhatsAppIcon width={20} height={20} />
            <span>WhatsApp</span>
          </a>
          <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-slate-900 text-white text-sm font-semibold shadow hover:bg-slate-800" aria-label="Call Now">
            <Phone className="w-5 h-5" /> <span>{COMPANY.phone}</span>
          </a>
        </div>
      </div>
    </header>
  );
}