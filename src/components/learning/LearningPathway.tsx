import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { LearningPathway as LearningPathwayType, LearningStep } from '../../types';
import { CheckCircle, Circle, BookOpen, Video, FileText, HelpCircle } from 'lucide-react';

interface LearningPathwayProps {
  pathway: LearningPathwayType;
}

export const LearningPathway: React.FC<LearningPathwayProps> = ({ pathway }) => {
  const getStepIcon = (type: string, completed: boolean) => {
    switch (type) {
      case 'video':
        return <Video size={16} className={completed ? 'text-green-500' : 'text-gray-500'} />;
      case 'reading':
        return <BookOpen size={16} className={completed ? 'text-green-500' : 'text-gray-500'} />;
      case 'quiz':
        return <HelpCircle size={16} className={completed ? 'text-green-500' : 'text-gray-500'} />;
      case 'practice':
        return <FileText size={16} className={completed ? 'text-green-500' : 'text-gray-500'} />;
      default:
        return <Circle size={16} className={completed ? 'text-green-500' : 'text-gray-500'} />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Learning Pathway</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {pathway.steps.map((step, index) => (
            <div 
              key={step.id}
              className={`relative ${
                index !== pathway.steps.length - 1 ? 'pb-6' : ''
              }`}
            >
              {index !== pathway.steps.length - 1 && (
                <div
                  className="absolute left-3.5 top-8 bottom-0 w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></div>
              )}
              
              <div className="relative flex space-x-3">
                <div>
                  {step.completed ? (
                    <CheckCircle className="w-7 h-7 text-green-500" />
                  ) : (
                    <div 
                      className={`w-7 h-7 rounded-full flex items-center justify-center ${
                        index === pathway.currentStepIndex 
                          ? 'bg-indigo-500 text-white' 
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {index + 1}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    {getStepIcon(step.type, step.completed)}
                    <h3 
                      className={`text-base font-medium ${
                        step.completed 
                          ? 'text-gray-500' 
                          : index === pathway.currentStepIndex 
                            ? 'text-indigo-600' 
                            : 'text-gray-700'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{step.description}</p>
                  
                  {index === pathway.currentStepIndex && (
                    <div className="mt-3">
                      <Button 
                        size="sm"
                        href={step.resourceUrl}
                      >
                        {step.type === 'video' && 'Watch Video'}
                        {step.type === 'reading' && 'Read Material'}
                        {step.type === 'quiz' && 'Take Quiz'}
                        {step.type === 'practice' && 'Practice Now'}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};