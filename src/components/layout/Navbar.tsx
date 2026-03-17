import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/data/portfolio'
import { useTranslation } from 'react-i18next'

const navLinks = [
  { label: 'nav.about', href: '#about' },
  { label: 'nav.skills', href: '#skills' },
  { label: 'nav.projects', href: '#projects' },
  { label: 'nav.contact', href: '#contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }

  const handleNavClick = (href: string) => {
    setOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="border-b border-violet-900/30 bg-violet-950/20 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-semibold text-zinc-100 hover:text-violet-400 transition-colors cursor-pointer"
          >
            {portfolioData.profile.name}
          </button>

          {/* Links desktop */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100 cursor-pointer"
              >
                {t(link.label)}
              </a>
            ))}
          </nav>

          {/* Derecha desktop */}
          <div className="hidden md:flex items-center gap-3">
            {/* Toggle idioma */}
            <button
              onClick={toggleLang}
              className="text-xs font-medium text-zinc-400 hover:text-violet-400 transition-colors cursor-pointer border border-zinc-700 rounded-md px-2 py-1"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>

            {/* CV Button */}
            <Button
              asChild
              size="sm"
              className="bg-violet-700 hover:bg-violet-800 text-white cursor-pointer"
            >
              <a href={portfolioData.profile.cvUrl} target="_blank" rel="noopener noreferrer">
                {t('nav.cv')}
              </a>
            </Button>
          </div>

          {/* Móvil derecha */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Toggle idioma móvil */}
            <button
              onClick={toggleLang}
              className="text-xs font-medium text-zinc-400 hover:text-violet-400 transition-colors cursor-pointer border border-zinc-700 rounded-md px-2 py-1"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Hamburguesa */}
            <button
              onClick={() => setOpen(!open)}
              className="text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors p-1"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

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
                {t(link.label)}
              </button>
            ))}
            <Button
              asChild
              className="mt-3 bg-violet-700 hover:bg-violet-800 text-white cursor-pointer"
            >
              <a href={portfolioData.profile.cvUrl} target="_blank" rel="noopener noreferrer">
                {t('nav.cv')}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar