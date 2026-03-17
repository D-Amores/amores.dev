import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/data/portfolio'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'nav.about', href: '#about' },
  { label: 'nav.skills', href: '#skills' },
  { label: 'nav.projects', href: '#projects' },
  { label: 'nav.contact', href: '#contact' },
]

interface NavbarProps {
  minimal?: boolean
}

const Navbar = ({ minimal = false }: NavbarProps) => {
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  const handleNavClick = (href: string) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 500)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="border-b border-violet-900/30 bg-violet-950/20 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">

          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="text-sm font-semibold text-zinc-100 hover:text-violet-400 transition-colors cursor-pointer"
          >
            {portfolioData.profile.name}
          </button>

          {/* Links desktop */}
          {!minimal && (
            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="text-sm text-zinc-400 transition-colors hover:text-zinc-100 cursor-pointer"
                >
                  {t(link.label)}
                </a>
              ))}
            </nav>
          )}

          {/* Derecha */}
          <div className="flex items-center gap-3">
            {/* Toggle idioma - siempre visible */}
            <button
              onClick={toggleLang}
              className="text-xs font-medium text-zinc-400 hover:text-violet-400 transition-colors cursor-pointer border border-zinc-700 rounded-md px-2 py-1"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>

            {/* CV - solo si no es minimal */}
            {!minimal && (
              <Button
                asChild
                size="sm"
                className="hidden bg-violet-700 hover:bg-violet-800 text-white cursor-pointer md:flex"
              >
                <a href={portfolioData.profile.cvUrl} target="_blank" rel="noopener noreferrer">
                  {t('nav.cv')}
                </a>
              </Button>
            )}

            {/* Hamburguesa - solo si no es minimal */}
            {!minimal && (
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors p-1"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Dropdown móvil */}
      {!minimal && open && (
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