const products = [
  { name: "Patti Pav", price: "₹18", img: "https://images.unsplash.com/photo-1600662251555-66b56f969e70?q=80&w=1600&auto=format&fit=crop" },
  { name: "Toast (Rusk)", price: "₹35", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1600&auto=format&fit=crop" },
  { name: "Khari Pav", price: "₹20", img: "https://images.unsplash.com/photo-1624001940155-05b72ccf102e?q=80&w=1600&auto=format&fit=crop" },
  { name: "Fresh Cakes", price: "From ₹299", img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1600&auto=format&fit=crop" },
  { name: "Buns & Breads", price: "₹25", img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1600&auto=format&fit=crop" },
  { name: "Cookies", price: "₹150/kg", img: "https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1600&auto=format&fit=crop" },
]

export default function ProductGrid() {
  return (
    <section id="products" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Popular Products</h2>
          <p className="text-slate-600">Freshly baked daily</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-800">{p.name}</h3>
                  <span className="text-rose-600 font-bold">{p.price}</span>
                </div>
                <button className="mt-3 w-full py-2 rounded-lg bg-rose-600 text-white font-medium hover:bg-rose-700 transition-colors">Enquire</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
