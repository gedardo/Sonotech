import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const handleWhatsApp = () => {
    const phone = "543813698748";
    const message = "Hola! Me gustaría obtener más información sobre Sonotech.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-xl font-bold">Sonotech</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Líderes en equipos audiovisuales en Argentina. Más de 15 años brindando 
              soluciones profesionales para eventos y entretenimiento.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Alquiler de Equipos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sonorización</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Iluminación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instalación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mantenimiento</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Productos</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Amplificadores</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Parlantes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Micrófonos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consolas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Proyectores</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>San Miguel de Tucumán, Argentina</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <button 
                  onClick={handleWhatsApp}
                  className="hover:text-white transition-colors"
                >
                  +54 381 369-8748
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400" />
                <a href="mailto:info@sonotech.com.py" className="hover:text-white transition-colors">
                  info@sonotech.com.ar
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 GrupoTecnoa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}