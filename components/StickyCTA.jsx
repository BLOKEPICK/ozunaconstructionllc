import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "./constants";
import { WhatsAppIcon } from "./Icons";

export default function StickyCTA() {
  return (
    <div className="bottom-4 fixed flex flex-col gap-2 right-4 z-[100]">
      <a href={COMPANY.whatsappHref} className="bg-white border border-gray-700 bottom-4 fixed font-medium gap-2 hover:bg-gray-700 hover:text-white inline-flex items-center md:bottom-6 md:right-6 pointer-events-auto px-5 py-2 right-4 rounded-full shadow-sm text-gray-700 transition-colors z-[100]"><FaWhatsapp className="text-lg" /> WhatsApp</a>
      <a href={COMPANY.phoneHref} className="rounded-full bg-slate-900 text-white font-semibold shadow-lg px-4 py-3">Call {COMPANY.phone}</a></div>
  );
}