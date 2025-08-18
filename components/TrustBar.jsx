import { ShieldCheck, BadgeCheck, Wrench, Home } from "lucide-react";

export default function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Licensed & Insured" },
    { icon: BadgeCheck, label: "10+ Years Experience" },
    { icon: Wrench, label: "Warranty on Labor" },
    { icon: Home, label: "Local & Family-Owned" },
  ];
  return (
    <section className="py-6 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          {items.map((it, i) => (
            <div key={i} className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-3 px-3">
              <it.icon className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-semibold text-slate-700">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
