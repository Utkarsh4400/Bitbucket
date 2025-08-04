import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useTheme } from '../contexts/ThemeContext';
import { Theme } from '../types';

const Header: React.FC = () => {
  const { theme, setTheme, toggleSidebar } = useTheme();
  const [location] = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentPage = location.slice(1) || 'home';

  const themeOptions = [
    { value: 'minimalist' as Theme, label: 'Theme 1 - Minimalist', icon: 'fas fa-sun' },
    { value: 'dark' as Theme, label: 'Theme 2 - Dark Sidebar', icon: 'fas fa-moon' },
    { value: 'vibrant' as Theme, label: 'Theme 3 - Vibrant Cards', icon: 'fas fa-rainbow' },
  ];

  const getCurrentThemeLabel = () => {
    const current = themeOptions.find(option => option.value === theme);
    return current ? current.label.split(' - ')[0] : 'Theme 1';
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsDropdownOpen(false);
    };
    
    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isDropdownOpen]);

  const handleThemeSelect = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    setIsDropdownOpen(false);
  };

  const NavLink: React.FC<{ href: string; page: string; children: React.ReactNode; className?: string }> = ({ 
    href, page, children, className = '' 
  }) => {
    const isActive = currentPage === page;
    let activeClasses = '';
    
    if (isActive) {
      switch (theme) {
        case 'minimalist':
          activeClasses = 'bg-blue-100 text-blue-700';
          break;
        case 'dark':
          activeClasses = 'bg-gray-700 text-white';
          break;
        case 'vibrant':
          activeClasses = 'bg-pink-100 text-pink-700';
          break;
      }
    }

    return (
      <Link href={href}>
        <a className={`${className} ${activeClasses} transition-colors`}>
          {children}
        </a>
      </Link>
    );
  };

  // Minimalist Theme Header
  if (theme === 'minimalist') {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <i className="fas fa-palette text-blue-500 text-xl"></i>
              <span className="text-xl font-semibold text-gray-900">ThemeSwitcher</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <NavLink href="/" page="home" className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium">
                Home
              </NavLink>
              <NavLink href="/about" page="about" className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium">
                About
              </NavLink>
              <NavLink href="/contact" page="contact" className="text-gray-700 hover:text-blue-500 px-3 py-2 text-sm font-medium">
                Contact
              </NavLink>
            </nav>

            {/* Theme Switcher */}
            <div className="relative">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
              >
                <i className="fas fa-brush text-sm"></i>
                <span className="text-sm font-medium">{getCurrentThemeLabel()}</span>
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              
              {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg animate-slide-down">
                  <div className="py-1">
                    {themeOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleThemeSelect(option.value)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <i className={`${option.icon} mr-2`}></i>
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              <i className="fas fa-bars text-gray-700"></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <NavLink href="/" page="home" className="block px-3 py-2 text-gray-700 hover:text-blue-500">
                Home
              </NavLink>
              <NavLink href="/about" page="about" className="block px-3 py-2 text-gray-700 hover:text-blue-500">
                About
              </NavLink>
              <NavLink href="/contact" page="contact" className="block px-3 py-2 text-gray-700 hover:text-blue-500">
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </header>
    );
  }

  // Dark Theme Header
  if (theme === 'dark') {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-700">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Sidebar Toggle & Logo */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleSidebar}
                className="text-gray-300 hover:text-white p-2"
              >
                <i className="fas fa-bars"></i>
              </button>
              <div className="flex items-center space-x-2">
                <i className="fas fa-palette text-yellow-500 text-xl"></i>
                <span className="text-xl font-playfair font-semibold text-white">ThemeSwitcher</span>
              </div>
            </div>

            {/* Theme Switcher */}
            <div className="relative">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <i className="fas fa-brush text-sm text-gray-300"></i>
                <span className="text-sm font-medium text-gray-300">{getCurrentThemeLabel()}</span>
                <i className="fas fa-chevron-down text-xs text-gray-300"></i>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-lg animate-slide-down">
                  <div className="py-1">
                    {themeOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleThemeSelect(option.value)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                      >
                        <i className={`${option.icon} mr-2`}></i>
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Vibrant Theme Header
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b-4 border-pink-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <i className="fas fa-palette text-pink-500 text-2xl"></i>
            <span className="text-2xl font-pacifico text-gray-800">ThemeSwitcher</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink href="/" page="home" className="text-gray-700 hover:text-pink-500 px-4 py-2 text-lg font-medium rounded-full hover:bg-pink-50">
              Home
            </NavLink>
            <NavLink href="/about" page="about" className="text-gray-700 hover:text-pink-500 px-4 py-2 text-lg font-medium rounded-full hover:bg-pink-50">
              About
            </NavLink>
            <NavLink href="/contact" page="contact" className="text-gray-700 hover:text-pink-500 px-4 py-2 text-lg font-medium rounded-full hover:bg-pink-50">
              Contact
            </NavLink>
          </nav>

          {/* Theme Switcher */}
          <div className="relative">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen(!isDropdownOpen);
              }}
              className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg"
            >
              <i className="fas fa-brush text-sm"></i>
              <span className="text-sm font-semibold">{getCurrentThemeLabel()}</span>
              <i className="fas fa-chevron-down text-xs"></i>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-pink-200 rounded-xl shadow-xl animate-slide-down">
                <div className="py-2">
                  {themeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleThemeSelect(option.value)}
                      className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-pink-50 transition-colors rounded-lg mx-2"
                    >
                      <i className={`${option.icon} mr-3 ${
                        option.value === 'minimalist' ? 'text-blue-500' :
                        option.value === 'dark' ? 'text-yellow-500' : 'text-pink-500'
                      }`}></i>
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <i className="fas fa-bars text-gray-700 text-xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-pink-50 to-purple-50 border-t border-pink-200">
          <div className="px-6 py-4 space-y-2">
            <NavLink href="/" page="home" className="block px-4 py-3 text-gray-700 hover:text-pink-500 rounded-lg hover:bg-white">
              Home
            </NavLink>
            <NavLink href="/about" page="about" className="block px-4 py-3 text-gray-700 hover:text-pink-500 rounded-lg hover:bg-white">
              About
            </NavLink>
            <NavLink href="/contact" page="contact" className="block px-4 py-3 text-gray-700 hover:text-pink-500 rounded-lg hover:bg-white">
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
