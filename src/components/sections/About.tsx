import { MapPin, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { portfolioData } from '@/data/portfolio'
import FadeIn from '@/components/ui/FadeIn'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  const { name, email, avatar } = portfolioData.profile

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <section id="about" className="py-24 px-4 md:px-6 md:min-h-screen md:flex md:items-center">
      <div className="mx-auto max-w-5xl">

        {/* Título de sección */}
        <div className="mb-12">
          <span className="text-sm font-medium text-violet-400">{t('about.tag')}</span>
          <h2 className="mt-2 text-3xl font-bold text-zinc-100 md:text-4xl">
            {t('about.title')}
          </h2>
        </div>

        {/* Contenido */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">

          {/* Foto */}
          <FadeIn direction='left'>
            <div className="flex-shrink-0">
              <Avatar className="h-48 w-48 md:h-56 md:w-56">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback className="bg-violet-700/20 text-violet-400 text-4xl font-bold">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </div>
          </FadeIn>

          {/* Texto */}
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col gap-6">
              {t('about.bio').split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-zinc-400">
                  {paragraph}
                </p>
              ))}

              {/* Datos */}
              <div className="flex flex-col gap-3">
                {location && (
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <MapPin size={16} className="text-violet-400 shrink-0" />
                    <span>{t('about.location')}</span>
                  </div>
                )}
                {/* {email && (
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <Mail size={16} className="text-violet-400 shrink-0" />
                    <span>{email}</span>
                  </div>
                )} */}
              </div>

              {/* Botón contacto */}
              <Button
                className="w-fit bg-violet-700 hover:bg-violet-800 text-white cursor-pointer"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('about.contact')}
                <ArrowRight size={16} className="ml-2" />
              </Button>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default About