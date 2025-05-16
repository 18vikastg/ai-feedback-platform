import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

interface ProgressChartProps {
  title: string;
  data: {
    label: string;
    value: number;
    color: string;
  }[];
  maxValue?: number;
}

export const ProgressChart: React.FC<ProgressChartProps> = ({
  title,
  data,
  maxValue = 100,
}) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-sm font-medium">{item.value}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-in-out"
                  style={{
                    width: `${Math.min(100, (item.value / maxValue) * 100)}%`,
                    backgroundColor: item.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};