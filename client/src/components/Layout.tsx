import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, isSidebarOpen } = useTheme();

  // Calculate padding based on theme
  const getMainClasses = () => {
    let classes = 'min-h-screen transition-all duration-300';
    
    switch (theme) {
      case 'minimalist':
        classes += ' pt-16 bg-gray-50';
        break;
      case 'dark':
        classes += ' pt-16 bg-gray-900';
        if (isSidebarOpen) {
          classes += ' ml-64';
        }
        break;
      case 'vibrant':
        classes += ' pt-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50';
        break;
    }
    
    return classes;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Sidebar />
      <main className={getMainClasses()}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
