import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Feedback } from '../../types';
import { CheckCircle2, XCircle, Lightbulb } from 'lucide-react';

interface FeedbackDisplayProps {
  feedback: Feedback;
}

export const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({ feedback }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>AI Feedback</CardTitle>
        <CardDescription>
          Generated on {new Date(feedback.createdAt).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose max-w-none">
          <p>{feedback.content}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="text-green-500" size={20} />
              <h3 className="text-lg font-medium">Strengths</h3>
            </div>
            <ul className="space-y-2">
              {feedback.strengths.map((strength, index) => (
                <li key={index} className="bg-green-50 p-3 rounded-md text-sm">
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <XCircle className="text-red-500" size={20} />
              <h3 className="text-lg font-medium">Areas to Improve</h3>
            </div>
            <ul className="space-y-2">
              {feedback.weaknesses.map((weakness, index) => (
                <li key={index} className="bg-red-50 p-3 rounded-md text-sm">
                  {weakness}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Lightbulb className="text-amber-500" size={20} />
              <h3 className="text-lg font-medium">Suggestions</h3>
            </div>
            <ul className="space-y-2">
              {feedback.suggestions.map((suggestion, index) => (
                <li key={index} className="bg-amber-50 p-3 rounded-md text-sm">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};