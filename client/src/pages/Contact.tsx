import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  // Minimalist Theme Contact
  if (theme === 'minimalist') {
    return (
      <div className="animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600">Have questions about our theme system? We'd love to hear from you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={6} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                    placeholder="Tell us about your theme preferences..."
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-envelope text-blue-500"></i>
                    <span className="text-gray-600">hello@themeswitcher.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-phone text-blue-500"></i>
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-map-marker-alt text-blue-500"></i>
                    <span className="text-gray-600">San Francisco, CA</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dark Theme Contact
  if (theme === 'dark') {
    return (
      <div className="animate-fade-in">
        <div className="px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-playfair font-bold text-white mb-8">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-playfair font-semibold text-white mb-6">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <textarea 
                  rows={6} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..." 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <button 
                  type="submit" 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-playfair font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-yellow-400"></i>
                  <span>contact@darktheme.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-yellow-400"></i>
                  <span>+1 (555) 987-6543</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-map-marker-alt text-yellow-400"></i>
                  <span>New York, NY</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                <h4 className="text-lg font-playfair font-semibold text-white mb-3">Response Time</h4>
                <p className="text-gray-300 text-sm">We typically respond within 24 hours during business days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vibrant Theme Contact
  return (
    <div className="animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-pacifico text-gray-800 mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Let's Chat! 💬
          </h1>
          <p className="text-xl text-gray-700">We'd love to hear from you and spread some colorful joy!</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-pink-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">Your Name ✨</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-4 border-pink-200 rounded-2xl focus:border-pink-400 focus:outline-none transition-colors text-lg" 
                  placeholder="Tell us your awesome name!"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">Email Magic 📧</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-4 border-purple-200 rounded-2xl focus:border-purple-400 focus:outline-none transition-colors text-lg" 
                  placeholder="your.awesome@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">Your Message 💕</label>
              <textarea 
                rows={6} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border-4 border-blue-200 rounded-2xl focus:border-blue-400 focus:outline-none transition-colors text-lg" 
                placeholder="Share your colorful thoughts with us!"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-4 rounded-2xl text-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🚀 Send Awesome Message! 🚀
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-pacifico text-gray-800 mb-6">Find Us Here! 📍</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-200">
              <i className="fas fa-envelope text-pink-500 text-3xl mb-3"></i>
              <h4 className="font-bold text-gray-800 mb-2">Email Us</h4>
              <p className="text-gray-600">hello@vibranttheme.com</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-purple-200">
              <i className="fas fa-phone text-purple-500 text-3xl mb-3"></i>
              <h4 className="font-bold text-gray-800 mb-2">Call Us</h4>
              <p className="text-gray-600">+1 (555) VIBRANT</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-200">
              <i className="fas fa-map-marker-alt text-blue-500 text-3xl mb-3"></i>
              <h4 className="font-bold text-gray-800 mb-2">Visit Us</h4>
              <p className="text-gray-600">Rainbow City, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
