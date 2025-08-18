export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-4xl font-extrabold">Projects</h1>
          <p className="mt-2 text-slate-200">Recent work from our Instagram gallery.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Replace with real images in public/images/ig */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-2xl bg-slate-100 border border-slate-200 grid place-items-center">
              <span className="text-slate-500 text-sm">Project #{i+1}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
