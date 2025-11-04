import { MapPin, Calendar, Users, Award, ExternalLink } from 'lucide-react';
import { SmartLogo } from '../components/Logo';

export function AboutPage() {
  const handleMapClick = () => {
    const address = "Jujuy 946, San Miguel de Tucumán, Argentina";
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapsUrl, '_blank');
  };


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Conoce Levelpro
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Más de 15 años liderando el mercado de equipos audiovisuales en Argentina
            </p>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Nuestra Historia
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Fundada en 2008, <strong>Levelpro</strong> nació 
                    con la visión de democratizar el acceso a equipos audiovisuales de alta calidad 
                    en el mercado. Lo que comenzó como una pequeña tienda especializada 
                    en equipos de audio, se ha convertido en el referente principal para 
                    profesionales y entusiastas del audio en todo el país.
                  </p>
                  <p>
                    A lo largo de estos años, hemos construido relaciones sólidas con las marcas 
                    más prestigiosas del mundo del audio profesional, permitiéndonos ofrecer 
                    productos de última generación a precios competitivos. Nuestro compromiso 
                    con la excelencia nos ha llevado a expandir nuestros servicios, incluyendo 
                    instalaciones profesionales, alquiler de equipos y soporte técnico especializado.
                  </p>
                  <p>
                    Hoy, con más de 1000 clientes satisfechos y más de 500 eventos exitosos, 
                    Levelpro continúa innovando y creciendo, manteniéndose siempre a la vanguardia 
                    de la tecnología audiovisual para brindar las mejores soluciones a nuestros clientes.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3 mx-auto">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600">Años de experiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3 mx-auto">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-600">1000+</div>
                    <div className="text-sm text-gray-600">Clientes satisfechos</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-3 mx-auto">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="text-2xl font-bold text-orange-600">500+</div>
                    <div className="text-sm text-gray-600">Eventos realizados</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3 mx-auto">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-purple-600">3</div>
                    <div className="text-sm text-gray-600">Sucursales</div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <SmartLogo backgroundColor="light"
                  size="xl"
                  className="rounded-2xl shadow-2xl w-full h-full object-contain"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">2008</div>
                    <div className="text-gray-600">Año de fundación</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                UBICACIÓN
              </h2>
              <p className="text-xl text-gray-600">
                Visítanos en nuestras instalaciones
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                {/* Interactive Map */}
                <div className="relative h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.915298950557!2d-65.2137436!3d-26.842646199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225df9be6a9469%3A0x9132ebf73b8d1b2c!2slevel%20pro!5e0!3m2!1ses-419!2sar!4v1762263253353!5m2!1ses-419!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Levelpro - Jujuy 946, San Miguel de Tucumán"
                  ></iframe>
                  
                  {/* Map Overlay 
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">Levelpro</p>
                        <p className="text-xs text-gray-600">Jujuy 946</p>
                      </div>
                    </div>
                  </div>*/}

                  {/* Click to open in Google Maps */}
                  <div 
                    className="absolute bottom-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg cursor-pointer hover:bg-opacity-100 transition-all group"
                    onClick={handleMapClick}
                  >
                    <div className="flex items-center space-x-2 text-gray-700 group-hover:text-primary-600 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Ver en Google Maps</span>
                    </div>
                  </div>
                </div>

                {/* Location Info */}
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4 mx-auto">
                        <MapPin className="w-6 h-6 text-red-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Dirección</h4>
                      <p className="text-gray-600">Jujuy 946<br />Italia 1351<br />San Miguel de Tucumán - Argentina</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 mx-auto">
                        <Calendar className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Horarios</h4>
                      <p className="text-gray-600">Lunes a Sábado<br />7:00 - 16:00 hrs</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Contacto</h4>
                      <p className="text-gray-600">+54 381 6463436<br />Tel fijo: 4241183<br />contacto@levelpro.com.ar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section 
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                NUESTRAS MARCAS
              </h2>
              <p className="text-xl text-gray-600">
                Trabajamos con las marcas más prestigiosas del mundo del audio profesional
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-2 cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                  </div>
                  
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-100"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-black bg-opacity-80 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {brand.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  ¿Buscas una marca específica?
                </h3>
                <p className="text-gray-600 mb-6">
                  Contamos con una amplia red de proveedores. Si no encuentras la marca que buscas, 
                  contáctanos y te ayudaremos a conseguirla.
                </p>
                <button
                  onClick={() => {
                    const phone = "595984123456";
                    const message = "Hola! Estoy buscando una marca específica de equipos audiovisuales. ¿Pueden ayudarme?";
                    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                    window.open(url, '_blank');
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Consultar Disponibilidad
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
    </div>
  );
}