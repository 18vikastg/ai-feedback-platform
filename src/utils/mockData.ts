import { 
  User, 
  Assignment, 
  Feedback, 
  Course, 
  LearningPathway, 
  LearningStep,
  Badge,
  StudentProgress,
  ChatMessage
} from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  role: 'student',
  avatarUrl: 'https://i.pravatar.cc/150?u=alex',
};

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Data Science',
    description: 'Learn the fundamentals of data science including statistics, Python, and data visualization.',
    instructorId: '101',
    createdAt: '2023-06-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Advanced Machine Learning',
    description: 'Deep dive into neural networks, deep learning and AI applications.',
    instructorId: '102',
    createdAt: '2023-07-20T14:30:00Z',
  },
  {
    id: '3',
    title: 'Web Development Bootcamp',
    description: 'Comprehensive course on modern web development with React, Node.js and databases.',
    instructorId: '103',
    createdAt: '2023-05-10T09:15:00Z',
  },
];

export const mockAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Data Cleaning Project',
    description: 'Clean and prepare a provided dataset using pandas. Identify and handle missing values, outliers, and perform feature engineering as needed.',
    dueDate: '2023-10-15T23:59:59Z',
    courseId: '1',
    createdAt: '2023-09-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Regression Analysis Paper',
    description: 'Write a 1000-word paper on the applications of regression analysis in your field of interest. Include at least 3 examples and demonstrate the mathematical concepts.',
    dueDate: '2023-10-20T23:59:59Z',
    courseId: '1',
    createdAt: '2023-09-20T14:30:00Z',
  },
  {
    id: '3',
    title: 'Neural Network Implementation',
    description: 'Implement a basic neural network from scratch using Python and NumPy. Train it on the MNIST dataset and report your findings.',
    dueDate: '2023-11-05T23:59:59Z',
    courseId: '2',
    createdAt: '2023-10-05T09:15:00Z',
  },
];

export const mockFeedback: Feedback = {
  id: '1',
  studentId: '1',
  assignmentId: '1',
  content: 'Your submission demonstrates a good understanding of data cleaning techniques. The approach to handling missing values was methodical, and your documentation is clear. There are some areas for improvement in how you dealt with outliers.',
  strengths: [
    'Excellent handling of missing data',
    'Clear documentation of steps taken',
    'Good use of visualization to understand the data',
  ],
  weaknesses: [
    'The outlier detection method could be more robust',
    'Some redundant steps in the cleaning process',
    'Limited feature engineering',
  ],
  suggestions: [
    'Consider using IQR or z-score for outlier detection',
    'Add more domain-specific features to enrich the dataset',
    'Streamline your cleaning pipeline to be more efficient',
  ],
  createdAt: '2023-10-10T15:30:00Z',
};

export const mockBadges: Badge[] = [
  {
    id: '1',
    name: 'Quick Learner',
    description: 'Completed 5 lessons in a single day',
    imageUrl: 'https://img.icons8.com/color/96/000000/prize.png',
    criteria: 'Complete 5 lessons in 24 hours',
  },
  {
    id: '2',
    name: 'Feedback Master',
    description: 'Applied feedback to improve scores on 3 consecutive assignments',
    imageUrl: 'https://img.icons8.com/color/96/000000/improvement.png',
    criteria: 'Improve scores after feedback 3 times in a row',
  },
  {
    id: '3',
    name: 'Perfect Attendance',
    description: 'Logged in for 7 consecutive days',
    imageUrl: 'https://img.icons8.com/color/96/000000/calendar.png',
    criteria: 'Log in daily for a week straight',
  },
  {
    id: '4',
    name: 'Code Wizard',
    description: 'Scored 90%+ on a programming assignment',
    imageUrl: 'https://img.icons8.com/color/96/000000/wizard.png',
    criteria: 'Get an excellent score on any coding task',
  },
];

export const mockStudentProgress: StudentProgress = {
  studentId: '1',
  courseId: '1',
  completedAssignments: 8,
  totalAssignments: 12,
  averageScore: 85,
  badges: mockBadges.slice(0, 2),
  strengths: ['Data Analysis', 'Critical Thinking', 'Technical Writing'],
  weaknessAreas: ['Statistical Methods', 'Presentation Skills'],
};

