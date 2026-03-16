import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { portfolioData } from '@/data/portfolio'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const project = portfolioData.projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-zinc-400">Proyecto no encontrado.</p>
        <Button
          className="bg-violet-700 hover:bg-violet-800 text-white cursor-pointer"
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={16} className="mr-2" />
          Volver al inicio
        </Button>
      </div>
    )
  }

  const images = project.images?.length ? project.images : project.image ? [project.image] : []

  return (
    <div className="min-h-screen px-4 py-24 md:px-6">
      <div className="mx-auto max-w-4xl flex flex-col gap-10">

        {/* Botón volver */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer w-fit"
        >
          <ArrowLeft size={16} />
          Volver
        </button>

        {/* Header */}
        <div className="flex flex-col gap-4">
          {project.featured && (
            <Badge className="w-fit bg-violet-700/20 text-violet-400 border-violet-700/30 hover:bg-violet-700/20">
              Destacado
            </Badge>
          )}
          <h1 className="text-4xl font-bold text-zinc-100 md:text-5xl">
            {project.title}
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-zinc-700 text-zinc-400"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Botón GitHub */}
          {project.githubUrl && (
            <Button
              asChild
              className="w-fit bg-violet-700 hover:bg-violet-800 text-white cursor-pointer"
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Ver en GitHub
              </a>
            </Button>
          )}
        </div>

        {/* Carousel de imágenes */}
        {images.length > 0 && (
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {images.map((img, i) => (
                <CarouselItem key={i}>
                  <div className="h-64 w-full overflow-hidden rounded-xl bg-zinc-800 md:h-96">
                    {img ? (
                      <img
                        src={img}
                        alt={`${project.title} - imagen ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-zinc-600 text-sm">Sin imagen</span>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 -left-4" />
            <CarouselNext className="border-zinc-700 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 -right-4" />
          </Carousel>
        )}

        {/* Descripción larga */}
        {project.longDescription && (
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-100">Sobre el proyecto</h2>
            <p className="text-zinc-400 leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        )}

      </div>
    </div>
  )
}

export default ProjectDetail