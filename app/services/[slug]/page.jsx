import Link from "next/link";
import Contact from "../../../components/Contact";
import { COMPANY } from "../../../components/constants";

const SERVICES_DETAIL = {
  roofing: {
    title: "Roofing",
    hero: "Roofing built to perform in Ohio weather.",
    desc: `We install and repair roofing systems designed for Central Ohio. From architectural asphalt shingles to metal and low‑slope solutions, our crews focus on clean tear‑offs, solid underlayment, correct flashing, and proper ventilation to protect your home year‑round.`,
    bullets: [
      "Architectural asphalt shingles (GAF/IKO/OWENS CORNING equivalents)",
      "Drip edge, ice & water shield, synthetic underlayment",
      "Step/Counter flashing, pipe boots, ridge caps & ventilation",
      "Storm damage assessments and emergency dry‑ins",
      "Manufacturer‑aligned best practices and code compliance"
    ]
  },
  siding: {
    title: "Siding",
    hero: "Siding that lifts curb appeal and protects the envelope.",
    desc: `Precision installation of vinyl and fiber‑cement siding, including trim, soffits, and fascia. We follow manufacturer specs for nail pattern, expansion gaps, moisture management, and finishing—so your exterior looks sharp and performs for years.`,
    bullets: [
      "Vinyl and fiber‑cement systems with proper moisture barriers",
      "Window/door trim, J‑channel, soffits & fascia replacement",
      "Color‑matched accessories and caulking for a clean finish",
      "Repairs and partial replacements to match existing profiles",
      "Upgrades to improve energy efficiency and durability"
    ]
  },
  framing: {
    title: "Framing",
    hero: "Structural framing done right—square, plumb, and true.",
    desc: `Load‑bearing modifications, additions, garages, and interior reframing. We frame with attention to layout, span, shear, and fastening schedules, coordinating with inspectors and engineers where required.`,
    bullets: [
      "Wood & light‑gauge metal framing per plan and code",
      "Headers, LVLs, and beam pocket detailing",
      "Load‑bearing wall removals & structural retrofits",
      "Additions, dormers, and garage structures",
      "Blocking, fire‑stopping, and hardware per spec"
    ]
  },
  remodeling: {
    title: "Remodeling",
    hero: "Clean, on‑schedule remodels with pro communication.",
    desc: `Interior upgrades for kitchens, bathrooms, basements, and living spaces. We provide clear scopes, dust control, material coordination, and daily site cleanup—so the project runs smoothly and finishes to spec.`,
    bullets: [
      "Kitchen cabinet install, backsplashes, flooring & lighting",
      "Bathroom tile, shower systems, vanities, and ventilation",
      "Basement finishing: framing, drywall, egress, and trims",
      "Open‑concept rework and selective wall removals",
      "Punch‑list completion with quality controls"
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(SERVICES_DETAIL).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const svc = SERVICES_DETAIL[params.slug];
  if (!svc) {
    return { title: "Service | Ozuna Construction LLC" };
  }
  const title = `${svc.title} in Columbus, OH | Ozuna Construction LLC`;
  const description = svc.desc;
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || "https://ozunaconstructionllc.vercel.app"}/services/${params.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
    twitter: { card: "summary_large_image", title, description }
  };
}

export default function ServicePage({ params }) {
  const svc = SERVICES_DETAIL[params.slug];
  if (!svc) {
    return <main className="min-h-[60vh] grid place-items-center p-10">Service not found</main>;
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${svc.title} — ${COMPANY.name}`,
    "serviceType": svc.title,
    "areaServed": { "@type": "City", "name": "Columbus" },
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY.name,
      "telephone": COMPANY.phone,
      "email": COMPANY.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Columbus",
        "addressRegion": "OH",
        "addressCountry": "US"
      }
    },
    "description": svc.desc
  };

  return (
    <main className="bg-white text-slate-900">
      {/* Header */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{svc.title}</h1>
            <Link href="/#services" className="rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10">
              Back to Home
            </Link>
          </div>
          <p className="mt-3 text-slate-200 max-w-3xl">{svc.hero}</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose prose-slate max-w-none">
              <p className="text-lg">{svc.desc}</p>
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              {svc.bullets.map((b, i) => (
                <li key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">Why homeowners choose {COMPANY.name}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Licensed & Insured</li>
                <li>10+ Years Experience</li>
                <li>Warranty on Labor</li>
                <li>Local & Family‑Owned</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-14 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold">Get a Free Quote</h2>
          <p className="mt-2 text-slate-600">Tell us about your project and we’ll get back to you shortly.</p>
          <div className="mt-6">
            <Contact />
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </main>
  );
}
