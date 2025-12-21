export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  image: string;
  gallery: string[];
  demoUrl?: string;
  codeUrl?: string;
  date: string;
}

export interface Skill {
  name: string;
  icon: string; // lucide icon name or simple string identifier
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools';
}

export interface ExperienceEntry {
  company: string;
  role: string;
  type: string;
  duration: string;
  location: string;
  description: string;
  logo: string;
}

export interface NavItem {
  label: string;
  path: string;
}