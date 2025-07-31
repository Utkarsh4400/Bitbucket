import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();

  // Minimalist Theme About
  if (theme === 'minimalist') {
    return (
      <div className="animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Our Themes</h1>
            <p className="text-xl text-gray-600">Learn about the philosophy behind each theme design</p>
          </div>

          <div className="space-y-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Design Philosophy</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Each theme in our application represents a different approach to user interface design. 
                From minimalist clean lines to bold dark interfaces and vibrant playful layouts, 
                we demonstrate how the same content can be presented in dramatically different ways.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-sun text-blue-500 text-2xl"></i>
                  </div>
                  <h3 className="font-semibold mb-2">Minimalist</h3>
                  <p className="text-sm text-gray-600">Clean, focused, distraction-free</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-moon text-yellow-400 text-2xl"></i>
                  </div>
                  <h3 className="font-semibold mb-2">Dark Sidebar</h3>
                  <p className="text-sm text-gray-600">Professional, sophisticated, efficient</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-rainbow text-white text-2xl"></i>
                  </div>
                  <h3 className="font-semibold mb-2">Vibrant</h3>
                  <p className="text-sm text-gray-600">Energetic, creative, engaging</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Features</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i>React Context API for state management</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i>TypeScript for type safety</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i>Responsive Tailwind CSS design</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i>Smooth theme transitions</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-3"></i>LocalStorage persistence</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Load Time</span>
                      <span>0.8s</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Theme Switch</span>
                      <span>0.3s</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dark Theme About
  if (theme === 'dark') {
    return (
      <div className="animate-fade-in">
        <div className="px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-playfair font-bold text-white mb-8">About Dark Theme</h1>
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The dark theme with sidebar layout represents a professional, enterprise-focused approach to UI design. 
              It emphasizes efficient navigation, reduced eye strain, and sophisticated visual hierarchy.
            </p>
            <p className="text-gray-300 mb-6">
              Perfect for applications that require extended usage periods and complex data management.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-4">Key Benefits</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <i className="fas fa-eye text-yellow-400 mr-3"></i>
                    Reduced eye strain in low-light conditions
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-battery-three-quarters text-yellow-400 mr-3"></i>
                    Better battery life on OLED displays
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-focus text-yellow-400 mr-3"></i>
                    Enhanced focus on content
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-palette text-yellow-400 mr-3"></i>
                    Professional aesthetic appeal
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-4">Use Cases</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <i className="fas fa-code text-yellow-400 mr-3"></i>
                    Development environments
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-chart-bar text-yellow-400 mr-3"></i>
                    Data dashboards
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-cog text-yellow-400 mr-3"></i>
                    Admin panels
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-desktop text-yellow-400 mr-3"></i>
                    Professional software
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vibrant Theme About
  return (
    <div className="animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-pacifico text-gray-800 mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            About Our Colorful World! 🌈
          </h1>
          <p className="text-xl text-gray-700">Where creativity meets technology in the most delightful way!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🎨 Creative Philosophy</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe that technology should be joyful, engaging, and full of personality. 
              Our vibrant theme brings color, energy, and playfulness to every interaction.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-purple-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">✨ Design Magic</h3>
            <p className="text-gray-600 leading-relaxed">
              Every element is designed to spark joy and inspire creativity. From bouncy animations 
              to delightful color combinations, we make every moment special.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-gradient-to-r from-pink-200 to-purple-200">
          <h3 className="text-3xl font-pacifico text-center text-gray-800 mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Why Choose Vibrant? 🎯
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-smile text-white text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Emotional Connection</h4>
              <p className="text-gray-600">Create positive emotional responses and memorable user experiences</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-white text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Inspire Creativity</h4>
              <p className="text-gray-600">Encourage users to think outside the box and explore new possibilities</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-white text-3xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Build Community</h4>
              <p className="text-gray-600">Foster engagement and create spaces where people love to spend time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
