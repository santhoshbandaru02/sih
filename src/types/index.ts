export type RoleType = 'guest' | 'admin' | 'official' | 'faculty';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: RoleType;
  department: string;
  designation: string;
  avatarUrl?: string;
}

export interface CompetencyCategory {
  id: string;
  name: string;
  currentLevel: number;
  requiredLevel: number;
  gap: number;
  status: 'proficient' | 'moderate' | 'needs-improvement';
}

export interface LearningCourse {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
  modulesCount: number;
  skillsAddressed: string[];
  thumbnail: string;
}

export interface AssessmentQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizAssessment {
  id: string;
  title: string;
  topic: string;
  timeLimitMinutes: number;
  totalQuestions: number;
  questions: AssessmentQuestion[];
}

export interface AnalyticsSummary {
  totalUsers: number;
  officialsCount: number;
  facultyCount: number;
  coursesCount: number;
  assessmentsCount: number;
  skillGapsIdentified: number;
  avgCompetencyScore: number;
}
