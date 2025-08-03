import React, { useState } from 'react';
import { ChevronDown, Mic, Music, Video, Settings, Users, Headphones, CheckCircle, MessageCircle } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  features: string[];
  whatsappMessage: string;
}

export function ServicesAccordion() {
  const [openService, setOpenService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'sonorizacion',
      icon: Mic,
      title: 'Sonorización de Eventos',
      subtitle: 'Audio profesional para todo tipo de eventos',
      description: 'Brindamos servicios completos de sonorización para eventos corporativos, bodas, conciertos, conferencias y celebraciones. Nuestro equipo de técnicos especializados garantiza la mejor calidad de audio.',
      benefits: [
        'Cobertura de audio uniforme en todo el espacio',
        'Técnicos especializados incluidos',
        'Equipos de última generación',
        'Backup de equipos por seguridad',
        'Instalación y desmontaje incluido'
      ],
      features: [
        'Sistemas de línea de arrays',
        'Micrófonos inalámbricos profesionales',
        'Consolas digitales avanzadas',
        'Monitoreo en tiempo real',
        'Soporte técnico durante el evento'
      ],
      whatsappMessage: 'Hola! Me interesa obtener más información sobre el servicio de Sonorización de Eventos de Sonotech.'
    },
    {
      id: 'alquiler',
      icon: Music,
      title: 'Alquiler de Equipos',
      subtitle: 'Equipos audiovisuales para tus proyectos',
      description: 'Ofrecemos alquiler de equipos audiovisuales de alta calidad para eventos, producciones, estudios y presentaciones. Desde amplificadores hasta sistemas completos de PA.',
      benefits: [
        'Equipos siempre actualizados',
        'Precios competitivos por día/semana/mes',
        'Entrega y retiro sin costo adicional',
        'Soporte técnico incluido',
        'Seguro contra daños incluido'
      ],
      features: [
        'Amplificadores de potencia',
        'Parlantes y subwoofers',
        'Micrófonos y accesorios',
        'Consolas de mezcla',
        'Cables y conectores'
      ],
      whatsappMessage: 'Hola! Me gustaría conocer las opciones de alquiler de equipos audiovisuales de Sonotech.'
    },
    {
      id: 'audiovisual',
      icon: Video,
      title: 'Equipos Audiovisuales',
      subtitle: 'Soluciones completas de video y proyección',
      description: 'Proporcionamos equipos de video profesional, proyectores, pantallas LED y sistemas de videoconferencia para presentaciones corporativas, eventos y producciones.',
      benefits: [
        'Imagen de alta definición garantizada',
        'Sistemas escalables según necesidad',
        'Integración con audio profesional',
        'Operadores especializados disponibles',
        'Configuración plug-and-play'
      ],
      features: [
        'Proyectores 4K y Full HD',
        'Pantallas LED modulares',
        'Sistemas de videoconferencia',
        'Cámaras profesionales',
        'Streaming en vivo'
      ],
      whatsappMessage: 'Hola! Necesito información sobre equipos audiovisuales para mi evento. ¿Pueden ayudarme?'
    },
    {
      id: 'instalacion',
      icon: Settings,
      title: 'Instalación y Setup',
      subtitle: 'Instalación profesional de sistemas de audio',
      description: 'Realizamos instalaciones permanentes y temporales de sistemas de audio, desde estudios de grabación hasta sistemas de sonido ambiental para locales comerciales.',
      benefits: [
        'Diseño acústico personalizado',
        'Instalación certificada',
        'Garantía extendida en instalación',
        'Mantenimiento preventivo incluido',
        'Capacitación de uso incluida'
      ],
      features: [
        'Análisis acústico del espacio',
        'Cableado estructurado',
        'Sistemas de control automatizado',
        'Integración con domótica',
        'Documentación técnica completa'
      ],
      whatsappMessage: 'Hola! Me interesa el servicio de instalación de sistemas de audio. ¿Pueden hacer una evaluación?'
    },
    {
      id: 'operadores',
      icon: Users,
      title: 'Operadores Técnicos',
      subtitle: 'Personal especializado para tus eventos',
      description: 'Contamos con técnicos certificados para operar equipos durante eventos, garantizando el funcionamiento perfecto de todos los sistemas audiovisuales.',
      benefits: [
        'Técnicos certificados y experimentados',
        'Conocimiento de múltiples marcas',
        'Resolución rápida de problemas',
        'Coordinación con otros proveedores',
        'Disponibilidad 24/7 durante eventos'
      ],
      features: [
        'Operación de consolas digitales',
        'Manejo de sistemas RF',
        'Coordinación de audio/video',
        'Troubleshooting en tiempo real',
        'Reportes post-evento'
      ],
      whatsappMessage: 'Hola! Necesito operadores técnicos para mi evento. ¿Qué disponibilidad tienen?'
    },
    {
      id: 'estudio',
      icon: Headphones,
      title: 'Estudio de Grabación',
      subtitle: 'Equipos para producción musical profesional',
      description: 'Suministramos equipos especializados para estudios de grabación, desde interfaces de audio hasta monitores de estudio y tratamiento acústico.',
      benefits: [
        'Equipos de grado profesional',
        'Asesoramiento en diseño de estudio',
        'Soporte técnico especializado',
        'Actualizaciones de software incluidas',
        'Garantía extendida en equipos'
      ],
      features: [
        'Interfaces de audio multipista',
        'Monitores de estudio activos',
        'Micrófonos de condensador',
        'Tratamiento acústico',
        'Software de producción'
      ],
      whatsappMessage: 'Hola! Estoy montando un estudio de grabación y necesito asesoramiento sobre equipos.'
    }
  ];

  const toggleService = (serviceId: string) => {
    setOpenService(openService === serviceId ? null : serviceId);
  };

  const handleWhatsApp = (message: string) => {
    const phone = "595984123456";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales en audio y video para llevar tus eventos y proyectos al siguiente nivel
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {services.map((service) => {
            const isOpen = openService === service.id;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                {/* Header */}
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-6 grid md:grid-cols-2 gap-8">
                      {/* Left Column */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            Descripción del Servicio
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            Beneficios Principales
                          </h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            Características Técnicas
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">
                            ¿Interesado en este servicio?
                          </h4>
                          <p className="text-gray-600 mb-4">
                            Contáctanos para recibir una cotización personalizada y asesoramiento especializado.
                          </p>
                          <button
                            onClick={() => handleWhatsApp(service.whatsappMessage)}
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 w-full justify-center"
                          >
                            <MessageCircle className="w-5 h-5" />
                            <span>Consultar por WhatsApp</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-600 mb-6">
              Contamos con soluciones personalizadas para necesidades específicas. 
              Nuestro equipo está listo para asesorarte.
            </p>
            <button
              onClick={() => handleWhatsApp('Hola! Me gustaría obtener información sobre servicios personalizados de Sonotech.')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 mx-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contactar Ahora</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}