"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import { COMPANY, SERVICES } from "./constants";
import { event as gaEvent } from "../lib/gtag";

export default function Footer() {
  const handleClick = (method) => () => gaEvent("cta_click", { method });

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8">
        {/* Column 1: Company */}
        <div>
          <p className="text-white font-extrabold text-lg">{COMPANY.name}</p>
          <p className="text-sm mt-2">{COMPANY.city}</p>
          <div className="mt-3 space-y-1 text-sm">
            <a
              className="block hover:text-white"
              href={COMPANY.phoneHref}
              aria-label={`Call ${COMPANY.name}`}
              onClick={handleClick("tel")}
            >
              <Phone className="w-4 h-4 inline" aria-hidden="true" />
              <span className="ml-1">{COMPANY.phone}</span>
            </a>
            <a
              className="block hover:text-white"
              href={`mailto:${COMPANY.email}`}
              aria-label={`Email ${COMPANY.name}`}
              onClick={handleClick("email")}
            >
              <Mail className="w-4 h-4 inline" aria-hidden="true" />
              <span className="ml-1">{COMPANY.email}</span>
            </a>
            {COMPANY.instagram && (
              <a
                className="inline-flex items-center hover:text-white mt-1"
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (opens in a new tab)"
                title="Instagram"
              >
                <FaInstagram className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <p className="text-white font-semibold">Services</p>
          <ul className="mt-3 space-y-1 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Navigation */}
        <div>
          <p className="text-white font-semibold">Navigation</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
            <li><a href="#areas" className="hover:text-white">Areas</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 4: Hours + CTA */}
        <div>
          <p className="text-white font-semibold">Hours</p>
          <p className="mt-3 text-sm">
            Mon–Sat: 8:00am – 6:00pm<br />Sun: Emergencies
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 rounded-xl bg-emerald-500 text-slate-900 font-semibold px-4 py-2"
            onClick={handleClick("free_quote")}
          >
            Free Quote
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
      </div>
    </footer>
  );
}
