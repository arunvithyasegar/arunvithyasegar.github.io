export interface Skill {
  title: string;
  competency: number;
  category: string[];
}
export interface Category {
  name: string;
}
const skills: Skill[] = [
  {
    title: 'SQL',
    competency: 4,
    category: ['Data & tools'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Data & tools'],
  },
  {
    title: 'Power BI',
    competency: 4,
    category: ['Data & tools'],
  },
  {
    title: 'Excel',
    competency: 4,
    category: ['Data & tools'],
  },
  {
    title: 'Data Analysis',
    competency: 4,
    category: ['Business analysis'],
  },
  {
    title: 'Process Improvement',
    competency: 4,
    category: ['Business analysis'],
  },
  {
    title: 'Requirements Gathering',
    competency: 4,
    category: ['Business analysis'],
  },
  {
    title: 'Stakeholder Mgmt',
    competency: 4,
    category: ['Business analysis'],
  },
  {
    title: 'NumPy',
    competency: 4,
    category: ['Data & tools'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data & tools'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Data & tools'],
  },
  {
    title: 'Seaborn',
    competency: 4,
    category: ['Data & tools'],
  },
  {
    title: 'Plotly',
    competency: 4,
    category: ['Data & tools'],
  },
];
const categories: Category[] = [
  { name: 'Data & tools' },
  { name: 'Business analysis' },
];

export { categories, skills };
