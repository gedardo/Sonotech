import { useState } from 'react';
import { Menu, X, User, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SmartLogo } from './Logo';

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/productos?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      transparent 
        ? 'bg-transparent backdrop-blur-md' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <SmartLogo 
              backgroundColor={transparent ? 'transparent' : 'light'}
              size="xl"
              className="group-hover:scale-110 transition-transform duration-300"
            />
            {/*<span className={`text-2xl font-bold transition-all duration-300 ${
              transparent 
                ? 'text-white drop-shadow-lg' 
                : 'text-primary-500'
            }`}>
              Levelpro
            </span>*/}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors ${
              transparent 
                ? 'text-white hover:text-primary-300 drop-shadow-md' 
                : 'text-accent-dark hover:text-primary-500'
            }`}>
              Inicio
            </Link>
            <Link to="/productos" className={`font-medium transition-colors ${
              transparent 
                ? 'text-white hover:text-primary-300 drop-shadow-md' 
                : 'text-accent-dark hover:text-primary-500'
            }`}>
              Productos
            </Link>
            <Link to="/servicios" className={`font-medium transition-colors ${
              transparent 
                ? 'text-white hover:text-primary-300 drop-shadow-md' 
                : 'text-accent-dark hover:text-primary-500'
            }`}>
              Servicios
            </Link>
            <Link to="/nosotros" className={`font-medium transition-colors ${
              transparent 
                ? 'text-white hover:text-primary-300 drop-shadow-md' 
                : 'text-accent-dark hover:text-primary-500'
            }`}>
              Nosotros
            </Link>
            <Link to="/contacto" className={`font-medium transition-colors ${
              transparent 
                ? 'text-white hover:text-primary-300 drop-shadow-md' 
                : 'text-accent-dark hover:text-primary-500'
            }`}>
              Contacto
            </Link>
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className={`w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 ${
                transparent ? 'text-gray-300' : 'text-gray-400'
              }`} />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                className={`pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                  transparent 
                    ? 'bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white placeholder-gray-300' 
                    : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </form>
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
                  : 'bg-primary-500 text-white hover:bg-primary-600'
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
                ? 'text-white hover:text-primary-300' 
                : 'text-gray-700 hover:text-primary-500'
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
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className={`w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  transparent ? 'text-gray-300' : 'text-gray-400'
                }`} />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                    transparent 
                      ? 'bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white placeholder-gray-300' 
                      : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>
            </form>

            <nav className="flex flex-col space-y-4 mt-4">
              <Link to="/" className={`font-medium transition-colors ${
                transparent ? 'text-white hover:text-primary-300' : 'text-gray-700 hover:text-primary-500'
              }`}>
                Inicio
              </Link>
              <Link to="/productos" className={`font-medium transition-colors ${
                transparent ? 'text-white hover:text-primary-300' : 'text-gray-700 hover:text-primary-500'
              }`}>
                Productos
              </Link>
              <Link to="/servicios" className={`font-medium transition-colors ${
                transparent ? 'text-white hover:text-primary-300' : 'text-gray-700 hover:text-primary-500'
              }`}>
                Servicios
              </Link>
              <Link to="/nosotros" className={`font-medium transition-colors ${
                transparent ? 'text-white hover:text-primary-300' : 'text-gray-700 hover:text-primary-500'
              }`}>
                Nosotros
              </Link>
              <Link to="/contacto" className={`font-medium transition-colors ${
                transparent ? 'text-white hover:text-primary-300' : 'text-gray-700 hover:text-primary-500'
              }`}>
                Contacto
              </Link>
              <Link to="/admin" className={`font-medium transition-colors ${
                transparent ? 'text-primary-300 hover:text-white' : 'text-primary-500 hover:text-primary-700'
              }`}>
                Administración
              </Link>
            </nav>
          </div>
        )}
      </div>
      {/* Audio spectrum border */}
      <div className={`relative h-[16px] overflow-hidden ${transparent ? 'opacity-70' : 'opacity-90'}`}>
        <div className="sonotech-spectrum">
          <svg viewBox="0 0 200 16" preserveAspectRatio="none" className="sonotech-wave-layer">
            <path
              className={`sonotech-wave-path ${transparent ? 'sonotech-wave--light' : 'sonotech-wave--dark'}`}
              d="M0 8 C 10 2, 14 2, 20 8 S 30 14, 40 8 S 50 2, 60 8 S 70 14, 80 8 S 90 2, 100 8 S 110 14, 120 8 S 130 2, 140 8 S 150 14, 160 8 S 170 2, 180 8 S 190 14, 200 8"
              />
          </svg>
          <svg viewBox="0 0 200 16" preserveAspectRatio="none" className="sonotech-wave-layer sonotech-wave-layer--slow">
            <path
              className={`sonotech-wave-path ${transparent ? 'sonotech-wave--light-secondary' : 'sonotech-wave--dark-secondary'}`}
              d="M0 8 C 18 3, 36 3, 54 8 S 90 13, 108 8 S 144 3, 162 8 S 198 13, 216 8"
            />
          </svg>
          <svg viewBox="0 0 200 16" preserveAspectRatio="none" className="sonotech-wave-layer sonotech-wave-layer--slowest">
            <path
              className={`sonotech-wave-path ${transparent ? 'sonotech-wave--light-tertiary' : 'sonotech-wave--dark-tertiary'}`}
              d="M0 8 C 24 4, 48 4, 72 8 S 120 12, 144 8 S 192 4, 216 8"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}