export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  avatarUrl?: string;
}

export interface Feedback {
  id: string;
  studentId: string;
  assignmentId: string;
  content: string;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  createdAt: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  courseId: string;
  createdAt: string;
}

export interface Submission {
  id: string;
  studentId: string;
  assignmentId: string;
  content: string;
  status: 'pending' | 'reviewed' | 'feedback-provided';
  score?: number;
  submittedAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructorId: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  criteria: string;
}

export interface StudentProgress {
  studentId: string;
  courseId: string;
  completedAssignments: number;
  totalAssignments: number;
  averageScore: number;
  badges: Badge[];
  strengths: string[];
  weaknessAreas: string[];
}

export interface LearningPathway {
  id: string;
  studentId: string;
  steps: LearningStep[];
  currentStepIndex: number;
  createdAt: string;
  updatedAt: string;
}

export interface LearningStep {
  id: string;
  title: string;
  description: string;
  resourceUrl?: string;
  type: 'video' | 'reading' | 'quiz' | 'practice';
  completed: boolean;
}