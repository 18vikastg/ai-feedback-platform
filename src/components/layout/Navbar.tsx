import React from 'react';
import { Menu, X, MessageCircle, Bell, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface NavbarProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, sidebarOpen }) => {
  const { user, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-20">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="mr-4 p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="flex items-center">
            <span className="text-xl font-bold text-indigo-600">EduAI</span>
            <span className="text-xl font-bold text-gray-700 ml-1">Feedback</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none">
            <MessageCircle size={20} />
          </button>
          <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none">
            <Bell size={20} />
          </button>
          
          <div className="relative group">
            <button className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden">
                {user?.avatarUrl ? (
                  <img 
                    src={user.avatarUrl} 
                    alt={user.name}
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <User size={18} className="text-indigo-600" />
                )}
              </div>
              <span className="hidden md:block text-sm font-medium text-gray-700">{user?.name}</span>
            </button>
            
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 z-50">
              <div className="py-1">
                <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 flex items-center"
                >
                  <LogOut size={16} className="mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};