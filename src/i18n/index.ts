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
            principles: 'Principios & Patrones',
            other: 'Otros',
          },
        },
        projects: {
          tag: 'Lo que he construido',
          title: 'Proyectos',
          featured: 'Destacado',
          viewMore: 'Ver más',
          github: 'GitHub',
          viewProject: 'Ver en GitHub',
          back: 'Volver',
          about: 'Sobre el proyecto',
          items: {
            'email-mcp-agent': {
              title: 'MCP Server: Intelligent Email Agent',
              description: 'Ecosistema basado en el Model Context Protocol para la gestión autónoma de correo electrónico mediante LLMs.',
              longDescription: 'Desarrollé una implementación completa del protocolo MCP que actúa como puente entre LLMs (Gemini, DeepSeek, Ollama) y servicios de comunicación. El sistema incluye un servidor con herramientas personalizadas para listar, leer y redactar correos, y un cliente dinámico construido en Streamlit. Implementé una arquitectura que permite al modelo decidir qué herramienta usar según la intención del usuario, integrando inferencia tanto local como en la nube para un procesamiento de datos eficiente y privado.',
            },
            'project-2': {
              title: 'AI Talent Matcher: CV Analyzer',
              description: 'Herramienta de análisis automatizado de perfiles profesionales utilizando LangChain y procesamiento de lenguaje natural.',
              longDescription: 'Desarrollé una aplicación para optimizar procesos de reclutamiento mediante la extracción inteligente de datos. Utilicé LangChain para orquestar el modelo DeepSeek, permitiendo analizar archivos PDF y extraer automáticamente información clave como educación, habilidades técnicas y áreas de especialización. El sistema compara el perfil del candidato contra una descripción de puesto específica, generando un resumen ejecutivo y un porcentaje de afinidad basado en la relevancia de las competencias detectadas.',
            },
            'project-3': {
              title: 'SIAPE: Gestión de Agendas Institucionales',
              description: 'Sistema integral desarrollado para la Secretaría Anticorrupción y Buen Gobierno para la gestión de audiencias y eventos.',
              longDescription: 'Diseñamos y desplegamos una solución Full-Stack utilizando Laravel 8 y MySQL para digitalizar el control de agendas gubernamentales. Implementamos un sistema robusto de roles y permisos, seguridad avanzada y una interfaz dinámica con Bootstrap. Además, configuramos el entorno de producción en un servidor Debian 12 con Apache y automatizamos el envío de notificaciones y consultas en tiempo real mediante un Bot de Telegram integrado con tareas programadas (Cron).'
            },
            'project-4': {
              title: 'Kanan: Control de Activos Institucionales',
              description: 'Sistema integral para la gestión, control y trazabilidad de activos físicos y tecnológicos en entornos gubernamentales.',
              longDescription: 'Desarrollamos una plataforma robusta en la secretaria anticorrupción y buen gobierno, utilizando Laravel 12 y Docker (Sail) para reemplazar procesos manuales en Excel por un sistema automatizado de control de activos (hardware y mobiliario). Implementamos una arquitectura segura con MySQL en servidores Debian 12, permitiendo la asignación y el traspaso de bienes con mecanismos de no repudio. El sistema garantiza la trazabilidad total de los activos mediante una gestión de roles y permisos estrictamente controlada.'
            },
            'project-5': {
              title: 'AI Spam Detector: ML Classification',
              description: 'Sistema de detección de correo no deseado basado en modelos de aprendizaje supervisado y procesamiento de lenguaje natural.',
              longDescription: 'Desarrollé un detector de spam utilizando Python y Streamlit, entrenado con un dataset de 75,000 correos electrónicos etiquetados. Implementé un modelo de Regresión Logística para la clasificación de texto, integrando una funcionalidad que permite configurar dinámicamente el volumen de datos de entrenamiento desde la interfaz. El sistema permite cargar archivos de correo para realizar predicciones en tiempo real, demostrando capacidades en preprocesamiento de datos (NLP), entrenamiento de modelos y evaluación de precisión.'
            }
          }
        },
        contact: {
          tag: '¿Hablamos?',
          title: 'Contacto',
          bio: 'Hablemos de código (o de IA).\n\nActualmente estoy en el norte de México, listo para sumarme a retos que unan el desarrollo de software con agentes inteligentes. Estoy disponible para proyectos freelance, colaboraciones o simplemente para platicar sobre tecnología. ¡No dudes en escribirme para que platiquemos!',
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
            principles: 'Principles & Patterns',
            other: 'Other',
          },
        },
        projects: {
          tag: 'What I have built',
          title: 'Projects',
          featured: 'Featured',
          viewMore: 'View more',
          github: 'GitHub',
          viewProject: 'View in GitHub',
          back: 'Back',
          about: 'About the project',
          items: {
            'email-mcp-agent': {
              title: 'MCP Server: Intelligent Email Agent',
              description: 'A Model Context Protocol implementation for autonomous email management using multi-LLM orchestration.',
              longDescription: 'I built a full-stack MCP ecosystem that enables LLMs to interact directly with email services. The project features a custom MCP Server with specialized tools and prompts, integrated with a Streamlit-based chatbot. I implemented a multi-model architecture supporting Gemini, DeepSeek, and local inference via Ollama. This project demonstrates my ability to build agentic workflows where the AI moves beyond chat to execute real-world actions like summarizing, filtering, and sending professional communications.',
            },
            'project-2': {
              title: 'AI Talent Matcher: CV Analyzer',
              descriptionEn: 'AI-powered recruitment tool for resume screening and job matching using LangChain.',
              longDescriptionEn: 'I developed a recruitment automation tool that leverages LangChain to orchestrate DeepSeek for information extraction from PDF resumes. The system identifies key data points such as education and professional skills, comparing them against specific job descriptions. It generates an executive summary and a compatibility score, showcasing my ability to handle unstructured data and transform it into actionable insights using NLP.'
            },
            'project-3': {
              title: 'SIAPE: Institutional Agenda Management',
              description: 'Institutional agenda management system developed for the Anti-Corruption and Good Governance Secretariat.',
              longDescription: 'We designed and deployed a Full-Stack solution using Laravel 8 and MySQL to digitize government event tracking. We implemented a robust role-based access control (RBAC), advanced security measures, and a dynamic interface. We also managed the production environment on a Debian 12 server with Apache and automated daily notifications and real-time event queries through a Telegram Bot integrated with Cron jobs.'
            },
            'project-4': {
              title: 'Kanan: Institutional Asset Management',
              description: 'A comprehensive system for managing, controlling, and tracking physical and technological assets in government environments.',
              longDescription: 'We developed a robust platform in the anti-corruption and good governance secretariat using Laravel 12 and Docker (Sail) to replace legacy Excel-based processes with an automated asset tracking system. We implemented a secure architecture with MySQL on Debian 12 servers, enabling asset assignments and transfers with non-repudiation mechanisms. The system ensures full traceability of government property through strictly controlled role-based access and advanced security measures.'
            },
            'project-5': {
              title: 'AI Spam Detector: ML Classification',
              description: 'Spam detection system based on supervised learning models and natural language processing.',
              longDescription: 'I developed a spam detector using Python and Streamlit, trained on a dataset of 75,000 labeled emails. I implemented a Logistic Regression model for text classification, including a feature to dynamically configure the training data volume through the UI. The system enables real-time email uploads for accurate predictions, showcasing skills in data preprocessing (NLP), model training, and performance evaluation.'
            }
          }
        },
        contact: {
          tag: "Let's talk?",
          title: 'Contact',
          bio: "Let's talk code (or AI).\n\nI'm currently based in Northern Mexico, ready to jump into challenges that combine software development with intelligent agents. I'm available for freelance projects, collaborations, or just to chat about tech. Don't hesitate to reach out!",
          email: 'Email',
          location: 'Location',
          socials: 'Social media',
        },
      },
    },
  },
})

export default i18n