import React from 'react';
import { AchievementBadge } from '../components/gamification/AchievementBadge';
import { Leaderboard } from '../components/gamification/Leaderboard';
import { mockBadges, mockLeaderboardUsers } from '../utils/mockData';

export const Achievements: React.FC = () => {
  // Add some locked badges
  const allBadges = [
    ...mockBadges.slice(0, 2).map(badge => ({ ...badge, unlocked: true })),
    ...mockBadges.slice(2).map(badge => ({ ...badge, unlocked: false }))
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Achievements</h1>
        <p className="text-gray-500">Track your progress and see how you compare to others.</p>
      </div>
      
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Your Badges</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {allBadges.map((badge, index) => (
            <AchievementBadge 
              key={badge.id} 
              badge={badge}
              unlocked={badge.unlocked}
              progress={!badge.unlocked ? (index === 2 ? 75 : 40) : 100}
            />
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Your Progress</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Points Earned</h3>
                <span className="text-indigo-600 font-bold">4,720</span>
              </div>
              <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full" style={{ width: '72%' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">Next milestone: 5,000 points</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Badges Collected</h3>
                <span className="text-indigo-600 font-bold">9/20</span>
              </div>
              <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">Next badge: "Perfect Score" (1 more to go)</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Streak</h3>
                <span className="text-indigo-600 font-bold">15 days</span>
              </div>
              <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '50%' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">Longest streak: 30 days</p>
            </div>
          </div>
        </div>
        
        <Leaderboard 
          users={mockLeaderboardUsers}
          currentUserId="1"
        />
      </div>
    </div>
  );
};