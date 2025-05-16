import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Clock, FileText } from 'lucide-react';
import { mockAssignments } from '../utils/mockData';

export const Assignments: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Assignments</h1>
        <p className="text-gray-500">View and submit your assignments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockAssignments.map((assignment) => (
          <Card key={assignment.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-indigo-500" />
                <span>{assignment.title}</span>
              </CardTitle>
              <CardDescription className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {assignment.description}
              </p>
              <Link to={`/assignments/${assignment.id}`}>
                <Button className="w-full">View Assignment</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};