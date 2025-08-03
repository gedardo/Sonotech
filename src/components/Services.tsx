import React from 'react';
import { Mic, Music, Video, Settings, Users, Headphones } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Mic,
      title: 'Sonorización de Eventos',
      description: 'Equipos profesionales para conciertos, conferencias y eventos corporativos'
    },
    {
      icon: Music,
      title: 'Alquiler de Equipos',
      description: 'Amplificadores, parlantes, micrófonos y más para tus eventos'
    },
    {
      icon: Video,
      title: 'Equipos Audiovisuales',
      description: 'Proyectores, pantallas LED, sistemas de video profesional'
    },
    {
      icon: Settings,
      title: 'Instalación y Setup',
      description: 'Instalación profesional y configuración de sistemas de audio'
    },
    {
      icon: Users,
      title: 'Operadores Técnicos',
      description: 'Personal especializado para operar equipos durante eventos'
    },
    {
      icon: Headphones,
      title: 'Estudio de Grabación',
      description: 'Equipos para estudios de grabación y producción musical'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones completas en audio y video para todo tipo de eventos y necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}