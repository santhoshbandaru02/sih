import { CompetencyCategory, LearningCourse, QuizAssessment, AnalyticsSummary } from '../types';

export const mockAnalyticsSummary: AnalyticsSummary = {
  totalUsers: 14250,
  officialsCount: 11800,
  facultyCount: 2450,
  coursesCount: 384,
  assessmentsCount: 1290,
  skillGapsIdentified: 8420,
  avgCompetencyScore: 78,
};

export const mockCompetencyCategories: CompetencyCategory[] = [
  { id: '1', name: 'Data Analytics', currentLevel: 65, requiredLevel: 85, gap: 20, status: 'needs-improvement' },
  { id: '2', name: 'Statistical Methods', currentLevel: 82, requiredLevel: 90, gap: 8, status: 'moderate' },
  { id: '3', name: 'AI & Machine Learning', currentLevel: 45, requiredLevel: 75, gap: 30, status: 'needs-improvement' },
  { id: '4', name: 'GIS & Spatial Analysis', currentLevel: 60, requiredLevel: 80, gap: 20, status: 'needs-improvement' },
  { id: '5', name: 'Data Visualization', currentLevel: 88, requiredLevel: 90, gap: 2, status: 'proficient' },
];

export const mockLearningCourses: LearningCourse[] = [
  {
    id: 'c1',
    title: 'Data Analytics Fundamentals for Official Statistics',
    category: 'Data Analytics',
    duration: '4h 30m',
    level: 'Beginner',
    progress: 75,
    modulesCount: 6,
    skillsAddressed: ['Data Cleaning', 'Exploratory Data Analysis', 'Pandas'],
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c2',
    title: 'Advanced Statistical Methods & Sampling Techniques',
    category: 'Statistical Methods',
    duration: '6h 15m',
    level: 'Intermediate',
    progress: 40,
    modulesCount: 8,
    skillsAddressed: ['Sampling Theory', 'Hypothesis Testing', 'Regression'],
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c3',
    title: 'Introduction to Machine Learning in Public Policy',
    category: 'AI & Machine Learning',
    duration: '8h 00m',
    level: 'Advanced',
    progress: 15,
    modulesCount: 10,
    skillsAddressed: ['Supervised Learning', 'Predictive Modeling', 'Python'],
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'c4',
    title: 'GIS for National Statistical Mapping',
    category: 'GIS & Spatial Analysis',
    duration: '5h 45m',
    level: 'Intermediate',
    progress: 0,
    modulesCount: 7,
    skillsAddressed: ['QGIS', 'GeoPandas', 'Spatial Mapping'],
    thumbnail: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80',
  },
];

export const mockQuizAssessment: QuizAssessment = {
  id: 'q1',
  title: 'Statistical Sampling & Survey Methodology Assessment',
  topic: 'Official Statistics',
  timeLimitMinutes: 15,
  totalQuestions: 4,
  questions: [
    {
      id: 1,
      question: 'Which sampling technique guarantees every element in the population has a known, non-zero chance of selection?',
      options: [
        'A. Quota Sampling',
        'B. Probability Sampling',
        'C. Purposive Sampling',
        'D. Convenience Sampling'
      ],
      correctAnswer: 1,
      explanation: 'Probability sampling is based on random selection principles where every population element has a known probability of being included.'
    },
    {
      id: 2,
      question: 'In survey data processing, what is the primary purpose of data imputation?',
      options: [
        'A. To eliminate all sample variance',
        'B. To replace missing values with plausible estimates based on available data',
        'C. To increase the sample size artificially',
        'D. To change non-respondent answers to default constants'
      ],
      correctAnswer: 1,
      explanation: 'Data imputation methods fill missing data items with valid values calculated from response patterns of similar units.'
    },
    {
      id: 3,
      question: 'When evaluating macro-economic indices, which weighting index uses base period quantities as weights?',
      options: [
        'A. Paasche Index',
        'B. Laspeyres Index',
        'C. Fisher Ideal Index',
        'D. Törnqvist Index'
      ],
      correctAnswer: 1,
      explanation: 'The Laspeyres Price Index uses base period basket quantities to weight prices across time.'
    },
    {
      id: 4,
      question: 'Which machine learning algorithm is most suitable for classifying tabular census data into categorical economic brackets?',
      options: [
        'A. Convolutional Neural Network (CNN)',
        'B. Gradient Boosted Decision Trees (XGBoost)',
        'C. Recurrent Neural Network (RNN)',
        'D. K-Means Clustering'
      ],
      correctAnswer: 1,
      explanation: 'Tree-based ensemble methods like XGBoost yield superior accuracy on structured tabular dataset features.'
    }
  ]
};

export const mockAdminDistribution = [
  { category: 'Data Analytics', level: 68 },
  { category: 'Statistics', level: 82 },
  { category: 'AI/ML', level: 52 },
  { category: 'GIS', level: 61 },
  { category: 'Data Viz', level: 86 },
];

export const mockCompletionTrends = [
  { month: 'Jan', completed: 1200, enrolled: 1800 },
  { month: 'Feb', completed: 1900, enrolled: 2400 },
  { month: 'Mar', completed: 2400, enrolled: 3100 },
  { month: 'Apr', completed: 3200, enrolled: 3900 },
  { month: 'May', completed: 4100, enrolled: 4800 },
  { month: 'Jun', completed: 5300, enrolled: 6200 },
];