export const mockLearningPathway: LearningPathway = {
  id: '1',
  studentId: '1',
  steps: [
    {
      id: '1',
      title: 'Introduction to Data Science',
      description: 'Fundamentals and key concepts',
      resourceUrl: '#',
      type: 'video',
      completed: true,
    },
    {
      id: '2',
      title: 'Statistics Refresher',
      description: 'Review of essential statistical concepts',
      resourceUrl: '#',
      type: 'reading',
      completed: true,
    },
    {
      id: '3',
      title: 'Python for Data Analysis',
      description: 'Core Python libraries for data work',
      resourceUrl: '#',
      type: 'practice',
      completed: false,
    },
    {
      id: '4',
      title: 'Data Cleaning Techniques',
      description: 'Methods to prepare and clean datasets',
      resourceUrl: '#',
      type: 'video',
      completed: false,
    },
    {
      id: '5',
      title: 'Basic Data Visualization',
      description: 'Create effective data visualizations',
      resourceUrl: '#',
      type: 'practice',
      completed: false,
    },
  ],
  currentStepIndex: 2,
  createdAt: '2023-09-01T00:00:00Z',
  updatedAt: '2023-10-05T14:25:00Z',
};

export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    content: "Hi there! I'm your AI learning assistant. How can I help you today?",
    sender: 'ai',
    timestamp: '2023-10-15T10:00:00Z',
  },
  {
    id: '2',
    content: "I'm having trouble understanding regression analysis. Can you explain it?",
    sender: 'user',
    timestamp: '2023-10-15T10:01:30Z',
  },
  {
    id: '3',
    content: "Sure! Regression analysis is a statistical method used to examine relationships between variables. The most common type is linear regression, where we try to find a linear relationship between a dependent variable and one or more independent variables.\n\nFor example, if you're trying to predict house prices (dependent variable) based on factors like size, location, and age (independent variables), regression analysis helps you find how these factors influence the price.\n\nWould you like me to explain a specific aspect of regression analysis in more detail?",
    sender: 'ai',
    timestamp: '2023-10-15T10:02:15Z',
  },
];

export const mockLeaderboardUsers = [
  {
    id: '2',
    name: 'Sarah Chen',
    avatarUrl: 'https://i.pravatar.cc/150?u=sarah',
    points: 5240,
    rank: 1,
    badges: 12,
  },
  {
    id: '3',
    name: 'Michael Brown',
    avatarUrl: 'https://i.pravatar.cc/150?u=michael',
    points: 4890,
    rank: 2,
    badges: 10,
  },
  {
    id: '1', // Current user
    name: 'Alex Johnson',
    avatarUrl: 'https://i.pravatar.cc/150?u=alex',
    points: 4720,
    rank: 3,
    badges: 9,
  },
  {
    id: '4',
    name: 'Jessica Wilson',
    avatarUrl: 'https://i.pravatar.cc/150?u=jessica',
    points: 4550,
    rank: 4,
    badges: 8,
  },
  {
    id: '5',
    name: 'David Lee',
    avatarUrl: 'https://i.pravatar.cc/150?u=david',
    points: 4320,
    rank: 5,
    badges: 7,
  },
];

export const mockSkillData = [
  { label: 'Data Analysis', value: 75, maxValue: 100 },
  { label: 'Programming', value: 65, maxValue: 100 },
  { label: 'Critical Thinking', value: 85, maxValue: 100 },
  { label: 'Communication', value: 60, maxValue: 100 },
  { label: 'Problem Solving', value: 80, maxValue: 100 },
  { label: 'Statistics', value: 55, maxValue: 100 },
];

export const mockRecentActivities = [
  {
    id: '1',
    title: 'Submitted Data Cleaning Project',
    type: 'assignment',
    status: 'completed',
    time: '2 hours ago',
  },
  {
    id: '2',
    title: 'Received feedback on Regression Analysis Paper',
    type: 'feedback',
    status: 'reviewed',
    time: '1 day ago',
  },
  {
    id: '3',
    title: 'Earned "Quick Learner" badge',
    type: 'achievement',
    status: 'completed',
    time: '2 days ago',
  },
  {
    id: '4',
    title: 'Completed Python for Data Analysis lesson',
    type: 'course',
    status: 'completed',
    time: '3 days ago',
  },
  {
    id: '5',
    title: 'Neural Network Implementation due soon',
    type: 'assignment',
    status: 'pending',
    time: 'Due in 5 days',
  },
];