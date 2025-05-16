import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { BookOpen, Users, Clock } from 'lucide-react';
import { mockCourses } from '../utils/mockData';

export const Courses: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">My Courses</h1>
        <p className="text-gray-500">Access your enrolled courses and learning materials</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCourses.map((course) => (
          <Card key={course.id} className="flex flex-col">
            <CardHeader>
              <div className="w-full h-40 bg-indigo-100 rounded-t-lg mb-4 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-indigo-500" />
              </div>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Users size={16} />
                    <span>32 students</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Clock size={16} />
                    <span>8 weeks</span>
                  </div>
                </div>
                <Button className="w-full">Go to Course</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};