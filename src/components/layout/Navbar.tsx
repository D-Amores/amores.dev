import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/data/portfolio'

const navLinks = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

const Navbar = () => {
  const [visible, setVisible] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY

    const handleScroll = () => {
      const currentY = window.scrollY
      setVisible(currentY < lastY || currentY < 50)
      lastY = currentY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    // <header
    //   className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
    //     visible ? 'translate-y-0' : '-translate-y-full'
    //   }`}
    // >
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Barra principal */}
      <div className="border-b border-violet-900/30 bg-violet-950/20 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">

          {/* Logo / Nombre */}
          <span className="text-sm font-semibold text-zinc-100">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm font-semibold text-zinc-100 hover:text-violet-400 transition-colors cursor-pointer"
            >
              {portfolioData.profile.name}
            </button>
          </span>

          {/* Links desktop */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CV Button desktop */}
          <Button
            asChild
            size="sm"
            className="hidden bg-violet-700 hover:bg-violet-800 text-white cursor-pointer md:flex"
          >
            <a href={portfolioData.profile.cvUrl} target="_blank" rel="noopener noreferrer">
              Descargar CV
            </a>
          </Button>

          {/* Hamburguesa móvil */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors p-1"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* Dropdown móvil */}
      {open && (
        <div className="border-b border-violet-900/30 bg-violet-950/40 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-5xl flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="py-3 text-left text-sm text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer border-b border-zinc-800/50 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <Button
              asChild
              className="mt-3 bg-violet-700 hover:bg-violet-800 text-white cursor-pointer"
            >
              <a href={portfolioData.profile.cvUrl} target="_blank" rel="noopener noreferrer">
                Descargar CV
              </a>
            </Button>
          </nav>
        </div>
      )}

    </header>
  )
}

export default Navbar