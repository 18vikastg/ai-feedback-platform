import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/Card';
import { TextArea } from '../ui/TextArea';
import { Button } from '../ui/Button';
import { Submission, Assignment, Feedback } from '../../types';
import { Loader2, Upload, File, X } from 'lucide-react';
import { FeedbackDisplay } from './FeedbackDisplay';

interface SubmissionFormProps {
  assignment: Assignment;
}

export const SubmissionForm: React.FC<SubmissionFormProps> = ({ assignment }) => {
  const [content, setContent] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt'],
      'image/*': ['.png', '.jpg', '.jpeg']
    }
  });

  const removeFile = (fileToRemove: File) => {
    setFiles(files.filter(file => file !== fileToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim() && files.length === 0) return;

    setIsSubmitting(true);
    
    // In a real app, this would upload files to storage and send to API
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock feedback response
    const mockFeedback: Feedback = {
      id: '1',
      studentId: '1',
      assignmentId: assignment.id,
      content: 'Your submission demonstrates a good understanding of the core concepts. The analysis is well-structured, but could benefit from more specific examples to support your arguments.',
      strengths: [
        'Clear organization of ideas',
        'Strong introduction and conclusion',
        'Good use of relevant vocabulary'
      ],
      weaknesses: [
        'Limited use of specific examples',
        'Some grammatical errors in paragraph 3',
        'The argument in section 2 needs more development'
      ],
      suggestions: [
        'Include more specific examples to support your claims',
        'Review subject-verb agreement in complex sentences',
        'Consider adding counter-arguments to strengthen your position'
      ],
      createdAt: new Date().toISOString()
    };
    
    setFeedback(mockFeedback);
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-6">
      {feedback && <FeedbackDisplay feedback={feedback} />}
      
      <Card>
        <CardHeader>
          <CardTitle>{assignment.title}</CardTitle>
          <CardDescription>
            Due: {new Date(assignment.dueDate).toLocaleDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <p className="text-gray-700">{assignment.description}</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <TextArea
              label="Your Answer"
              placeholder="Type your response here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
            />

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Attachments
              </label>
              
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                  isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  Drag & drop files here, or click to select files
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Supports PDF, DOC, DOCX, TXT, and image files
                </p>
              </div>

              {files.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <li 
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-2">
                        <File className="h-5 w-5 text-gray-500" />
                        <span className="text-sm text-gray-700">{file.name}</span>
                        <span className="text-xs text-gray-500">
                          ({(file.size / 1024).toFixed(1)} KB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(file)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <X size={18} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting || (!content.trim() && files.length === 0)}
              className="w-full md:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Get AI Feedback'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};