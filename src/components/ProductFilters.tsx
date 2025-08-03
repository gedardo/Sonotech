import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProductFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export function ProductFilters({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  sortBy, 
  onSortChange 
}: ProductFiltersProps) {
  const [isCategoriesOpen, setCategoriesOpen] = useState(true);
  const [isBrandsOpen, setBrandsOpen] = useState(true);

  const categoryData = [
    { name: 'Todos', count: 0 },
    { name: 'Amplificadores', count: 28 },
    { name: 'Audio profesional', count: 81 },
    { name: 'Alta fidelidad', count: 73 },
    { name: 'Cine en casa', count: 68 },
    { name: 'Micrófono', count: 60 },
    { name: 'Accesorios', count: 42 },
    { name: 'DJ', count: 31 },
    { name: 'Receptor', count: 19 },
    { name: 'General', count: 15 },
    { name: 'Cables', count: 13 },
    { name: 'Auriculares', count: 13 },
    { name: 'Tocadiscos', count: 8 },
    { name: 'Reproductor de CD', count: 3 },
    { name: 'Red', count: 3 },
    { name: 'Convertidor', count: 1 }
  ];

  const brands = [
    'Denon', 'Polk Audio', 'Bowers & Wilkins', 'Shure', 'Pioneer DJ', 
    'Klipsch', 'Sony', 'Audio-Technica', 'Yamaha', 'JBL'
  ];

  return (
    <div className="w-80 bg-white border-r border-gray-200 p-6 h-full overflow-y-auto">
      {/* Sort Dropdown */}
      <div className="mb-8">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="name">Ordenar por nombre</option>
          <option value="price-asc">Precio: menor a mayor</option>
          <option value="price-desc">Precio: mayor a menor</option>
          <option value="newest">Más recientes</option>
        </select>
      </div>

      {/* Categories Section */}
      <div className="mb-8">
        <button
          onClick={() => setCategoriesOpen(!isCategoriesOpen)}
          className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-4"
        >
          <span>Categorías</span>
          {isCategoriesOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        
        {isCategoriesOpen && (
          <div className="space-y-2">
            {categoryData.map((category) => (
              <button
                key={category.name}
                onClick={() => onCategoryChange(category.name === 'Todos' ? '' : category.name)}
                className={`flex items-center justify-between w-full text-left px-2 py-1 rounded text-sm transition-colors ${
                  (selectedCategory === '' && category.name === 'Todos') || 
                  selectedCategory === category.name
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span>{category.name}</span>
                <span className="text-gray-400">({category.count})</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Brands Section */}
      <div className="mb-8">
        <button
          onClick={() => setBrandsOpen(!isBrandsOpen)}
          className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-4"
        >
          <span>Marcas</span>
          {isBrandsOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        
        {isBrandsOpen && (
          <div className="space-y-2">
            {brands.map((brand) => (
              <button
                key={brand}
                className="block w-full text-left px-2 py-1 rounded text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {brand}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}