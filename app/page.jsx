// Home composition
"use client";
import { event as gaEvent } from "../lib/gtag";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Reviews from "../components/Reviews";
import Process from "../components/Process";
import Areas from "../components/Areas";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";
import { COMPANY, AREAS } from "../components/constants";

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            name: COMPANY.name,
            address: { addressLocality: "Columbus", addressRegion: "OH", addressCountry: "US" },
            areaServed: AREAS.map((a) => `${a}, OH`),
            telephone: COMPANY.phone,
            email: COMPANY.email,
            sameAs: [COMPANY.instagram],
          }),
        }}
      />
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Projects />
      <Reviews />
      <Process />
      <Areas />
      <FAQ />
      <Contact />
      <Footer />
      <StickyCTA />
    </main>
  );
}
