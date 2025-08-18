import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import { COMPANY, SERVICES } from "./constants";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8">
        {/* Column: Company / Contact */}
        <div>
          <p className="text-white font-extrabold text-lg">{COMPANY.name}</p>
          <p className="text-sm mt-2">{COMPANY.city}</p>
          <div className="mt-3 space-y-1 text-sm">
            <a className="block hover:text-white" href={COMPANY.phoneHref}>
              <span className="inline-block mr-1">
                <Phone className="w-4 h-4 inline" />
              </span>
              {COMPANY.phone}
            </a>
            <a className="block hover:text-white" href={`mailto:${COMPANY.email}`}>
              <span className="inline-block mr-1">
                <Mail className="w-4 h-4 inline" />
              </span>
              {COMPANY.email}
            </a>
            {/* Socials */}
            <div className="mt-3 flex items-center gap-3">
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full ring-1 ring-white/15 hover:ring-white/30 hover:text-white"
                title="Instagram"
              >
                <FaInstagram className="w-5 h-5" aria-hidden="true" />
              </a>
              {COMPANY.facebook ? (
                <a
                  href={COMPANY.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full ring-1 ring-white/15 hover:ring-white/30 hover:text-white"
                  title="Facebook"
                >
                  <FaFacebook className="w-5 h-5" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* Column: Services */}
        <div>
          <p className="text-white font-semibold">Services</p>
          <ul className="mt-3 space-y-1 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <a href={`/services/${s.slug}`} className="hover:text-white">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column: Navigation */}
        <div>
          <p className="text-white font-semibold">Navigation</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
            <li><a href="#areas" className="hover:text-white">Areas</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
</ul>
        </div>

        {/* Column: Hours */}
        <div>
          <p className="text-white font-semibold">Hours</p>
          <p className="mt-3 text-sm">
            Mon–Sat: 8:00 AM – 6:00 PM<br />Sun: Emergencies
          </p>
</div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
      </div>
    </footer>
  );
}
