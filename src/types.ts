export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  linkedin: string;
  profileImage: string;
  experiences: Experience[];
  skills: Skill[];
  education: Education[];
  awards: Award[];
}
