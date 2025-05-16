import React from 'react';
import { Card, CardContent } from '../ui/Card';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: string | number;
    type: 'increase' | 'decrease' | 'neutral';
  };
  description?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  description,
}) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
            {change && (
              <div className="flex items-center mt-1">
                <span
                  className={`text-xs font-medium ${
                    change.type === 'increase'
                      ? 'text-green-600'
                      : change.type === 'decrease'
                      ? 'text-red-600'
                      : 'text-gray-500'
                  }`}
                >
                  {change.type === 'increase' && '↑ '}
                  {change.type === 'decrease' && '↓ '}
                  {change.value}
                </span>
                {description && (
                  <span className="text-xs text-gray-500 ml-1">{description}</span>
                )}
              </div>
            )}
          </div>
          <div className="bg-indigo-50 p-3 rounded-full text-indigo-600">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};