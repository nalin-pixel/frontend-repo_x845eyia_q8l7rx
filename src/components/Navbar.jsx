import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight">Dhanlaxmi Bakery</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#products" className="hover:text-rose-600 transition-colors">Products</a>
          <a href="#about" className="hover:text-rose-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-rose-600 transition-colors">Contact</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-700">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
