import type { PortfolioData } from '../types'

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Tu Nombre',
    role: 'Full Stack Developer',
    bio: 'Apasionado por construir experiencias digitales elegantes y funcionales. Me especializo en React, Node.js y todo lo que huela a JavaScript.',
    location: 'Monterrey, México',
    email: 'tu@email.com',
    cvUrl: '/cv.pdf',
    socials: [
      {
        platform: 'github',
        url: 'https://github.com/tuusuario',
      },
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/tuusuario',
      },
      {
        platform: 'instagram',
        url: 'https://instagram.com/tuusuario',
      },
    ],
  },
  skills: [
    { name: 'React', category: 'frontend', level: 'advanced' },
    { name: 'TypeScript', category: 'frontend', level: 'advanced' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'advanced' },
    { name: 'Node.js', category: 'backend', level: 'intermediate' },
    { name: 'Express', category: 'backend', level: 'intermediate' },
    { name: 'PostgreSQL', category: 'backend', level: 'intermediate' },
    { name: 'Git', category: 'tools', level: 'advanced' },
    { name: 'Docker', category: 'tools', level: 'beginner' },
    { name: 'Figma', category: 'tools', level: 'intermediate' },
  ],
  projects: [
    {
      id: 'project-1',
      title: 'E-Commerce App',
      description: 'Tienda online con carrito, pagos y panel de administración.',
      longDescription: 'Descripción larga del proyecto, tecnologías usadas, retos y soluciones...',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com/tuusuario/ecommerce',
      liveUrl: 'https://ecommerce.tudominio.com',
      featured: true,
    },
    {
      id: 'project-2',
      title: 'Task Manager',
      description: 'App de gestión de tareas con drag & drop y colaboración en tiempo real.',
      longDescription: 'Descripción larga...',
      tags: ['React', 'Socket.io', 'MongoDB'],
      githubUrl: 'https://github.com/tuusuario/tasks',
      featured: true,
    },
    {
      id: 'project-3',
      title: 'Weather Dashboard',
      description: 'Dashboard del clima con geolocalización y pronóstico de 7 días.',
      longDescription: 'Descripción larga...',
      tags: ['React', 'TypeScript', 'API REST'],
      githubUrl: 'https://github.com/tuusuario/weather',
      liveUrl: 'https://weather.tudominio.com',
      featured: false,
    },
    {
      id: 'project-4',
      title: 'Dev Blog',
      description: 'Blog personal con MDX, modo oscuro y búsqueda de artículos.',
      longDescription: 'Descripción larga...',
      tags: ['Next.js', 'MDX', 'Tailwind'],
      githubUrl: 'https://github.com/tuusuario/blog',
      featured: false,
    },
  ],
}