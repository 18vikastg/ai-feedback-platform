import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

interface SkillData {
  label: string;
  value: number;
  maxValue: number;
}

interface SkillRadarChartProps {
  title: string;
  skills: SkillData[];
}

export const SkillRadarChart: React.FC<SkillRadarChartProps> = ({ title, skills }) => {
  // Calculate coordinates for a radar chart
  const calculateCoordinates = (skills: SkillData[]) => {
    const numberOfSkills = skills.length;
    const angleStep = (2 * Math.PI) / numberOfSkills;
    
    return skills.map((skill, index) => {
      const angle = index * angleStep - Math.PI / 2; // Start at top
      const normalizedValue = skill.value / skill.maxValue;
      const radius = 80 * normalizedValue; // Max radius is 80
      
      return {
        x: 100 + radius * Math.cos(angle),
        y: 100 + radius * Math.sin(angle),
        label: skill.label,
        normalized: normalizedValue,
      };
    });
  };
  
  const coordinates = calculateCoordinates(skills);
  
  // Create polygon points string
  const polygonPoints = coordinates
    .map((coord) => `${coord.x},${coord.y}`)
    .join(' ');
  
  // For axis lines
  const axisLines = coordinates.map((coord, index) => ({
    x1: 100,
    y1: 100,
    x2: 100 + 80 * Math.cos((index * 2 * Math.PI) / skills.length - Math.PI / 2),
    y2: 100 + 80 * Math.sin((index * 2 * Math.PI) / skills.length - Math.PI / 2),
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="relative">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {/* Background circles */}
            <circle cx="100" cy="100" r="80" fill="none" stroke="#E5E7EB" strokeWidth="1" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#E5E7EB" strokeWidth="1" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="#E5E7EB" strokeWidth="1" />
            <circle cx="100" cy="100" r="20" fill="none" stroke="#E5E7EB" strokeWidth="1" />
            
            {/* Axis lines */}
            {axisLines.map((line, index) => (
              <line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#E5E7EB"
                strokeWidth="1"
              />
            ))}
            
            {/* Skill polygon */}
            <polygon
              points={polygonPoints}
              fill="rgba(79, 70, 229, 0.2)"
              stroke="#4F46E5"
              strokeWidth="2"
            />
            
            {/* Skill points */}
            {coordinates.map((coord, index) => (
              <circle
                key={index}
                cx={coord.x}
                cy={coord.y}
                r="4"
                fill="#4F46E5"
              />
            ))}
          </svg>
          
          {/* Labels */}
          {coordinates.map((coord, index) => {
            const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
            const labelRadius = 95;
            const labelX = 100 + labelRadius * Math.cos(angle);
            const labelY = 100 + labelRadius * Math.sin(angle);
            
            const textAnchor = 
              labelX < 90 ? 'end' :
              labelX > 110 ? 'start' :
              'middle';
            
            const dy = 
              labelY < 90 ? '-0.5em' :
              labelY > 110 ? '1em' :
              '0.3em';
            
            return (
              <div
                key={index}
                className="absolute text-xs font-medium text-gray-600"
                style={{
                  left: `${labelX}px`,
                  top: `${labelY}px`,
                  transform: 'translate(-50%, -50%)',
                  textAlign: textAnchor === 'middle' ? 'center' : 
                            textAnchor === 'start' ? 'left' : 'right',
                  width: '70px',
                }}
              >
                {coord.label}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};