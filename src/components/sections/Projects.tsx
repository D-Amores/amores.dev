import { Github, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { portfolioData } from '@/data/portfolio'
import type { Project } from '@/types'
import FadeIn from '../ui/FadeIn'

const ProjectCard = ({ project }: { project: Project }) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden h-full transition-colors hover:border-violet-700/50">

      {/* Imagen */}
      <div className="h-44 w-full bg-zinc-800 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-zinc-600 text-sm">Sin imagen</span>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-3 p-4 flex-1">

        {/* Featured badge */}
        {project.featured && (
          <Badge className="w-fit bg-violet-700/20 text-violet-400 border-violet-700/30 hover:bg-violet-700/20">
            Destacado
          </Badge>
        )}

        {/* Título */}
        <h3 className="font-semibold text-zinc-100">{project.title}</h3>

        {/* Descripción */}
        <p className="text-sm text-zinc-400 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-zinc-700 text-zinc-400 text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Botones */}
        <div className="flex gap-2 mt-auto pt-2">
          {project.githubUrl && (
            <Button
              asChild
              size="sm"
              className="bg-violet-700 hover:bg-violet-800 text-white cursor-pointer"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={14} className="mr-1" />
                GitHub
              </a>
            </Button>
          )}
          <Button
            size="sm"
            variant="outline"
            className="border-zinc-700 bg-transparent text-zinc-300 hover:bg-zinc-800 cursor-pointer"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            Ver más
            <ArrowRight size={14} className="ml-1" />
          </Button>
        </div>

      </div>
    </div>
  )
}

const Projects = () => {
  const { projects } = portfolioData

  return (
    <section id="projects" className="py-24 px-4 md:px-6 md:min-h-screen md:flex md:items-center">
      <div className="mx-auto max-w-5xl flex flex-col gap-12">

        {/* Título */}
        <FadeIn>
          <div>
            <span className="text-sm font-medium text-violet-400">Lo que he construido</span>
            <h2 className="mt-2 text-3xl font-bold text-zinc-100 md:text-4xl">
              Proyectos
            </h2>
          </div>
        </FadeIn>

        {/* Carousel */}
        <FadeIn delay={0.2}>
          <Carousel
            opts={{ align: 'start', loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 -left-4" />
            <CarouselNext className="border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 -right-4" />
          </Carousel>
        </FadeIn>

      </div>
    </section>
  )
}

export default Projects