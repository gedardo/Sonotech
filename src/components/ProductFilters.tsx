import { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Product } from '../types';

interface ProductFiltersProps {
  products: Product[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export function ProductFilters({ 
  products, 
  selectedCategory, 
  onCategoryChange, 
  selectedBrand,
  onBrandChange,
  sortBy, 
  onSortChange 
}: ProductFiltersProps) {
  const [isCategoriesOpen, setCategoriesOpen] = useState(true);
  const [isBrandsOpen, setBrandsOpen] = useState(true);

  // Generar categorías y marcas desde los productos reales
  const categoryData = useMemo(() => {
    const categoryCounts: Record<string, number> = {};
    
    products.forEach(product => {
      if (product.category) {
        categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
      }
    });

    const categoriesWithCounts = Object.entries(categoryCounts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    return [
      { name: 'Todos', count: products.length },
      ...categoriesWithCounts
    ];
  }, [products]);

  const brands = useMemo(() => {
    const brandCounts: Record<string, number> = {};
    
    products.forEach(product => {
      if (product.brand) {
        brandCounts[product.brand] = (brandCounts[product.brand] || 0) + 1;
      }
    });

    return Object.entries(brandCounts)
      .map(([brand, count]) => ({ brand, count }))
      .sort((a, b) => b.count - a.count);
  }, [products]);

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
            <button
              onClick={() => onBrandChange('')}
              className={`flex items-center justify-between w-full text-left px-2 py-1 rounded text-sm transition-colors ${
                selectedBrand === ''
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <span>Todas las marcas</span>
              <span className="text-gray-400">({products.length})</span>
            </button>
            {brands.map(({ brand, count }) => (
              <button
                key={brand}
                onClick={() => onBrandChange(brand)}
                className={`flex items-center justify-between w-full text-left px-2 py-1 rounded text-sm transition-colors ${
                  selectedBrand === brand
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span>{brand}</span>
                <span className="text-gray-400">({count})</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}