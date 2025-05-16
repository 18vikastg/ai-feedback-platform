import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface LeaderboardUser {
  id: string;
  name: string;
  avatarUrl?: string;
  points: number;
  rank: number;
  badges: number;
}

interface LeaderboardProps {
  users: LeaderboardUser[];
  currentUserId: string;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ users, currentUserId }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {users.map((user) => (
            <div 
              key={user.id} 
              className={`flex items-center p-3 rounded-lg ${
                user.id === currentUserId ? 'bg-indigo-50 border border-indigo-100' : ''
              }`}
            >
              <div className="w-6 text-center font-bold text-gray-500">
                {user.rank}
              </div>
              <div className="w-10 h-10 ml-3 rounded-full bg-gray-200 overflow-hidden">
                {user.avatarUrl ? (
                  <img 
                    src={user.avatarUrl} 
                    alt={user.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 font-medium">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="ml-3 flex-1">
                <div className="font-medium">{user.name}</div>
                <div className="text-xs text-gray-500 flex items-center">
                  <Badge variant="secondary" className="mr-1">
                    {user.badges} badges
                  </Badge>
                </div>
              </div>
              <div className="font-bold text-indigo-600">{user.points}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};