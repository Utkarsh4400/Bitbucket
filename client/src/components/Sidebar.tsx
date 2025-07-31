import React from 'react';
import { Link, useLocation } from 'wouter';
import { useTheme } from '../contexts/ThemeContext';
import { useProducts } from '../hooks/useProducts';

const Sidebar: React.FC = () => {
  const { theme, isSidebarOpen } = useTheme();
  const [location] = useLocation();
  const { data: products = [] } = useProducts();
  
  const currentPage = location.slice(1) || 'home';

  // Only show sidebar for dark theme
  if (theme !== 'dark') {
    return null;
  }

  const NavLink: React.FC<{ href: string; page: string; icon: string; children: React.ReactNode }> = ({ 
    href, page, icon, children 
  }) => {
    const isActive = currentPage === page;
    const activeClasses = isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700';

    return (
      <Link href={href}>
        <a className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeClasses}`}>
          <i className={icon}></i>
          <span className="font-playfair">{children}</span>
        </a>
      </Link>
    );
  };

  // Get unique categories
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <aside className={`fixed left-0 top-16 h-full w-64 bg-gray-800 border-r border-gray-700 z-40 transform transition-transform duration-300 ${
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="p-6">
        <nav className="space-y-4">
          <NavLink href="/" page="home" icon="fas fa-home">
            Home
          </NavLink>
          <NavLink href="/about" page="about" icon="fas fa-info-circle">
            About
          </NavLink>
          <NavLink href="/contact" page="contact" icon="fas fa-envelope">
            Contact
          </NavLink>
        </nav>

        <div className="mt-12 p-4 bg-gray-700 rounded-lg">
          <h3 className="text-white font-playfair font-semibold mb-2">Quick Stats</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex justify-between">
              <span>Products</span>
              <span className="text-yellow-400">{products.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Categories</span>
              <span className="text-yellow-400">{categories.length}</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
