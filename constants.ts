import { Project, Skill, ExperienceEntry } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'crypto-dashboard',
    title: 'Nexus Crypto Dashboard',
    shortDescription: 'A real-time cryptocurrency tracking dashboard with advanced charting.',
    fullDescription: 'Nexus is a high-performance dashboard designed for crypto enthusiasts. It features real-time price tracking using WebSocket connections, interactive charts powered by Recharts, and a portfolio management system. The UI is designed with a mobile-first approach, ensuring a seamless experience across all devices.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Recharts', 'WebSockets'],
    image: 'https://picsum.photos/seed/crypto/800/600',
    gallery: [
      'https://picsum.photos/seed/crypto1/800/400',
      'https://picsum.photos/seed/crypto2/800/400',
      'https://picsum.photos/seed/crypto3/800/400'
    ],
    demoUrl: '#',
    codeUrl: '#',
    date: '2023-11'
  },
  {
    id: 'ai-image-gen',
    title: 'Aura AI Generator',
    shortDescription: 'SaaS platform for generating images using stable diffusion models.',
    fullDescription: 'Aura allows users to generate stunning artwork using text prompts. It integrates with stable diffusion APIs and includes a credit system, user gallery, and high-resolution download options. Built with a focus on performance and accessibility.',
    tags: ['Next.js', 'Stripe', 'OpenAI API', 'Framer Motion'],
    image: 'https://picsum.photos/seed/aiart/800/600',
    gallery: [
      'https://picsum.photos/seed/aiart1/800/400',
      'https://picsum.photos/seed/aiart2/800/400'
    ],
    demoUrl: '#',
    codeUrl: '#',
    date: '2024-01'
  },
  {
    id: 'ecommerce-platform',
    title: 'LuxeCart E-Commerce',
    shortDescription: 'A modern, headless e-commerce solution for luxury brands.',
    fullDescription: 'LuxeCart transforms the shopping experience with smooth page transitions, instant search, and a streamlined checkout process. It features a custom cart implementation, wishlist functionality, and integration with a headless CMS for content management.',
    tags: ['React', 'Redux Toolkit', 'Node.js', 'PostgreSQL'],
    image: 'https://picsum.photos/seed/shop/800/600',
    gallery: [
      'https://picsum.photos/seed/shop1/800/400',
      'https://picsum.photos/seed/shop2/800/400'
    ],
    demoUrl: '#',
    codeUrl: '#',
    date: '2023-08'
  },
  {
    id: 'task-manager',
    title: 'FlowTask Pro',
    shortDescription: 'Collaborative task management tool for remote teams.',
    fullDescription: 'FlowTask Pro helps teams stay organized with Kanban boards, real-time updates, and team chat. It includes drag-and-drop interfaces and detailed analytics for sprint planning.',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    image: 'https://picsum.photos/seed/task/800/600',
    gallery: [
      'https://picsum.photos/seed/task1/800/400'
    ],
    demoUrl: '#',
    codeUrl: '#',
    date: '2023-05'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', icon: 'Atom', level: 95, category: 'Frontend' },
  { name: 'TypeScript', icon: 'FileCode', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'Palette', level: 95, category: 'Frontend' },
  { name: 'Next.js', icon: 'Zap', level: 85, category: 'Frontend' },
  { name: 'Node.js', icon: 'Server', level: 80, category: 'Backend' },
  { name: 'GraphQL', icon: 'Database', level: 75, category: 'Backend' },
  { name: 'Figma', icon: 'PenTool', level: 85, category: 'Tools' },
  { name: 'Git', icon: 'GitBranch', level: 90, category: 'Tools' },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Digiown | Best Digital Marketing Agency",
    role: "MERN Stack Developer Intern",
    type: "Part-time",
    duration: "Oct 2025 – Present · 3 mos",
    location: "Karachi, Sindh, Pakistan · Remote",
    description:
      "Contributed to a Next.js web project by implementing SEO enhancements such as meta tags and canonical tags, improving site responsiveness, and updating on-page content for better performance and user engagement.",
    logo: "D",
  },
];

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];