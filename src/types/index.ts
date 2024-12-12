export interface Project {
  title: string;
  company: string;
  period: string;
  description: string;
  image: string;
  tech: string[];
  achievements: string[];
}

export interface Skill {
  category: string;
  icon: any; // Using any for Lucide icons
  items: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}