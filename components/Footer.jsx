import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaWhatsapp } 
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
            </div>
  <div className="md:col-span-4 flex items-center justify-center gap-3 mt-2"></div></div></div>
      <div className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div></footer>
  );
}