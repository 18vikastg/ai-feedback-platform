import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { CheckCircle2, AlertCircle, Clock } from 'lucide-react';

interface Activity {
  id: string;
  title: string;
  type: 'assignment' | 'feedback' | 'achievement' | 'course';
  status: 'completed' | 'pending' | 'reviewed';
  time: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

export const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className="mt-0.5">
                {activity.status === 'completed' && (
                  <CheckCircle2 className="text-green-500" size={18} />
                )}
                {activity.status === 'pending' && (
                  <Clock className="text-amber-500" size={18} />
                )}
                {activity.status === 'reviewed' && (
                  <AlertCircle className="text-blue-500" size={18} />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {capitalizeFirstLetter(activity.type)} • {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}