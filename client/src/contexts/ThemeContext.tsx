import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, ThemeContextType } from '../types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('minimalist');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') as Theme;
    if (savedTheme && ['minimalist', 'dark', 'vibrant'].includes(savedTheme)) {
      setThemeState(savedTheme);
    }
  }, []);

  // Update body classes and localStorage when theme changes
  useEffect(() => {
    // Remove all theme classes
    document.body.classList.remove('theme-minimalist', 'theme-dark', 'theme-vibrant');
    document.body.classList.remove('bg-gray-50', 'bg-gray-900', 'font-inter', 'font-playfair');
    
    // Add current theme class
    document.body.classList.add(`theme-${theme}`, 'animate-theme-transition');
    
    // Add theme-specific styling
    switch (theme) {
      case 'minimalist':
        document.body.classList.add('bg-gray-50', 'font-inter');
        break;
      case 'dark':
        document.body.classList.add('bg-gray-900', 'font-inter');
        break;
      case 'vibrant':
        document.body.className = `theme-${theme} animate-theme-transition bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50`;
        break;
    }
    
    // Save to localStorage
    localStorage.setItem('selectedTheme', theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const value: ThemeContextType = {
    theme,
    setTheme,
    isSidebarOpen,
    setSidebarOpen,
    toggleSidebar,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
