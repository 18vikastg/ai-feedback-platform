import React from 'react';
import { 
  Home, 
  BookOpen, 
  FileText, 
  MessageSquare, 
  Award, 
  BarChart, 
  Settings, 
  HelpCircle,
  Compass
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const { user } = useAuth();
  const isTeacher = user?.role === 'teacher' || user?.role === 'admin';

  return (
    <aside 
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 ease-in-out z-10 ${
        isOpen ? 'w-64' : 'w-0 md:w-16 overflow-hidden'
      }`}
    >
      <div className="h-full flex flex-col py-4">
        <nav className="flex-1 space-y-1 px-2">
          <SidebarItem icon={<Home size={20} />} label="Dashboard" href="/dashboard" isOpen={isOpen} />
          <SidebarItem icon={<FileText size={20} />} label="Assignments" href="/assignments" isOpen={isOpen} />
          <SidebarItem icon={<BookOpen size={20} />} label="Courses" href="/courses" isOpen={isOpen} />
          <SidebarItem icon={<MessageSquare size={20} />} label="AI Tutor" href="/tutor" isOpen={isOpen} />
          <SidebarItem icon={<Compass size={20} />} label="Learning Path" href="/learning-path" isOpen={isOpen} />
          <SidebarItem icon={<Award size={20} />} label="Achievements" href="/achievements" isOpen={isOpen} />
          
          {isTeacher && (
            <>
              <div className={`mt-6 mb-2 ${isOpen ? 'px-3' : 'px-0'}`}>
                <div className={`h-px bg-gray-200 ${isOpen ? 'w-full' : 'w-0'}`}></div>
                {isOpen && <p className="mt-2 text-xs font-medium text-gray-500 uppercase">Instructor</p>}
              </div>
              <SidebarItem icon={<BarChart size={20} />} label="Analytics" href="/analytics" isOpen={isOpen} />
              <SidebarItem icon={<Settings size={20} />} label="Settings" href="/settings" isOpen={isOpen} />
            </>
          )}
        </nav>
        <div className="mt-auto px-2">
          <SidebarItem icon={<HelpCircle size={20} />} label="Help & Support" href="/help" isOpen={isOpen} />
        </div>
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isOpen: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, href, isOpen }) => {
  // In a real app, you'd use a router link component here
  return (
    <a 
      href={href}
      className={`flex items-center py-2 rounded-md transition-colors ${
        isOpen ? 'px-3' : 'px-0 justify-center'
      } hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 group`}
    >
      <span className="transition-colors text-gray-500 group-hover:text-indigo-600">{icon}</span>
      {isOpen && <span className="ml-3 text-sm font-medium">{label}</span>}
    </a>
  );
};