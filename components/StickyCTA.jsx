import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY } from "./constants";
import { WhatsAppIcon } from "./Icons";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2">
      <a href={COMPANY.whatsappHref} className="inline-flex items-center gap-2 rounded-full border border-gray-700 text-gray-700 bg-white hover:bg-gray-700 hover:text-white px-5 py-2 font-medium shadow-sm transition-colors"><FaWhatsapp className="text-lg" /> WhatsApp</a>
      <a href={COMPANY.phoneHref} className="rounded-full bg-slate-900 text-white font-semibold shadow-lg px-4 py-3">Call {COMPANY.phone}</a>
    </div>
  );
}