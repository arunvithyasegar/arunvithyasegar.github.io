export type ProjectStatus = 'shipped' | 'archive';
export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  sourceWork?: string;
  image?: string;
  date: string;
  yearOnly?: boolean;
  endDate?: string;
  ongoing?: boolean;
  desc: string;
  tech?: string[];
  status: ProjectStatus;
  dashboard?: string;
}
const data: Project[] = [
  {
    title: 'News Sentiment Analysis using NLP',
    date: '',
    desc: 'This project analyzes sentiment trends in news articles to\n                evaluate public perception and media tone on various topics. It\n                uses the News API to fetch headlines in real time, processes\n                text with NLP (TextBlob), and classifies sentiment (positive,\n                negative, neutral). Results are visualized through time-series\n                plots and word clouds.',
    tech: [
      'Python',
      'NLP',
      'TextBlob',
      'Web Scraping',
      'News API',
      'Matplotlib',
      'WordCloud',
    ],
    status: 'shipped',
    link: 'https://github.com/arunvithyasegar/News_sentiment_Analysis',
    dashboard: 'https://newssentimentanalysis.streamlit.app/',
  },
  {
    title: 'UN Trade Data Analysis (HS Code 85 – Electrical Machinery)',
    date: '',
    desc: "Analytical dashboard exploring India's export trends in HS Code\n                85 (Electrical Machinery and Equipment) from 2016 to 2024.\n                Includes data extraction from UN Comtrade, cleaning, trend\n                analysis, volatility categorization, and country-wise insights\n                for strategic trade policy and investment research.",
    tech: [
      'Python',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Excel',
      'UN Comtrade API',
    ],
    status: 'shipped',
    link: 'https://github.com/arunvithyasegar/UN_Trade',
    dashboard: 'https://electronictradedashboard.streamlit.app/',
  },
  {
    title: 'Agricultural Market Price Prediction',
    date: '2024-01-01',
    yearOnly: true,
    desc: 'Personal Project • 2024 Built a machine learning model to predict agricultural commodity\n                prices using historical data, weather patterns, and economic\n                indicators with 85% accuracy.',
    tech: ['Python', 'Scikit-learn', 'Time Series', 'XGBoost'],
    status: 'shipped',
  },
  {
    title: 'Farm Management Dashboard',
    date: '2024-01-01',
    yearOnly: true,
    desc: 'Freelance Project • 2024 Developed a Power BI dashboard for tracking farm inputs,\n                outputs, and profitability metrics, helping farmers optimize\n                resource allocation and increase yields.',
    tech: ['Power BI', 'SQL', 'DAX', 'Data Modeling'],
    status: 'shipped',
  },
  {
    title: 'Global Rice Production Analysis',
    date: '2023-01-01',
    yearOnly: true,
    desc: 'Kaggle • 2023 Analyzed 50,000+ records of rice production trends across\n                countries from 1961 to 2021, identifying key patterns in\n                production, yield, and area harvested.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Data Visualization'],
    status: 'archive',
    link: 'https://www.kaggle.com/code/arunvithyasegar/rice-production-by-country-from-1961-to-2021',
  },
  {
    title: 'Crop Production Statistics - India',
    date: '2023-01-01',
    yearOnly: true,
    desc: 'Kaggle • 2023 Analyzed 300,000+ records of crop production across Indian\n                states, focusing on yield patterns, seasonal variations, and\n                regional productivity differences.',
    tech: ['Python', 'Data Visualization', 'EDA', 'Geospatial'],
    status: 'archive',
    link: 'https://www.kaggle.com/code/arunvithyasegar/crop-production-statistics-india',
  },
];
export default data;
export const shipped = data.filter((p) => p.status === 'shipped');
export const archive = data.filter((p) => p.status === 'archive');
