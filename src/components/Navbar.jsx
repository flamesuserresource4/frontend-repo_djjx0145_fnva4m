import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between text-white">
        <a href="/" className="font-semibold tracking-tight">Wishbloom</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#create" className="hover:text-white">Create</a>
          <a href="/test" className="hover:text-white">Status</a>
          <a href="#features" className="hover:text-white">Features</a>
        </nav>
        <button className="sm:hidden p-2 text-white/80 hover:text-white" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}

export default Navbar
