import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SubmissionForm } from '../components/feedback/SubmissionForm';
import { mockAssignments } from '../utils/mockData';

export const AssignmentFeedback: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, we'd fetch the assignment based on the ID
  const assignment = mockAssignments.find(a => a.id === id) || mockAssignments[0];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Link to="/assignments">
          <Button variant="ghost" className="p-0 mr-2 h-auto">
            <ArrowLeft size={20} />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Assignment Feedback</h1>
      </div>
      
      <SubmissionForm assignment={assignment} />
    </div>
  );
};