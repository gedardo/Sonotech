import  { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      image: "https://qmlzpanjqsxozucxdegr.supabase.co/storage/v1/object/sign/imagenes/slider2.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yZGRmNjdjZC03ZDRmLTQ1NGItODY0NC1iOThlNjhkM2NiYjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZW5lcy9zbGlkZXIyLndlYnAiLCJpYXQiOjE3NTMzNzE5NTcsImV4cCI6MTc4NDkwNzk1N30.w79MxNboAjuMvDmlbAIRtgzETTQDTX-VYX5A9JFx0Ck",
      title: "Sonotech",
      subtitle: "Equipos Profesionales",
      description: "Descubre nuestra línea completa de equipos audiovisuales para eventos profesionales"
    },
    {
      id: 2,
      image: "https://qmlzpanjqsxozucxdegr.supabase.co/storage/v1/object/sign/imagenes/slider3.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yZGRmNjdjZC03ZDRmLTQ1NGItODY0NC1iOThlNjhkM2NiYjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZW5lcy9zbGlkZXIzLndlYnAiLCJpYXQiOjE3NTMzNzI4MDUsImV4cCI6MTc4NDkwODgwNX0.5ukptIBf_42UW-8ZAvwDqqW7cF9c6LTn1C7ZNRsxab8",
      title: "Sonorización de Eventos",
      subtitle: "Experiencia Garantizada",
      description: "Más de 15 años brindando soluciones audiovisuales para todo tipo de eventos"
    },
    {
      id: 3,
      image: "https://qmlzpanjqsxozucxdegr.supabase.co/storage/v1/object/sign/imagenes/slider4.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yZGRmNjdjZC03ZDRmLTQ1NGItODY0NC1iOThlNjhkM2NiYjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZW5lcy9zbGlkZXI0LndlYnAiLCJpYXQiOjE3NTMzNzIwMDEsImV4cCI6MTc4NDkwODAwMX0.jFLkuqCoiNZfFAAElZ8xqNz_KYHvCu5BtSP8RBzSSvs",
      title: "Tecnología Avanzada",
      subtitle: "Innovación Constante",
      description: "Los equipos más modernos del mercado para resultados excepcionales"
    },
    {
      id: 4,
      image: "https://qmlzpanjqsxozucxdegr.supabase.co/storage/v1/object/sign/imagenes/slider5.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yZGRmNjdjZC03ZDRmLTQ1NGItODY0NC1iOThlNjhkM2NiYjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZW5lcy9zbGlkZXI1LndlYnAiLCJpYXQiOjE3NTMzNzIwMjAsImV4cCI6MTc4NDkwODAyMH0.poNUDoaiBBKvBXpv5In-dUWvzg9wRq78X8LMIOvi9dE",
      title: "Servicio Integral",
      subtitle: "Soluciones Completas",
      description: "Desde la instalación hasta el soporte técnico, te acompañamos en cada paso"
    },
    {
      id: 5,
      image: "https://qmlzpanjqsxozucxdegr.supabase.co/storage/v1/object/sign/imagenes/slider1.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yZGRmNjdjZC03ZDRmLTQ1NGItODY0NC1iOThlNjhkM2NiYjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZW5lcy9zbGlkZXIxLndlYnAiLCJpYXQiOjE3NTMzNzIwMzEsImV4cCI6MTc4NDkwODAzMX0.eLVk286LNd5F8S357fLM_O5AtSSQQiFuvMGlaQT_2uk",
      title: "Todo lo que necesitas",
      subtitle: "Para tu evento",
      description: "Equipos de sonido, iluminación, pantallas, proyectores, etc."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = () => {
    const phone = "595984123456";
    const message = "Hola! Me interesa conocer más sobre los equipos audiovisuales de Sonotech.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              
              {/* Content */}
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white max-w-4xl mx-auto px-4">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-blue-300">
                    {slide.subtitle}
                  </h2>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   {/* <button
                      onClick={handleWhatsApp}
                      className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>Consultar por WhatsApp</span>
                    </button>
                    
                    <button className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                      <span>Ver Catálogo</span>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows 
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>*/}

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator 
      <div className="absolute bottom-8 right-8 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">Desliza</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>*/}
    </section>
  );
}