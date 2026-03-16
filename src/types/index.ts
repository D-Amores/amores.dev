export interface SocialLink {
  platform: 'github' | 'linkedin' | 'instagram'
  url: string
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other' | 'ai'
  level?: 'beginner' | 'intermediate' | 'advanced'
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  images?: string[]
  featured?: boolean
}

export interface Profile {
  name: string
  role: string
  bio: string
  location?: string
  email?: string
  avatar?: string
  cvUrl?: string
  socials: SocialLink[]
}

export interface PortfolioData {
  profile: Profile
  skills: Skill[]
  projects: Project[]
}