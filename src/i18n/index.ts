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
          bio: 'Me apasiona la lógica del software, pero no me conformo con programas que solo siguen instrucciones fijas. Estoy fusionando mis bases en Full Stack con el poder de la IA Agéntica para que el código deje de ser un espectador y se convierta en un aliado. Menos procesos cuadrados, más soluciones inteligentes que realmente le faciliten la vida a la gente.',
          roles: ['Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'AI Developer'],
          viewProjects: 'Ver proyectos',
          downloadCv: 'Descargar CV',
        },
        about: {
          tag: 'Conóceme',
          title: 'Sobre mí',
          bio: 'Carlos Daniel Amores Hernández | 22 años\n\nSi solo yo entiendo mi código, entonces no hice un buen trabajo. Me obsesiona escribir software escalable, limpio y claro, que no dé dolores de cabeza al siguiente programador que lo abra.\n\nEstoy fusionando Full Stack con IA Agéntica para poder crear sistemas dinámicos que tengan criterio propio en lugar de seguir una receta fija. Busco construir soluciones que ayuden de verdad.\n\nSé que no lo sé todo y no pretendo ser perfecto; por eso la documentación y las mejores prácticas son mis mejores aliadas para aprender algo nuevo cada día. \n\nNo pierdo tiempo reinventando soluciones que ya están resueltas; prefiero aprovechar herramientas y estándares existentes para enfocarme en lo que aporta valor real: tecnología sólida que funcione y sea un aliado real para los usuarios.',
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
              longDescription: 'Desarrollé una implementación completa del protocolo MCP que actúa como puente entre modelos como Gemini, DeepSeek u Ollama y servicios de comunicación reales. El sistema incluye un servidor con herramientas personalizadas para listar, leer y redactar correos, junto a un cliente dinámico construido en Streamlit para una interacción fluida.\n\nMi enfoque fue diseñar una arquitectura que permita al modelo decidir qué herramienta usar según la intención del usuario, fusionando lógica tradicional con autonomía agéntica. Implementé una estructura de inferencia híbrida (local y nube) para garantizar un procesamiento de datos eficiente, privado y, sobre todo, escalable. Es tecnología pensada para que el software deje de ser una herramienta rígida y se convierta en un aliado inteligente.',
            },
            'cv_analyzer': {
              title: 'AI Talent Matcher: CV Analyzer',
              description: 'Herramienta de análisis automatizado de perfiles profesionales utilizando LangChain y procesamiento de lenguaje natural.',
              longDescription: 'Desarrollé una herramienta diseñada para optimizar los procesos de reclutamiento utilizando Procesamiento de Lenguaje Natural (NLP). Utilicé LangChain para orquestar el modelo DeepSeek, permitiendo analizar archivos PDF y extraer automáticamente información crítica, desde habilidades técnicas hasta áreas de especialización.\n\nEl sistema no solo lee datos; compara el perfil del candidato contra una descripción de puesto específica para generar un resumen ejecutivo y un porcentaje de afinidad. Mi enfoque fue crear una arquitectura que transforme datos no estructurados en decisiones claras.',
            },
            'kanan': {
              title: 'Kanan: Control de Activos Institucionales',
              description: 'Sistema integral para la gestión, control y trazabilidad de activos físicos y tecnológicos en entornos gubernamentales.',
              longDescription: 'Secretaría Anticorrupción y Buen Gobierno\n\nDesarrollamos Kanan para transformar un proceso crítico que se realizaba de forma manual en una institución pública. Antes, el control de activos (laptops, modelos, bajas) dependía de registros físicos propensos a errores; nosotros digitalizamos ese flujo por completo. Implementamos un sistema de Control de Acceso Basado en Roles (RBAC), asegurando que cada usuario interactúe solo con los apartados que le corresponden.\n\nEl sistema cuenta con un CRUD completo para gestionar categorías, marcas, bienes y personal, además de una interfaz para que los empleados consulten sus propios activos asignados. Diseñamos un módulo de asignación y traspaso con trazabilidad total, el cual genera comprobantes en PDF para garantizar el "no repudio" en cada movimiento administrativo.\n\nEn la parte técnica, utilizamos Laravel 12 con PHP, JavaScript y Bootstrap. Orquestamos el entorno de desarrollo con Docker (Sail) para asegurar la paridad con el servidor de producción, diseñamos una base de datos MySQL robusta y realizamos el despliegue final sobre servidores Linux (Debian 12). Nuestro enfoque fue entregar una herramienta profesional, escalable y lista para operar en un entorno real.'
            },
            'agenda': {
              title: 'Gestión de Agendas Institucionales',
              description: 'Agenda Institucional: Sistema integral para la gestión de audiencias y eventos en el sector público.',
              longDescription: 'Secretaría Anticorrupción y Buen Gobierno\n\nDesarrollamos una Agenda Institucional diseñada para organizar y agilizar la gestión de eventos y audiencias dentro de una institución pública. El sistema permite a los empleados gestionar sus compromisos mediante un CRUD completo, integrando calendarios interactivos y gráficas de datos para una visualización clara y rápida de las actividades diarias.\n\nEl diferencial técnico de este proyecto fue la integración de un Bot de Telegram y tareas programadas (Cron Jobs) en el servidor. Esto permite que los usuarios reciban su agenda del día directamente en su celular, garantizando que la información importante llegue a tiempo de forma automatizada y sin depender únicamente de la plataforma web.\n\nPara el desarrollo utilizamos Laravel 8 con PHP y MySQL, diseñando una base de datos relacional desde cero. El despliegue se realizó en servidores Linux (Debian 12) usando Apache con rutas amigables y dominios institucionales, logrando una herramienta funcional y segura que se puso en producción con éxito para facilitar el flujo de trabajo en la secretaría.'
            },
            'rag-agent': {
              title: 'Sistema RAG Agéntico',
              description: 'Orquestación de IA Agéntica: Sistema RAG para procesamiento de documentos y consultas inteligentes.',
              longDescription: 'Desarrollé un sistema de Generación Aumentada por Recuperación (RAG) utilizando n8n para orquestar flujos de trabajo inteligentes de principio a fin. El sistema permite cargar archivos PDF, los cuales son procesados y convertidos en vectores almacenados en una base de datos PostgreSQL. Utilicé los modelos de OpenAI para la vectorización e inserción de datos, asegurando una recuperación de información precisa y eficiente.\n\nEl diferencial técnico de este proyecto es el uso de un Agente de IA con capacidad de decisión. El agente evalúa las consultas del usuario en tiempo real para determinar cuándo es necesario consultar la base de vectores mediante OpenAI, mientras que la generación final de las respuestas se delega a la API de DeepSeek. Esta arquitectura híbrida permite aprovechar la potencia de diferentes modelos según la etapa del proceso.'
            }
          }
        },
        contact: {
          tag: '¿Hablamos?',
          title: 'Contacto',
          bio: 'Hablemos de código sólido, desarrollo Full Stack o de IA Agéntica.\n\nBusco retos que necesiten desde un software tradicional bien hecho hasta la integración de sistemas inteligentes que aporten valor real. Estoy disponible para proyectos freelance, colaboraciones o simplemente para platicar sobre tecnología y mejores prácticas.\n\n¡Escríbeme y hagamos que las ideas funcionen de verdad!',
          email: 'Email',
          phone: 'Teléfono',
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
          bio: 'I’m obsessed with software logic, but I don’t settle for programs that just follow fixed instructions. I’m blending my Full Stack foundations with Agentic AI to turn code from a spectator into a proactive ally. Less rigid logic, more intelligent solutions that actually solve real-world problems.',
          roles: ['Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'AI Developer'],
          viewProjects: 'View projects',
          downloadCv: 'Download CV',
        },
        about: {
          tag: 'Get to know me',
          title: 'About me',
          bio: 'Carlos Daniel Amores Hernández | 22 years old\n\nIf I’m the only one who understands my code, then I’ve failed. I’m obsessed with writing clean, scalable, and clear software that doesn’t give the next developer a headache.\n\nI’m blending Full Stack with Agentic AI to be able to create dynamic systems with judgment instead of just following a fixed recipe. I build solutions that truly help.\n\nI don’t know everything and I don’t claim to be perfect; that’s why documentation and best practices are my best allies for learning something new every day.\n\nI don’t waste time reinventing the wheel; I leverage existing standards to focus on what adds real value: solid technology that works and acts as a true ally for its users.',
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
              longDescription: 'I developed a full implementation of the MCP protocol that acts as a bridge between LLMs like Gemini, DeepSeek, or Ollama and real-world communication services. The system includes a server with custom tools for listing, reading, and writing emails, paired with a dynamic Streamlit client for seamless interaction.\n\nMy focus was on designing an architecture that allows the model to decide which tool to use based on user intent, blending traditional logic with agentic autonomy. I implemented a hybrid inference structure (local and cloud) to ensure efficient, private, and—most importantly—scalable data processing. It’s technology designed to move software away from being a rigid tool and into a smart ally',
            },
            'cv_analyzer': {
              title: 'AI Talent Matcher: CV Analyzer',
              descriptionEn: 'AI-powered recruitment tool for resume screening and job matching using LangChain.',
              longDescriptionEn: "I developed a tool designed to streamline recruitment processes using Natural Language Processing (NLP). I used LangChain to orchestrate the DeepSeek model, allowing for the analysis of PDF files and the automatic extraction of critical information, from technical skills to areas of expertise.\n\nThe system does more than just read data; it compares the candidate's profile against a specific job description to generate an executive summary and a match percentage. My focus was on creating an architecture that transforms unstructured data into clear insights."
            },
            'kanan': {
              title: 'Kanan: Institutional Asset Management',
              description: 'A comprehensive system for managing, controlling, and tracking physical and technological assets in government environments.',
              longDescription: 'Secretariat for Anti-Corruption and Good Governance\n\nWe developed Kanan to transform a critical manual process within a public institution. Previously, asset control (laptops, models, decommissioning) relied on physical records prone to error; we fully digitized this workflow. We implemented a Role-Based Access Control (RBAC) system, ensuring that each user only interacts with their authorized sections.\n\nThe system features a full CRUD for managing categories, brands, assets, and personnel, along with an interface for employees to view their assigned items. We designed an assignment and transfer module with full traceability, generating PDF receipts to ensure non-repudiation for every administrative movement.\n\nTechnically, we used Laravel 12 with PHP, JavaScript, and Bootstrap. We orchestrated the development environment with Docker (Sail) to ensure parity with production, designed a robust MySQL database, and completed the final deployment on Linux servers (Debian 12). Our focus was to deliver a professional, scalable tool ready for real-world operations.'
            },
            'agenda': {
              title: 'Institutional Agenda Management',
              description: 'Institutional Agenda: Comprehensive system for managing hearings and events in the public sector.',
              longDescription: "Secretariat for Anti-Corruption and Good Governance\n\nWe developed an Institutional Agenda to organize and streamline the management of events and hearings within a public institution. The system allows employees to manage their commitments through a full CRUD, integrating interactive calendars and data charts for a clear and quick visualization of daily activities.\n\nThe technical standout of this project was the integration of a Telegram Bot and scheduled tasks (Cron Jobs) on the server. This allows users to receive their daily agenda directly on their phones, ensuring that important information arrives automatically and on time without relying solely on the web platform.\n\nWe used Laravel 8 with PHP and MySQL for development, designing a relational database from scratch. The deployment was carried out on Linux (Debian 12) servers using Apache with SEO-friendly URLs and institutional domains, delivering a functional and secure tool that was successfully launched to improve the secretariat's workflow."
            },
            'rag-agent': {
              title: 'Agentic RAG System',
              description: 'Agentic AI Orchestration: RAG System for document processing and intelligent queries.',
              longDescription: 'I developed a Retrieval-Augmented Generation (RAG) system using n8n to orchestrate end-to-end intelligent workflows. The system allows for PDF file uploads, which are processed and converted into vectors stored in a PostgreSQL database. I utilized OpenAI models for data vectorization and insertion, ensuring accurate and efficient information retrieval.\n\nThe technical standout of this project is the use of an AI Agent with decision-making capabilities. The agent evaluates user queries in real-time to determine when it is necessary to query the vector database via OpenAI, while the final response generation is delegated to the DeepSeek API. This hybrid architecture leverages the strengths of different models depending on the stage of the process.'
            }
          }
        },
        contact: {
          tag: "Let's talk?",
          title: 'Contact',
          bio: "Let’s talk about solid code, Full Stack development, or Agentic AI.\n\nI’m looking for challenges that range from well-built traditional software to the integration of intelligent systems that add real value. I’m available for freelance projects, collaborations, or just to chat about tech and best practices.\n\nReach out and let’s make things actually work!",
          email: 'Email',
          phone: 'Phone',
          location: 'Location',
          socials: 'Social media',
        },
      },
    },
  },
})

export default i18n