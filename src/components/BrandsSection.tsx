import React from 'react';

const brands = [
  { name: 'Shure', logo: 'https://cdn.freebiesupply.com/logos/large/2x/shure-logo-svg-vector.svg' },
  { name: 'Pioneer', logo: 'https://images.seeklogo.com/logo-png/10/2/pioneer-logo-png_seeklogo-109103.png' },
  { name: 'Denon', logo: 'https://download.logo.wine/logo/Denon/Denon-Logo.wine.png' },
  { name: 'Marantz', logo: 'https://download.logo.wine/logo/Marantz/Marantz-Logo.wine.png' },
  { name: 'Denon DJ', logo: 'https://images.seeklogo.com/logo-png/3/1/denon-dj-logo-png_seeklogo-39996.png' },
  { name: 'Rane', logo: 'https://images.seeklogo.com/logo-png/11/2/rane-logo-png_seeklogo-115783.png' },
  { name: 'Q Acoustics', logo: 'https://dreamediaav.com/cdn/shop/collections/q-acoustics-179719.png?v=1724191325' },
  { name: 'Roksan', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Official_2019_Roksan_brand_logo.png' },
  { name: 'Monitor Audio', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Monitor_Audio_2021_Official_Logo.png' },
  { name: 'Polk Audio', logo: 'https://1000logos.net/wp-content/uploads/2022/06/Polk-Audio-Logo-before-2012.png' },
  { name: 'Sonos', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Sonos_2015-Logo.png' },
  { name: 'Klipsch', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Klipsch_logo.png' },
  { name: 'Onkyo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Onkyo_%28logo%29.svg/2560px-Onkyo_%28logo%29.svg.png' },
  { name: 'SVS', logo: 'https://cdn.freebiesupply.com/logos/large/2x/svs-logo-png-transparent.png' },
  { name: 'Dynaudio', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/DYN_logo.png' },
  { name: 'SpeakerCraft', logo: 'https://www.xtendav.com/sites/default/files/Speakercraft.png' },
  { name: 'Cambridge Audio', logo: 'https://avalon.com.ar/wp-content/uploads/2018/03/Cambridge-Audio-350x205.png' },
  { name: 'Hegel', logo: 'https://images.squarespace-cdn.com/content/v1/5d26581d4ae07d000109f456/1566831148665-84ATNGS378Y8G0R11P0X/Hegel.png' },
  { name: 'Numark', logo: 'https://iconlogovector.com/uploads/images/2025/05/lg-68311093316db-Numark.webp' },
  { name: 'Pro-Ject', logo: 'https://avstore.in/cdn/shop/collections/Pro-Ject_Logo.png?v=1654931732&width=5579' },
  { name: 'Vincent Audio', logo: 'https://www.sarte-audio.com/sites/default/files/styles/logo_node_producto/public/fabricantes/logos/vincent.png?itok=tp_Sef8I' },
  { name: 'Panamax', logo: 'https://www.paulsonsav.com/wp-content/uploads/logo-panamax-300x300-1-150x150.png' },
  { name: 'Chord Company', logo: 'https://chord.co.uk/wp-content/uploads/2016/08/chord-logo.png' },
  { name: 'Pioneer DJ', logo: 'https://images.seeklogo.com/logo-png/25/2/pioneer-dj-logo-png_seeklogo-250072.png' }
];

export function BrandsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-accent-dark mb-4">
              NUESTRAS MARCAS
            </h2>
            <p className="text-xl text-accent-gray">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
                </div>
                {/* Efectos hover divertidos */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-100"></div>
                {/* Nombre de la marca al hacer hover 
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black bg-opacity-80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {brand.name}
                  </span>
                </div>*/}
              </div>
            ))}
          </div>

          {/* Llamado a la acción */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-accent-dark mb-4">
                ¿Buscas una marca específica?
              </h3>
              <p className="text-accent-gray mb-6">
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
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors hover-lift"
              >
                Consultar Disponibilidad
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 