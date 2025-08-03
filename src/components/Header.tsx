import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      transparent 
        ? 'bg-transparent backdrop-blur-md' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-14 h-10 flex items-center justify-center">
            <img
                src="https://qmlzpanjqsxozucxdegr.supabase.co/storage/v1/object/sign/imagenes/logo.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yZGRmNjdjZC03ZDRmLTQ1NGItODY0NC1iOThlNjhkM2NiYjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZW5lcy9sb2dvLmpwZyIsImlhdCI6MTc1MzM2ODk0NCwiZXhwIjoxNzg0OTA0OTQ0fQ.wNv1qYmaQtZ_NVtL9hgRrKS0vqiY9Kvx_NVw37_aJrs"
                alt="Logo Sonotech"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <span className={`text-2xl font-bold ${
              transparent 
                ? 'text-white drop-shadow-lg' 
                : 'bg-black bg-clip-text text-transparent'
            }`}>
              Sonotech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors ${
              transparent 
                ? 'text-white hover:text-blue-300 drop-shadow-md' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              Inicio
            </Link>
            <Link to="/productos" className={`font-medium transition-colors ${
              transparent 
                ? 'text-white hover:text-blue-300 drop-shadow-md' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              Productos
            </Link>
            <Link to="/servicios" className={`font-medium transition-colors ${
              transparent 
                ? 'text-white hover:text-blue-300 drop-shadow-md' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              Servicios
            </Link>
            <Link to="/nosotros" className={`font-medium transition-colors ${
              transparent 
                ? 'text-white hover:text-blue-300 drop-shadow-md' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              Nosotros
            </Link>
            <Link to="/contacto" className={`font-medium transition-colors ${
              transparent 
                ? 'text-white hover:text-blue-300 drop-shadow-md' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              Contacto
            </Link>
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className={`w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 ${
                transparent ? 'text-gray-300' : 'text-gray-400'
              }`} />
              <input
                type="text"
                placeholder="Buscar productos..."
                className={`pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  transparent 
                    ? 'bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white placeholder-gray-300' 
                    : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
            {/*<button className={`relative p-2 transition-colors ${
              transparent 
                ? 'text-white hover:text-blue-300' 
                : 'text-gray-700 hover:text-blue-600'
            }`}>
              <ShoppingCart className="w-6 h-6" /> 
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>*/}
            <Link 
              to="/admin" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                transparent 
                  ? 'bg-white bg-opacity-20 backdrop-blur-sm text-white hover:bg-opacity-30 border border-white border-opacity-30' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Admin</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 transition-colors ${
              transparent 
                ? 'text-white hover:text-blue-300' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 border-t ${
            transparent 
              ? 'border-white border-opacity-30 bg-black bg-opacity-50 backdrop-blur-md rounded-lg' 
              : 'border-gray-200'
          }`}>
            <nav className="flex flex-col space-y-4 mt-4">
              <Link to="/" className={`font-medium transition-colors ${
                transparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'
              }`}>
                Inicio
              </Link>
              <Link to="/productos" className={`font-medium transition-colors ${
                transparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'
              }`}>
                Productos
              </Link>
              <Link to="/servicios" className={`font-medium transition-colors ${
                transparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'
              }`}>
                Servicios
              </Link>
              <Link to="/nosotros" className={`font-medium transition-colors ${
                transparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'
              }`}>
                Nosotros
              </Link>
              <Link to="/contacto" className={`font-medium transition-colors ${
                transparent ? 'text-white hover:text-blue-300' : 'text-gray-700 hover:text-blue-600'
              }`}>
                Contacto
              </Link>
              <Link to="/admin" className={`font-medium transition-colors ${
                transparent ? 'text-blue-300 hover:text-white' : 'text-blue-600 hover:text-blue-800'
              }`}>
                Administración
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}