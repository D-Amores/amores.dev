import { SiJavascript, SiTypescript, SiPhp, SiPython, SiFastapi, SiLaravel, SiGit, SiGithub, SiDocker, SiPostman, SiMarkdown, SiBootstrap, SiTailwindcss, SiMysql, SiPostgresql, SiLinux, SiLangchain, SiN8N, SiReact } from 'react-icons/si'
import { FaServer, FaNetworkWired, FaShieldAlt, FaDatabase, FaWindows, FaBrain, FaLanguage } from 'react-icons/fa'
import type { Skill } from '@/types'

const iconMap: Record<string, React.ReactNode> = {
  'React':             <SiReact className="text-blue-400" />,
  'JavaScript':        <SiJavascript className="text-yellow-400" />,
  'TypeScript':        <SiTypescript className="text-blue-400" />,
  'Bootstrap 5':       <SiBootstrap className="text-purple-400" />,
  'Tailwind CSS':      <SiTailwindcss className="text-cyan-400" />,
  'PHP':               <SiPhp className="text-indigo-400" />,
  'Python':            <SiPython className="text-yellow-300" />,
  'FastAPI':           <SiFastapi className="text-emerald-400" />,
  'Laravel':           <SiLaravel className="text-red-400" />,
  'SQL':               <FaDatabase className="text-orange-400" />,
  'MySQL':             <SiMysql className="text-blue-300" />,
  'PostgreSQL':        <SiPostgresql className="text-blue-400" />,
  'Git / GitHub':      <SiGithub className="text-zinc-300" />,
  'Docker':            <SiDocker className="text-blue-400" />,
  'Linux':             <SiLinux className="text-yellow-300" />,
  'Servidores':        <FaServer className="text-zinc-400" />,
  'Postman':           <SiPostman className="text-orange-400" />,
  'Markdown':          <SiMarkdown className="text-zinc-300" />,
  'Office':            <FaWindows className="text-blue-400" />,
  'Ciberseguridad':    <FaShieldAlt className="text-green-400" />,
  'Redes':             <FaNetworkWired className="text-zinc-400" />,
  'Sistemas Operativos': <FaWindows className="text-blue-300" />,
  'LangChain':         <SiLangchain className="text-emerald-400" />,
  'LangGraph':         <FaBrain className="text-violet-400" />,
  'n8n':               <SiN8N className="text-pink-400" />,
  'MCP':               <FaBrain className="text-violet-300" />,
  'RAG':               <FaBrain className="text-indigo-400" />,
  'Inglés B1':         <FaLanguage className="text-zinc-300" />,
}

const categories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend',  label: 'Backend' },
  { key: 'tools',    label: 'Herramientas' },
  { key: 'ai',       label: 'IA & Automatización' },
  { key: 'other',    label: 'Otros' },
]

interface SkillCardProps {
  skill: Skill
}

const SkillCard = ({ skill }: SkillCardProps) => (
  <div className="flex flex-col items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 p-4 transition-colors hover:border-violet-700/50 hover:bg-zinc-800/50 cursor-default">
    <span className="text-3xl">{iconMap[skill.name] ?? <FaBrain className="text-violet-400" />}</span>
    <span className="text-center text-xs text-zinc-400">{skill.name}</span>
  </div>
)

interface SkillsSectionProps {
  skills: Skill[]
}

const SkillsSection = ({ skills, label }: SkillsSectionProps & { label: string }) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-sm font-medium text-violet-400">{label}</h3>
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
)

import { portfolioData } from '@/data/portfolio'

const Skills = () => {
  const { skills } = portfolioData

  return (
    <section id="skills" className="py-24 px-4 md:px-6">
      <div className="mx-auto max-w-5xl flex flex-col gap-12">

        {/* Título */}
        <div>
          <span className="text-sm font-medium text-violet-400">Lo que sé hacer</span>
          <h2 className="mt-2 text-3xl font-bold text-zinc-100 md:text-4xl">
            Skills
          </h2>
        </div>

        {/* Categorías */}
        {categories.map(({ key, label }) => {
          const filtered = skills.filter((s) => s.category === key)
          if (filtered.length === 0) return null
          return (
            <SkillsSection key={key} skills={filtered} label={label} />
          )
        })}

      </div>
    </section>
  )
}

export default Skills