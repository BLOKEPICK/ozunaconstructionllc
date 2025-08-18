import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import { COMPANY, SERVICES } from "./constants";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <p className="text-white font-extrabold text-lg">{COMPANY.name}</p>
          <p className="text-sm mt-2">{COMPANY.city}</p>
          <div className="mt-3 space-y-1 text-sm">
            <a className="block hover:text-white" href={COMPANY.phoneHref}><span className="inline-block mr-1"><Phone className="w-4 h-4 inline" /></span>{COMPANY.phone}</a>
            <a className="block hover:text-white" href={`mailto:${COMPANY.email}`}><span className="inline-block mr-1"><Mail className="w-4 h-4 inline" /></span>{COMPANY.email}</a>
            <a className="block hover:text-white" href={COMPANY.instagram} target="_blank">Instagram</a></div></div>
        <div>
          <p className="text-white font-semibold">Servicios</p>
          <ul className="mt-3 space-y-1 text-sm">
            {SERVICES.map(s => <li key={s.slug}>{s.title}</li>)}
          </ul></div>
        <div>
          <p className="text-white font-semibold">Navegación</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a href="#services" className="hover:text-white">Servicios</a></li>
            <li><a href="#projects" className="hover:text-white">Proyectos</a></li>
            <li><a href="#reviews" className="hover:text-white">Reseñas</a></li>
            <li><a href="#areas" className="hover:text-white">Áreas</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white">Contacto</a></li></ul></div>
        <div>
          <p className="text-white font-semibold">Horario</p>
          <p className="mt-3 text-sm">Lun–Sáb: 8:00am – 6:00pm<br/>Dom: Emergencias</p>
          <a href="#contact" className="inline-block mt-4 rounded-xl bg-emerald-500 text-slate-900 font-semibold px-4 py-2">Free Quote</a>
          <div className="md:col-span-4 flex items-center justify-center gap-3 mt-2">
    <a href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[#25D366] text-slate-900 font-semibold hover:brightness-95 transition">
      <svg viewBox="0 0 256 256" width="16" height="16" aria-hidden><path fill="currentColor" d="M127.9 0C57.5 0 0 57.4 0 127.9c0 22.6 6 44.7 17.4 64.1L0 256l65.3-17c18.7 10.2 39.7 15.6 61.2 15.6 70.4 0 127.9-57.4 127.9-127.9C254.4 57.4 198.3 0 127.9 0z"/><path fill="#FFF" d="M190.8 151.3c-2.9 8.3-14.2 15.7-22.2 16.6-5.9.7-13.6.9-39.4-8.2-33.1-11.7-54.5-45.5-56.1-47.6-1.6-2.1-13.4-17.9-13.4-34.2 0-16.3 8.5-24.3 11.5-27.6 2.9-3.3 6.3-4.1 8.4-4.1 2.1 0 4.2.02 6.1.11 2 .09 4.6-.75 7.2 5.5 2.6 6.2 8.9 21.5 9.7 23.1.8 1.6 1.3 3.5.2 5.6-1.1 2.1-1.7 3.4-3.4 5.2-1.7 1.8-3.4 4.1-4.9 5.5-1.6 1.6-3.3 3.3-1.4 6.4 1.9 3.1 8.6 14.2 18.5 23 12.7 11.3 23.4 14.8 26.5 16.4 3.1 1.6 4.9 1.4 6.8-.8 1.9-2.1 7.8-9.1 9.9-12.2 2.1-3.1 4.2-2.6 7.1-1.6 2.9 1 18.5 8.7 21.7 10.3 3.2 1.6 5.3 2.4 6.1 3.7.8 1.3.8 7.4-2.1 15.7z"/></svg>
      Chat on WhatsApp
    </a></div>
  <div className="md:col-span-4 flex items-center justify-center gap-3 mt-2"></div></div></div>
      <div className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div></footer>
  );
}