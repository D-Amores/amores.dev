import { ArrowRight, ArrowDown } from 'lucide-react'
import { SiGithub, SiInstagram } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { portfolioData } from '@/data/portfolio'
import { TypeAnimation } from 'react-type-animation'
import FadeIn from '../ui/FadeIn'
import { useTranslation } from 'react-i18next'

const iconMap = {
  github:    SiGithub,
  linkedin:  FaLinkedin,
  instagram: SiInstagram,
}

const Hero = () => {
  const { name, socials } = portfolioData.profile
  const { t } = useTranslation()

  return (
    <section className="flex min-h-dvh flex-col items-center justify-center px-4 pt-20 md:px-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">

        {/* Saludo */}
        <FadeIn delay={0}>
          <span className="text-sm font-medium text-violet-400">
            {t('hero.greeting')}
          </span>
        </FadeIn>

        {/* Nombre */}
        <FadeIn delay={0.1}>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 md:text-6xl lg:text-7xl">
            {name}
          </h1>
        </FadeIn>

        {/* Rol */}
        <FadeIn delay={0.2}>
          <TypeAnimation
              sequence={[
                t('hero.roles.0'), 2000,
                t('hero.roles.1'), 2000,
                t('hero.roles.2'), 2000,
                t('hero.roles.3'), 2000,
              ]}
              wrapper="h2"
              speed={50}
              deletionSpeed={70}
              repeat={Infinity}
              className="text-2xl font-semibold text-violet-400 md:text-4xl lg:text-5xl"
          />
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <Separator className="bg-zinc-800" />
        </FadeIn>

        {/* Bio */}
        <FadeIn delay={0.4}>
          <p className="max-w-xl text-base leading-relaxed text-zinc-400">
          {t('hero.bio')}
        </p>
        </FadeIn>

        {/* Botones */}
        <FadeIn delay={0.5}>
          <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            className="bg-violet-700 hover:bg-violet-800 text-white cursor-pointer"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.viewProjects')}
            <ArrowRight size={16} className="ml-2" />
          </Button>
          <Button
            variant="outline"
            className="border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-800 hover:text-white cursor-pointer"
            asChild
          >
            <a href={portfolioData.profile.cvUrl} target="_blank" rel="noopener noreferrer">
              {t('hero.downloadCv')}
            </a>
          </Button>
        </div>
        </FadeIn>

        {/* Redes sociales */}
        <FadeIn delay={0.6}>
          <div className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = iconMap[social.platform]
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition-colors hover:text-violet-400 cursor-pointer"
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={0.7}>
          <div className="mt-8 flex justify-center animate-bounce">
            <ArrowDown size={20} className="text-zinc-600" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Hero