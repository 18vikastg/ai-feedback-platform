import React from 'react';
import { BookOpen, Award, Clock, FileText } from 'lucide-react';
import { StatCard } from '../components/dashboard/StatCard';
import { ProgressChart } from '../components/dashboard/ProgressChart';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { SkillRadarChart } from '../components/learning/SkillRadarChart';
import { 
  mockStudentProgress, 
  mockRecentActivities,
  mockSkillData
} from '../utils/mockData';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here's an overview of your progress.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Course Progress" 
          value={`${Math.round((mockStudentProgress.completedAssignments / mockStudentProgress.totalAssignments) * 100)}%`} 
          icon={<BookOpen size={20} />}
          change={{ value: '12%', type: 'increase' }}
          description="since last month"
        />
        <StatCard 
          title="Badges Earned" 
          value={mockStudentProgress.badges.length} 
          icon={<Award size={20} />}
          change={{ value: '2', type: 'increase' }}
          description="new this week"
        />
        <StatCard 
          title="Hours Studied" 
          value="38.5" 
          icon={<Clock size={20} />}
          change={{ value: '3.5', type: 'increase' }}
          description="hours since last week"
        />
        <StatCard 
          title="Assignments" 
          value={`${mockStudentProgress.completedAssignments}/${mockStudentProgress.totalAssignments}`} 
          icon={<FileText size={20} />}
          change={{ value: '1', type: 'increase' }}
          description="completed yesterday"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProgressChart 
            title="Learning Progress" 
            data={[
              { label: 'Data Analysis', value: 75, color: '#4F46E5' },
              { label: 'Statistics', value: 55, color: '#10B981' },
              { label: 'Machine Learning', value: 60, color: '#F59E0B' },
              { label: 'Python Programming', value: 82, color: '#EF4444' },
            ]} 
          />
        </div>
        <RecentActivity activities={mockRecentActivities} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SkillRadarChart 
          title="Your Skills" 
          skills={mockSkillData} 
        />
        <ProgressChart 
          title="Course Completion" 
          data={[
            { label: 'Introduction to Data Science', value: 90, color: '#4F46E5' },
            { label: 'Advanced Machine Learning', value: 65, color: '#10B981' },
            { label: 'Web Development Bootcamp', value: 40, color: '#F59E0B' },
          ]} 
        />
      </div>
    </div>
  );
};