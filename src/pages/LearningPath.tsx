import React from 'react';
import { LearningPathway } from '../components/learning/LearningPathway';
import { SkillRadarChart } from '../components/learning/SkillRadarChart';
import { mockLearningPathway, mockSkillData } from '../utils/mockData';

export const LearningPath: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Your Learning Pathway</h1>
        <p className="text-gray-500">Personalized learning journey based on your progress and goals.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LearningPathway pathway={mockLearningPathway} />
        </div>
        
        <div className="space-y-6">
          <SkillRadarChart 
            title="Your Skills" 
            skills={mockSkillData} 
          />
          
          <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Recommended Resources</h2>
            <ul className="space-y-3">
              <li className="border-b border-gray-100 pb-2">
                <a href="#" className="block hover:text-indigo-600">
                  <p className="font-medium">Practical Python for Data Analysis</p>
                  <p className="text-sm text-gray-500">Video Course • 3h 45m</p>
                </a>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <a href="#" className="block hover:text-indigo-600">
                  <p className="font-medium">Statistics for Data Scientists</p>
                  <p className="text-sm text-gray-500">E-Book • Intermediate</p>
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-indigo-600">
                  <p className="font-medium">Hands-on Data Cleaning Workshop</p>
                  <p className="text-sm text-gray-500">Interactive Exercise • 1h 20m</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};