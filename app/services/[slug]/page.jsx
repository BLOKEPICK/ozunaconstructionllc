export async function generateMetadata({ params }){ const t=(params?.slug?params.slug[0].toUpperCase()+params.slug.slice(1):'Service'); return { title: t+' | Ozuna Construction LLC', description:'Professional '+(params?.slug||'service')+' in Columbus, OH.' } }
export default function ServicePage({ params }) {
  const serviceMap = {
    framing: { title: "Framing", items: ["Wood & metal framing","Load-bearing walls","Additions & garages","Code compliance"] },
    roofing: { title: "Roofing", items: ["Asphalt shingles","Metal roofing","Flat roof membranes","Emergency repairs"] },
    siding: { title: "Siding", items: ["Vinyl siding","Fiber cement","Wood siding","Trim & soffits"] },
    carpentry: { title: "Carpentry", items: ["Decks & railings","Interior trim & doors","Custom woodwork","Repairs"] },
    remodeling: { title: "Remodeling", items: ["Kitchen upgrades","Bathroom renovations","Basement finishing","Open concept"] },
  };
  const content = serviceMap[params.slug];
  if (!content) return <main className="min-h-screen p-10">Service not found</main>;
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-extrabold tracking-tight">{content.title}</h1>
          <p className="mt-3 text-slate-200">Expert {content.title.toLowerCase()} in Columbus, OH</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 grid sm:grid-cols-2 gap-5">
          {content.items.map((d, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-6">{d}</div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Get a Free Quote</h2>
          <a href="/contact" className="rounded-xl bg-emerald-600 text-white font-semibold px-6 py-3">Contact Us</a>
        </div>
      </section>
    </main>
  );
}

<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":(typeof window!=="undefined"?window.location.pathname.split("/").pop():"Service"),"provider":{"@type":"LocalBusiness","name":"Ozuna Construction LLC"},"areaServed":["Columbus, OH"]})}}/>
