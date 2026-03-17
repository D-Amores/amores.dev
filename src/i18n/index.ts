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
          bio: 'Apasionado por construir experiencias digitales elegantes y funcionales. Me especializo en React, Laravel, FastAPI y soluciones con IA.',
          location: 'Ramos Arizpe, Coahuila',
          contact: 'Contáctame',
        },
        skills: {
          tag: 'Lo que sé hacer',
          title: 'Skills',
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
          bio: 'Passionate about building elegant and functional digital experiences. I specialize in React, Laravel, FastAPI and AI solutions.',
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