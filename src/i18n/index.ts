import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
  resources: {
    es: {
      translation: {
        nav: {
          about: 'Sobre mí',
          skills: 'Habilidades',
          projects: 'Proyectos',
          contact: 'Contacto',
          cv: 'Descargar CV',
        },
        hero: {
          greeting: 'Hola, mi nombre es',
          bio: 'Apasionado por la lógica del software. Mi meta actual es dejar de escribir programas que solo siguen instrucciones fijas y empezar a construir sistemas que usen agentes de IA para resolver problemas de forma dinámica.',
          roles: ['Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'AI Developer'],
          viewProjects: 'Ver proyectos',
          downloadCv: 'Descargar CV',
        },
        about: {
          tag: 'Conóceme',
          title: 'Sobre mí',
          bio: 'Carlos Daniel Amores Hernández | 22 años\n\nSoy originario de Chiapas y actualmente resido en Ramos Arizpe, Coahuila. Soy egresado de la Licenciatura en Ingeniería en Desarrollo y Tecnología de Software por la UNACH (actualmente con título y cédula en trámite).\n\nMi formación académica me ha permitido construir una base sólida en la lógica de programación y el ciclo de vida del software. Mi enfoque actual es la IA Agéntica, donde busco integrar agentes inteligentes en sistemas tradicionales para crear soluciones que no solo sigan reglas fijas, sino que operen de manera dinámica.\n\nMe considero un desarrollador práctico que disfruta el proceso de aprendizaje y la implementación de nuevas tecnologías para resolver problemas reales.',
          location: 'Ramos Arizpe, Coahuila',
          contact: 'Contáctame',
        },
        skills: {
          tag: 'Lo que sé hacer',
          title: 'Habilidades',
          categories: {
            frontend: 'Frontend',
            backend: 'Backend',
            tools: 'Herramientas',
            ai: 'IA & Automatización',
            other: 'Otros',
          },
        },
        projects: {
          tag: 'Lo que he construido',
          title: 'Proyectos',
          featured: 'Destacado',
          viewMore: 'Ver más',
          github: 'GitHub',
          back: 'Volver',
          about: 'Sobre el proyecto',
        },
        contact: {
          tag: '¿Hablamos?',
          title: 'Contacto',
          bio: 'Estoy disponible para proyectos freelance, colaboraciones o simplemente para platicar sobre tecnología. ¡No dudes en escribirme!',
          email: 'Email',
          location: 'Ubicación',
          socials: 'Redes sociales',
        },
      },
    },
    en: {
      translation: {
        nav: {
          about: 'About',
          skills: 'Skills',
          projects: 'Projects',
          contact: 'Contact',
          cv: 'Download CV',
        },
        hero: {
          greeting: 'Hi, my name is',
          bio: 'Passionate about software logic. My current goal is to move beyond programs that only follow fixed instructions and start building systems that leverage AI agents to solve problems dynamically.',
          roles: ['Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'AI Developer'],
          viewProjects: 'View projects',
          downloadCv: 'Download CV',
        },
        about: {
          tag: 'Get to know me',
          title: 'About me',
          bio: 'Carlos Daniel Amores Hernández | 22 years old\n\nOriginally from Chiapas, I am currently based in Ramos Arizpe, Coahuila. I am a graduate of the B.S. in Software Development and Technology from UNACH (Degree currently in progress).\n\nMy academic background has allowed me to build a solid foundation in programming logic and the software development lifecycle. My current focus is Agentic AI, where I aim to integrate intelligent agents into traditional systems to create solutions that don\'t just follow fixed rules but operate dynamically.\n\nI consider myself a practical developer who enjoys the learning process and the implementation of new technologies to solve real-world problems.',
          location: 'Ramos Arizpe, Coahuila',
          contact: 'Contact me',
        },
        skills: {
          tag: 'What I can do',
          title: 'Skills',
          categories: {
            frontend: 'Frontend',
            backend: 'Backend',
            tools: 'Tools',
            ai: 'AI & Automation',
            other: 'Other',
          },
        },
        projects: {
          tag: 'What I have built',
          title: 'Projects',
          featured: 'Featured',
          viewMore: 'View more',
          github: 'GitHub',
          back: 'Back',
          about: 'About the project',
        },
        contact: {
          tag: "Let's talk?",
          title: 'Contact',
          bio: 'I am available for freelance projects, collaborations or just to talk about technology. Feel free to write me!',
          email: 'Email',
          location: 'Location',
          socials: 'Social media',
        },
      },
    },
  },
})

export default i18n