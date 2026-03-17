import { Mail, MapPin } from 'lucide-react'
import { SiGithub, SiInstagram } from 'react-icons/si'
import { portfolioData } from '@/data/portfolio'
import { FaLinkedin } from 'react-icons/fa'
import FadeIn from '../ui/FadeIn'

const iconMap = {
  github:    { icon: SiGithub,    label: 'GitHub',    color: 'hover:text-zinc-100' },
  linkedin:  { icon: FaLinkedin,  label: 'LinkedIn',  color: 'hover:text-blue-400' },
  instagram: { icon: SiInstagram, label: 'Instagram', color: 'hover:text-pink-400' },
}

const Contact = () => {
  const { name, email, location, socials } = portfolioData.profile

  return (
    <section id="contact" className="py-24 px-4 md:px-6 md:min-h-screen md:flex md:items-center">
      <div className="mx-auto max-w-5xl">

        {/* Título */}
        <div className="mb-12">
          <span className="text-sm font-medium text-violet-400">¿Hablamos?</span>
          <h2 className="mt-2 text-3xl font-bold text-zinc-100 md:text-4xl">
            Contacto
          </h2>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-20">

          {/* Texto */}
          <FadeIn>
            <div className="flex flex-col gap-4 max-w-sm">
              <p className="text-zinc-400 leading-relaxed">
                Estoy disponible para proyectos freelance, colaboraciones o simplemente para platicar sobre tecnología. ¡No dudes en escribirme!
              </p>
            </div>
          </FadeIn>

          {/* Info */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-6">

              {/* Email */}
              {email && (
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                    <Mail size={16} className="text-violet-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-500">Email</span>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm text-zinc-300 hover:text-violet-400 transition-colors cursor-pointer"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              )}

              {/* Ubicación */}
              {location && (
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                    <MapPin size={16} className="text-violet-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-500">Ubicación</span>
                    <span className="text-sm text-zinc-300">{location}</span>
                  </div>
                </div>
              )}

              {/* Redes sociales */}
              <div className="flex flex-col gap-2">
                <span className="text-xs text-zinc-500">Redes sociales</span>
                <div className="flex items-center gap-4">
                  {socials.map((social) => {
                    const { icon: Icon, label, color } = iconMap[social.platform]
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={label}
                        className={`text-zinc-500 transition-colors cursor-pointer ${color}`}
                      >
                        <Icon size={22} />
                      </a>
                    )
                  })}
                </div>
              </div>

            </div>
        </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default Contact