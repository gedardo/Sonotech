import React from 'react';
import { Eye, Star } from 'lucide-react';
import { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const handleWhatsApp = () => {
    const phone = "595984123456";
    const message = `Hola! Me interesa el producto: ${product.name} - Referencia: ${product.sku} - $${product.price.toLocaleString()}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className={`group bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden ${
      compact 
        ? 'rounded-lg' 
        : 'rounded-xl shadow-md hover:shadow-xl'
    }`}>
      <div className="relative overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            compact ? 'h-48' : 'h-64'
          }`}
        />
        
        {/* Reference Number */}
        <div className="absolute top-2 left-2 bg-white bg-opacity-90 px-2 py-1 rounded text-xs text-gray-600">
          Referencia: {product.sku || product.id.slice(-5).toUpperCase()}
        </div>
      </div>

      <div className={compact ? 'p-4' : 'p-6'}>
        {/* Brand */}
        <p className="text-xs text-primary-600 font-medium mb-1">
          {product.brand}
        </p>
        
        <h3 className="text-sm font-medium text-gray-900 mb-3 text-center leading-tight min-h-[2.5rem] flex items-center justify-center">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center justify-center space-x-1 mb-2">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="text-xs text-gray-500">({product.review_count})</span>
        </div>
        
        <div className="text-center space-y-3">
        {/*  <div className="text-lg font-bold text-gray-900">
            ${product.price.toLocaleString()}
          </div>*/}
          
          <div className="space-y-2">
            <Link
              to={`/producto/${product.id}`}
              className="block w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded font-medium transition-colors text-sm"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}