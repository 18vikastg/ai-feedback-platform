import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AuthProvider, useAuth } from './context/AuthContext';

import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { AITutor } from './pages/AITutor';
import { Achievements } from './pages/Achievements';
import { AssignmentFeedback } from './pages/AssignmentFeedback';
import { LearningPath } from './pages/LearningPath';
import { Assignments } from './pages/Assignments';
import { Courses } from './pages/Courses';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/assignments" 
              element={
                <ProtectedRoute>
                  <Assignments />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/courses" 
              element={
                <ProtectedRoute>
                  <Courses />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/tutor" 
              element={
                <ProtectedRoute>
                  <AITutor />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/achievements" 
              element={
                <ProtectedRoute>
                  <Achievements />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/assignments/:id" 
              element={
                <ProtectedRoute>
                  <AssignmentFeedback />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/learning-path" 
              element={
                <ProtectedRoute>
                  <LearningPath />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="*" 
              element={<Navigate to="/dashboard" replace />} 
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App