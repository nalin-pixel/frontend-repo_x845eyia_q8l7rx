export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900">Dhanlaxmi Bakery</h3>
          <p className="mt-2 text-slate-600">Patti Pav • Toast • Khari Pav • Cakes & more</p>
          <p className="mt-4 text-slate-600">Open daily • Fresh batches every morning</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-800">Contact</h4>
          <p className="mt-2 text-slate-600">Phone: +91-9XXXXXXXXX</p>
          <p className="text-slate-600">WhatsApp: +91-9XXXXXXXXX</p>
          <p className="text-slate-600">Email: info@dhanlaxmibakery.com</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-800">Visit Us</h4>
          <p className="mt-2 text-slate-600">Your Shop Address Here</p>
          <div className="mt-3 aspect-[16/9] w-full overflow-hidden rounded-lg ring-1 ring-slate-200">
            <img src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXB8ZW58MHwwfHx8MTc2MzQ1MTU1Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Map" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-slate-500 py-6">© {new Date().getFullYear()} Dhanlaxmi Bakery. All rights reserved.</div>
    </footer>
  )
}
