export type SkillCategory =
  | "Languages"
  | "Front-End"
  | "Back-End"
  | "Data Engineering"
  | "Cloud & AI"
  | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  bullets: string[];
  skillsUsed?: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  code?: string;
  category?: "Software & Cloud" | "AI & Claude" | "Professional";
}

export interface TelemetryMetric {
  value: string;
  label: string;
  sublabel?: string;
  metric?: string;
  labelEn?: string;
  labelAr?: string;
}

export interface PipelineNode {
  id: string;
  stepNumber: string;
  stepName: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
  details?: string[];
  step?: string;
  categoryEn?: string;
  categoryAr?: string;
  nameEn?: string;
  nameAr?: string;
  descriptionEn?: string;
  descriptionAr?: string;
  metricEn?: string;
  metricAr?: string;
  icon?: string;
}

export interface SpecializationPillar {
  id: string;
  pillarNumber: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  technologies: string[];
  iconName: string;
  titleEn?: string;
  titleAr?: string;
  subtitleEn?: string;
  subtitleAr?: string;
  descriptionEn?: string;
  descriptionAr?: string;
  tags?: string[];
  accentColor?: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Frontend" | "Full-Stack" | "Data & AI" | "Web Design" | "Distributed Backend" | "High Performance Web" | "Sports Telemetry" | string;
  skills: string[];
  link?: string;
  github?: string;
  badge?: string;
  role?: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  category: "Full-Stack" | "Data Engineering" | "Python & Architecture" | "AI & Cloud";
  description: string;
  deliverables: string[];
  techStack: string[];
  icon: string;
}

export interface Profile {
  name: string;
  alias?: string;
  role: string;
  mission: string;
  focus: string[];
  bio: string;
  heroBio?: string;
  phone?: string;
  email?: string;
  location?: string;
  portfolioUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}
