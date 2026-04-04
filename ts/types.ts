// Type definitions for Portfolio application

export interface Image {
  img_path: string;
  caption: string;
}

export interface SocialLink {
  label: string;
  url: string;
  svg_path: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  url: string;
  start_date: string;
  end_date: string;
  summary: string;
  highlights: string[];
}

export interface Project {
  title: string;
  summary: string;
  url: string;
  highlights: string[];
  images: Image[];
  tags?: string[];
  category?: string;
}

export interface VolunteerExperience {
  organization: string;
  position: string;
  url: string;
  start_date: string;
  end_date: string;
  summary: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  location: string;
  url: string;
  degrees: string[];
  honors: string[];
  gpa_cumulative: string;
  gpa_major: string;
  graduation_date: string;
}

export interface Skill {
  name: string;
  proficiency: number;
  proficiency_label: string;
  category?: string;
}

export interface Interest {
  name: string;
  summary: string;
  images: Image[];
}

export interface Language {
  language: string;
  fluency: string;
}

export interface Reference {
  name: string;
  relation: string;
  reference: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
}

export interface PortfolioData {
  name: string;
  label: string;
  image_path: string;
  contact: Contact;
  summary: string;
  base_url: string;
  social_links: SocialLink[];
  work_experience: WorkExperience[];
  projects: Project[];
  volunteer_experience: VolunteerExperience[];
  education: Education[];
  skills: Skill[];
  interests: Interest[];
  languages: Language[];
  references: Reference[];
}

export interface GitHubStats {
  repos: number;
  stars: number;
  forks: number;
  commits: number;
}

export interface PersonalStats {
  currentAge: string;
  location: string;
  languages: string;
  countriesVisited: number;
  pendingBucketlistCountries: number;
}

export interface ProfessionalStats {
  yearsOfExperience: string;
  projectsCompleted: string;
  sqlQueriesWritten: string;
  dashboardsCreated: string;
  dataPointsAnalyzed: string;
}

export type PageType = 'home' | 'about' | 'resume' | 'projects' | 'stats' | 'contact';

export interface FilterOptions {
  category?: string;
  tags?: string[];
  searchQuery?: string;
}
