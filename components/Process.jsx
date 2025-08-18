import { Phone, FileText, CalendarCheck, Hammer, ClipboardCheck } from "lucide-react";

export default function Process() {
  const steps = [
    { title: "Free Estimate", desc: "Contact us by phone or WhatsApp and schedule a site visit.", icon: Phone },
    { title: "Detailed Proposal", desc: "We send scope, materials and a clear price. No surprises.", icon: FileText },
    { title: "Schedule", desc: "We coordinate date, permits and logistics around your needs.", icon: CalendarCheck },
    { title: "Build", desc: "Professional crew, safety protocols and daily clean-up.", icon: Hammer },
    { title: "Final Walkthrough", desc: "Walk the project with you and provide a written warranty.", icon: ClipboardCheck },
  ];
  return (
    <section className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-center text-slate-900">Our Process</h2>
        <p className="mt-2 text-center text-slate-600">Simple, transparent and on-time.</p>
        <div className="mt-10 grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl bg-white border border-slate-200 p-5 text-center">
              <div className="mx-auto w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 grid place-items-center mb-3">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
