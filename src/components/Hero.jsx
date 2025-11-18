export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_0%_0%,#ffe4e6_0,rgba(255,255,255,0)_60%),radial-gradient(800px_circle_at_100%_0%,#fee2e2_0,rgba(255,255,255,0)_50%),radial-gradient(700px_circle_at_100%_100%,#fef3c7_0,rgba(255,255,255,0)_45%),radial-gradient(700px_circle_at_0%_100%,#dcfce7_0,rgba(255,255,255,0)_45%)]"></div>
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold ring-1 ring-rose-200">Fresh • Local • Since 1998</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Dhanlaxmi Bakery
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Patti Pav, Toast, Khari Pav, Cakes and all your favorite bakery items — baked fresh daily with the finest ingredients.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center px-5 py-3 rounded-lg bg-rose-600 text-white font-semibold shadow hover:bg-rose-700 transition-colors">See Products</a>
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-rose-700 font-semibold ring-1 ring-rose-200 hover:bg-rose-50 transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop" alt="Bakery display" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-xl shadow ring-1 ring-slate-200 p-4">
              <p className="text-sm font-semibold text-slate-700">Fresh out of the oven</p>
              <p className="text-xs text-slate-500">New batches every morning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
