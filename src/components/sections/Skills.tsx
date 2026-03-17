import { SiJavascript, SiTypescript, SiPhp, SiPython, SiFastapi, SiLaravel, SiGit, SiGithub, SiDocker, SiPostman, SiMarkdown, SiBootstrap, SiTailwindcss, SiMysql, SiPostgresql, SiLinux, SiLangchain, SiN8N, SiReact } from 'react-icons/si'
import { FaServer, FaNetworkWired, FaShieldAlt, FaDatabase, FaWindows, FaBrain, FaLanguage } from 'react-icons/fa'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { portfolioData } from '@/data/portfolio'
import type { Skill } from '@/types'
import FadeIn from '@/components/ui/FadeIn'
import { useTranslation } from 'react-i18next'

const iconMap: Record<string, React.ReactNode> = {
  'JavaScript':          <SiJavascript className="text-yellow-400" />,
  'TypeScript':          <SiTypescript className="text-blue-400" />,
  'React':               <SiReact className="text-cyan-400" />,
  'Bootstrap 5':         <SiBootstrap className="text-purple-400" />,
  'Tailwind CSS':        <SiTailwindcss className="text-cyan-400" />,
  'PHP':                 <SiPhp className="text-indigo-400" />,
  'Python':              <SiPython className="text-yellow-300" />,
  'FastAPI':             <SiFastapi className="text-emerald-400" />,
  'Laravel':             <SiLaravel className="text-red-400" />,
  'SQL':                 <FaDatabase className="text-orange-400" />,
  'MySQL':               <SiMysql className="text-blue-300" />,
  'PostgreSQL':          <SiPostgresql className="text-blue-400" />,
  'Git / GitHub':        <SiGithub className="text-zinc-300" />,
  'Docker':              <SiDocker className="text-blue-400" />,
  'Linux':               <SiLinux className="text-yellow-300" />,
  'Servidores':          <FaServer className="text-zinc-400" />,
  'Postman':             <SiPostman className="text-orange-400" />,
  'Markdown':            <SiMarkdown className="text-zinc-300" />,
  'Office':              <FaWindows className="text-blue-400" />,
  'Ciberseguridad':      <FaShieldAlt className="text-green-400" />,
  'Redes':               <FaNetworkWired className="text-zinc-400" />,
  'Sistemas Operativos': <FaWindows className="text-blue-300" />,
  'LangChain':           <SiLangchain className="text-emerald-400" />,
  'LangGraph':           <FaBrain className="text-violet-400" />,
  'n8n':                 <SiN8N className="text-pink-400" />,
  'MCP':                 <FaBrain className="text-violet-300" />,
  'RAG':                 <FaBrain className="text-indigo-400" />,
  'Inglés B1':           <FaLanguage className="text-zinc-300" />,
}

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="flex flex-col items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 p-4 transition-colors hover:border-violet-700/50 hover:bg-zinc-800/50 cursor-default h-full">
    <span className="text-3xl">{iconMap[skill.name] ?? <FaBrain className="text-violet-400" />}</span>
    <span className="text-center text-xs text-zinc-400">{skill.name}</span>
  </div>
)

const SkillsCarousel = ({ skills, label }: { skills: Skill[], label: string }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-sm font-medium text-violet-400">{label}</h3>
    <Carousel opts={{ align: 'start', loop: false }} className="w-full">
      <CarouselContent className="-ml-3">
        {skills.map((skill) => (
          <CarouselItem key={skill.name} className="pl-3 basis-1/3 sm:basis-1/4 md:basis-1/6">
            <SkillCard skill={skill} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 -left-4" />
      <CarouselNext className="border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 -right-4" />
    </Carousel>
  </div>
)

const Skills = () => {
  const { t } = useTranslation()
  const { skills } = portfolioData

  const categories = [
    { key: 'frontend', label: t('skills.categories.frontend') },
    { key: 'backend',  label: t('skills.categories.backend') },
    { key: 'tools',    label: t('skills.categories.tools') },
    { key: 'ai',       label: t('skills.categories.ai') },
    { key: 'other',    label: t('skills.categories.other') },
  ]
  
  return (
    <section id="skills" className="py-24 px-4 md:px-6 md:min-h-screen md:flex md:items-center">
      <div className="mx-auto max-w-5xl flex flex-col gap-12">

        {/* Título */}
        <FadeIn>
          <div>
            <span className="text-sm font-medium text-violet-400">{t('skills.tag')}</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-100 md:text-4xl">
              {t('skills.title')}
            </h2>
          </div>
        </FadeIn>

        {/* Categorías con carousel */}
        <FadeIn delay={0.2}>
          {categories.map(({ key, label }) => {
            const filtered = skills.filter((s) => s.category === key)
            if (filtered.length === 0) return null
            return (
              <SkillsCarousel key={key} skills={filtered} label={label} />
            )
          })}
        </FadeIn>

      </div>
    </section>
  )
}

export default Skills