import React from 'react';
import { ChatInterface } from '../components/chatbot/ChatInterface';

export const AITutor: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">AI Tutor</h1>
        <p className="text-gray-500">Get personalized help with your coursework and questions.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChatInterface />
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Suggested Topics</h2>
            <ul className="space-y-2">
              <li>
                <button className="w-full text-left p-2 bg-indigo-50 text-indigo-700 rounded hover:bg-indigo-100 transition-colors">
                  Explain regression analysis
                </button>
              </li>
              <li>
                <button className="w-full text-left p-2 bg-gray-50 text-gray-700 rounded hover:bg-gray-100 transition-colors">
                  How to handle missing data?
                </button>
              </li>
              <li>
                <button className="w-full text-left p-2 bg-gray-50 text-gray-700 rounded hover:bg-gray-100 transition-colors">
                  Explain neural networks
                </button>
              </li>
              <li>
                <button className="w-full text-left p-2 bg-gray-50 text-gray-700 rounded hover:bg-gray-100 transition-colors">
                  Best practices for data visualization
                </button>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Recent Conversations</h2>
            <ul className="space-y-3">
              <li className="border-b border-gray-100 pb-2">
                <a href="#" className="block hover:text-indigo-600">
                  <p className="font-medium">Understanding P-values</p>
                  <p className="text-sm text-gray-500">Yesterday, 2:30 PM</p>
                </a>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <a href="#" className="block hover:text-indigo-600">
                  <p className="font-medium">Debugging my Python code</p>
                  <p className="text-sm text-gray-500">Oct 12, 9:15 AM</p>
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-indigo-600">
                  <p className="font-medium">Machine learning models comparison</p>
                  <p className="text-sm text-gray-500">Oct 8, 1:45 PM</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};