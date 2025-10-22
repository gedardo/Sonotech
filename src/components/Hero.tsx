import { ArrowRight, Play, Volume2 } from 'lucide-react';

export function Hero() {
  const handleWhatsApp = () => {
    const phone = "595984123456"; // Número de WhatsApp de ejemplo
    const message = "Hola! Me interesa conocer más sobre los equipos audiovisuales de Levelpro.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative bg-gradient-to-r from-primary-800 via-primary-700 to-primary-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                El Sonido
                <span className="block bg-gradient-to-r from-primary-300 to-primary-100 bg-clip-text text-transparent">
                  Perfecto
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-primary-100 max-w-2xl">
                Equipos audiovisuales profesionales para eventos, estudios y entretenimiento. 
                Calidad garantizada, servicio excepcional.
              </p>
            </div>

            {/*<div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsApp}
                className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Consultar por WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Ver Demo</span>
              </button>
            </div>*/}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-600">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300">500+</div>
                <div className="text-primary-200">Eventos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300">15+</div>
                <div className="text-primary-200">Años</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-300">1000+</div>
                <div className="text-primary-200">Clientes</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipo de sonido profesional"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Volume2 className="w-8 h-8 text-primary-500" />
                  <div>
                    <div className="font-bold text-lg">Audio Pro</div>
                    <div className="text-gray-600">Calidad Premium</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-primary-400 to-primary-300 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-r from-primary-400 to-primary-200 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}