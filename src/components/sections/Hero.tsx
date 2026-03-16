import { ArrowRight, ArrowDown, Github, Linkedin, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { portfolioData } from '@/data/portfolio'
import { TypeAnimation } from 'react-type-animation'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
}

const Hero = () => {
  const { name, role, bio, socials } = portfolioData.profile

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 pt-20 md:px-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">

        {/* Saludo */}
        <span className="text-sm font-medium text-violet-400">
          Hola, mi nombre es
        </span>

        {/* Nombre */}
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 md:text-6xl lg:text-7xl">
          {name}
        </h1>

        {/* Rol */}
        <TypeAnimation
            sequence={[
                'Full Stack Developer',
                2000,
                'Frontend Developer',
                2000,
                'Backend Developer',
                2000,
                'AI Developer',
                2000,
            ]}
            wrapper="h2"
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
            className="text-2xl font-semibold text-violet-400 md:text-4xl lg:text-5xl"
        />

        <Separator className="bg-zinc-800" />

        {/* Bio */}
        <p className="max-w-xl text-base leading-relaxed text-zinc-400">
          {bio}
        </p>

        {/* Botones */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            className="bg-violet-700 hover:bg-violet-800 text-white cursor-pointer"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver proyectos
            <ArrowRight size={16} className="ml-2" />
          </Button>
          <Button
            variant="outline"
            className="border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-800 hover:text-white cursor-pointer"
            asChild
          >
            <a href={portfolioData.profile.cvUrl} target="_blank" rel="noopener noreferrer">
              Descargar CV
            </a>
          </Button>
        </div>

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
                className="text-zinc-500 transition-colors hover:text-violet-400 cursor-pointer"
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 flex justify-center animate-bounce">
          <ArrowDown size={20} className="text-zinc-600" />
        </div>

      </div>
    </section>
  )
}

export default Hero