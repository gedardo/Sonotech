import { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import videoSrc from '../assets/Video.mp4';

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay failed, which is expected in most browsers
      });
    }
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };


  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted={isMuted}
          loop
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Content 
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-primary-300 drop-shadow-lg">
              Equipos Profesionales
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Levelpro
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Descubre nuestra línea completa de equipos audiovisuales para eventos profesionales. 
              Más de 15 años brindando soluciones audiovisuales para todo tipo de eventos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsApp}
                className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl"
              >
                <span>Consultar por WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-white text-white hover:bg-white hover:text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl">
                <Play className="w-5 h-5" />
                <span>Ver Catálogo</span>
              </button>
            </div>
          </div>
        </div>
      </div>*/}

      {/* Video Controls */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          onClick={toggleMute}
          className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
      </div>

      {/* Scroll Indicator 
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium drop-shadow-md">Desliza</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>*/}

      {/* Stats Overlay */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white border-opacity-30">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-300">500+</div>
            <div className="text-white text-sm">Eventos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-300">15+</div>
            <div className="text-white text-sm">Años</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-300">1000+</div>
            <div className="text-white text-sm">Clientes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
