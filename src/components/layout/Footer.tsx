import { SiGithub, SiInstagram } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { portfolioData } from '@/data/portfolio'

const iconMap = {
  github:    SiGithub,
  linkedin:  FaLinkedin,
  instagram: SiInstagram,
}

const Footer = () => {
  const { name, socials } = portfolioData.profile

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 md:flex-row md:justify-between">
        
        {/* Nombre */}
        <span className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {name}
        </span>

        {/* Redes sociales */}
        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = iconMap[social.platform]
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors hover:text-violet-400"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>

      </div>
    </footer>
  )
}

export default Footer