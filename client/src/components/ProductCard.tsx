import React from 'react';
import { Product } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { theme } = useTheme();

  // Minimalist Theme Product Card
  if (theme === 'minimalist') {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="p-6">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-blue-500">${product.price}</span>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Dark Theme Product List Item
  if (theme === 'dark') {
    return (
      <div className="p-6 hover:bg-gray-750 transition-colors border-b border-gray-700 last:border-b-0">
        <div className="flex items-center space-x-4">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-16 h-16 rounded-lg object-cover"
            loading="lazy"
          />
          <div className="flex-1">
            <h4 className="text-white font-semibold line-clamp-1">{product.title}</h4>
            <p className="text-gray-400 text-sm">{product.category}</p>
          </div>
          <div className="text-right">
            <p className="text-yellow-400 font-bold text-lg">${product.price}</p>
            <p className="text-gray-400 text-sm">In Stock</p>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>
    );
  }

  // Vibrant Theme Product Card
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-3 border-4 border-transparent hover:border-pink-200">
      <img 
        src={product.image} 
        alt={product.title}
        className="w-full h-56 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{product.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            ${product.price}
          </span>
          <button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            🛒 Add
          </button>
        </div>
      </div>
      <div className="px-6 pb-6">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < Math.floor(product.rating.rate) ? 'text-yellow-400' : 'text-gray-300'}>
              <i className="fas fa-star"></i>
            </span>
          ))}
          <span className="text-gray-600 text-sm ml-2">({product.rating.count} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
