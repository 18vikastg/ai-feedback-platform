import React from 'react';
import { Card } from '../ui/Card';
import { Badge as BadgeType } from '../../types';

interface AchievementBadgeProps {
  badge: BadgeType;
  unlocked?: boolean;
  progress?: number;
}

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  badge,
  unlocked = true,
  progress = 100
}) => {
  return (
    <Card 
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-md ${
        unlocked ? 'bg-white' : 'bg-gray-100'
      }`}
    >
      <div className="flex flex-col items-center p-4">
        <div 
          className={`w-16 h-16 rounded-full mb-3 flex items-center justify-center ${
            unlocked ? 'bg-indigo-100' : 'bg-gray-200'
          }`}
        >
          <img 
            src={badge.imageUrl} 
            alt={badge.name} 
            className={`w-10 h-10 ${!unlocked && 'opacity-50 grayscale'}`}
          />
        </div>
        <h3 className={`text-sm font-medium text-center ${!unlocked && 'text-gray-500'}`}>
          {badge.name}
        </h3>
        <p className="text-xs text-gray-500 text-center mt-1">{badge.description}</p>
        
        {!unlocked && progress < 100 && (
          <div className="w-full mt-3">
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 text-center mt-1">{progress}% complete</p>
          </div>
        )}
        
        {unlocked && (
          <div className="absolute -top-1 -right-1 transform rotate-12">
            <div className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">
              Earned
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};