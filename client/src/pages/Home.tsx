import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const { theme } = useTheme();
  const { data: products = [], isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-current mx-auto mb-4"></div>
          <p className="text-lg">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center text-red-600">
          <i className="fas fa-exclamation-triangle text-4xl mb-4"></i>
          <p className="text-lg">Failed to load products. Please try again later.</p>
        </div>
      </div>
    );
  }

  // Minimalist Theme Home
  if (theme === 'minimalist') {
    return (
      <div className="animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Multi-Theme Experience
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how themes can completely transform the look and feel of an application. 
              Switch between minimalist, dark sidebar, and vibrant card layouts to see the magic happen.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
              Explore Themes
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-palette text-blue-500 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Theme Switching</h3>
              <p className="text-gray-600">Seamlessly switch between different visual themes with persistent state management.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-mobile-alt text-green-500 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsive Design</h3>
              <p className="text-gray-600">Fully responsive layouts that work beautifully on all devices and screen sizes.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-code text-purple-500 text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Clean Architecture</h3>
              <p className="text-gray-600">Modern React architecture with TypeScript, Context API, and best practices.</p>
            </div>
          </div>

          {/* Products Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }

  // Dark Theme Home
  if (theme === 'dark') {
    const categories = [...new Set(products.map(product => product.category))];
    
    return (
      <div className="animate-fade-in">
        <div className="px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
              Sophisticated <span className="text-yellow-400">Dark Experience</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8 leading-relaxed">
              Immerse yourself in a professional, sidebar-driven interface that prioritizes content organization 
              and efficient navigation. Perfect for productivity-focused applications.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
              Explore Dashboard
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-playfair">Total Products</p>
                  <p className="text-3xl font-bold text-white">{products.length}</p>
                </div>
                <i className="fas fa-box text-yellow-400 text-2xl"></i>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-playfair">Categories</p>
                  <p className="text-3xl font-bold text-white">{categories.length}</p>
                </div>
                <i className="fas fa-tags text-blue-400 text-2xl"></i>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-playfair">Users</p>
                  <p className="text-3xl font-bold text-white">1.2k</p>
                </div>
                <i className="fas fa-users text-green-400 text-2xl"></i>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-playfair">Revenue</p>
                  <p className="text-3xl font-bold text-white">$24k</p>
                </div>
                <i className="fas fa-chart-line text-yellow-400 text-2xl"></i>
              </div>
            </div>
          </div>

          {/* Products Table/List */}
          <section>
            <h2 className="text-3xl font-playfair font-bold text-white mb-8">Product Catalog</h2>
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-playfair font-semibold text-white">All Products</h3>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors">
                    Add Product
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-700">
                {products.slice(0, 10).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // Vibrant Theme Home
  return (
    <div className="animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-pacifico text-gray-800 mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Vibrant & Fun!
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Experience the joy of colorful, card-based design that brings energy and creativity to every interaction. 
            Perfect for creative portfolios, lifestyle brands, and engaging user experiences.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            ✨ Start Exploring ✨
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-pink-200 hover:border-pink-400 transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="fas fa-heart text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Lovable Design</h3>
            <p className="text-gray-600 text-center">Every element is crafted with love and attention to create delightful user experiences.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-blue-200 hover:border-blue-400 transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="fas fa-magic text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Magical Interactions</h3>
            <p className="text-gray-600 text-center">Smooth animations and playful interactions that make every click feel magical.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-green-200 hover:border-green-400 transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="fas fa-rocket text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Super Fast</h3>
            <p className="text-gray-600 text-center">Lightning-fast performance that keeps up with your creative energy and ideas.</p>
          </div>
        </div>

        {/* Products Gallery */}
        <section>
          <h2 className="text-4xl font-pacifico text-center text-gray-800 mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Amazing Products! 🎉
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
