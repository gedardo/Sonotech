import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, MapPin, Send, MessageCircle, Video, Sparkles, CheckCircle, Zap, Globe, Users } from 'lucide-react';
import qrCode from '../assets/qr.png';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isTyping, setIsTyping] = useState(false);
  const [selectedContactMethod, setSelectedContactMethod] = useState('whatsapp');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOnline, setIsOnline] = useState(true);

  // Actualizar tiempo cada minuto
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Simular estado online/offline
  useEffect(() => {
    const hour = currentTime.getHours();
    setIsOnline(hour >= 7 && hour < 16);
  }, [currentTime]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setIsTyping(true);
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Simular efecto de typing
    setTimeout(() => setIsTyping(false), 1000);
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return '¡Buenos días!';
    if (hour < 18) return '¡Buenas tardes!';
    return '¡Buenas noches!';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear mensaje para WhatsApp
    const whatsappMessage = `
*Nuevo mensaje de contacto*

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone}
*Asunto:* ${formData.subject}

*Mensaje:*
${formData.message}
    `.trim();

    const phone = "543813698748";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const handleWhatsAppClick = () => {
    const phone = "543813698748";
    const message = "Hola! Me gustaría obtener más información sobre Levelpro.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 opacity-90"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary-200" />
              <span className="text-sm font-medium">Conecta con nosotros</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              {getGreeting()}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto animate-slide-up">
              Estamos aquí para ayudarte. Elige tu método preferido de contacto y conecta con nuestro equipo de expertos.
            </p>

            {/* Status Indicator */}
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
              isOnline ? 'bg-green-500 bg-opacity-20 text-green-200' : 'bg-orange-500 bg-opacity-20 text-orange-200'
            } backdrop-blur-sm`}>
              <div className={`w-2 h-2 rounded-full ${
                isOnline ? 'bg-green-400 animate-pulse' : 'bg-orange-400'
              }`}></div>
              <span className="text-sm font-medium">
                {isOnline ? 'En línea ahora' : 'Fuera de horario'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Contact Methods Selection */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Cómo prefieres contactarnos?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, color: 'green' },
                { id: 'email', label: 'Email', icon: Mail, color: 'blue' },
                { id: 'call', label: 'Llamada', icon: Phone, color: 'primary' },
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedContactMethod(method.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                    selectedContactMethod === method.id
                      ? 'bg-primary-500 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 shadow-md'
                  }`}
                >
                  <method.icon className="w-5 h-5" />
                  <span className="font-medium">{method.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Info & Methods */}
            <div className="space-y-8">
              
              {/* WhatsApp Section */}
              {selectedContactMethod === 'whatsapp' && (
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-xl border border-green-200 animate-scale-in">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-4 shadow-lg">
                      <MessageCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      ¡Chatea con nosotros!
                    </h3>
                    <p className="text-gray-600">
                      Responde en tiempo real y obtén asistencia inmediata
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
                      <div className="flex flex-col items-center md:items-start">
                        <p className="text-sm text-gray-600 mb-3 font-medium">Número de WhatsApp</p>
                      <button 
                        onClick={handleWhatsAppClick}
                          className="text-xl font-bold text-green-600 hover:text-green-700 transition-all flex items-center space-x-3 bg-green-50 px-6 py-3 rounded-xl hover:bg-green-100 hover:scale-105 shadow-md"
                      >
                          <MessageCircle className="w-6 h-6" />
                          <span>+54 381 369 8748</span>
                      </button>
                      </div>

                      <div className="flex flex-col items-center">
                        <p className="text-sm text-gray-600 mb-3 font-medium">Escanea para chatear</p>
                        <div className="bg-white p-4 rounded-xl shadow-md border-2 border-gray-100 hover:border-green-300 transition-all hover:scale-105">
                          <img 
                            src={qrCode} 
                            alt="Código QR para WhatsApp" 
                            className="w-32 h-32 object-contain"
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                          Escanea con tu cámara
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <button 
                      onClick={handleWhatsAppClick}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center space-x-3 mx-auto shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <MessageCircle className="w-6 h-6" />
                      <span>Iniciar conversación</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Email Section */}
              {selectedContactMethod === 'email' && (
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl border border-blue-200 animate-scale-in">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4 shadow-lg">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Envíanos un email
                    </h3>
                    <p className="text-gray-600">
                      Te responderemos en menos de 24 horas
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <a 
                      href="mailto:contacto@levelpro.com.ar"
                      className="block text-center text-xl font-bold text-blue-600 hover:text-blue-700 transition-all bg-blue-50 px-6 py-4 rounded-xl hover:bg-blue-100 hover:scale-105 shadow-md"
                    >
                      <Mail className="w-6 h-6 inline mr-2" />
                      contacto@levelpro.com.ar
                    </a>
                  </div>
                </div>
              )}

              {/* Call Section */}
              {selectedContactMethod === 'call' && (
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-xl border border-primary-200 animate-scale-in">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600 rounded-full mb-4 shadow-lg">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Llámanos directamente
                    </h3>
                    <p className="text-gray-600">
                      Horario de atención: Lunes a Sábado, 7:00 - 16:00
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <a 
                      href="tel:+543813698748"
                      className="block text-center text-xl font-bold text-primary-600 hover:text-primary-700 transition-all bg-primary-50 px-6 py-4 rounded-xl hover:bg-primary-100 hover:scale-105 shadow-md"
                    >
                      <Phone className="w-6 h-6 inline mr-2" />
                      +54 381 369 8748
                    </a>
                  </div>
                </div>
              )}

              {/* Video Call Section */}
              {selectedContactMethod === 'video' && (
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-xl border border-purple-200 animate-scale-in">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-4 shadow-lg">
                      <Video className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Videollamada personalizada
                    </h3>
                    <p className="text-gray-600">
                      Agenda una videollamada para una consulta más detallada
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <button className="w-full text-center text-xl font-bold text-purple-600 hover:text-purple-700 transition-all bg-purple-50 px-6 py-4 rounded-xl hover:bg-purple-100 hover:scale-105 shadow-md">
                      <Video className="w-6 h-6 inline mr-2" />
                      Programar videollamada
                    </button>
                  </div>
                </div>
              )}

              {/* Interactive Map Section */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-primary-600" />
                  Nuestra ubicación
                </h3>
                
                {/* Map Container */}
                <div className="relative rounded-xl overflow-hidden shadow-lg mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.123456789!2d-65.223456789!3d-26.823456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1f%3A0xf8606cd659b8e3f4!2sAv.%20Jujuy%201162%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n%2C%20Argentina!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                    title="Ubicación de Levelpro - Av. Jujuy 1162, San Miguel de Tucumán"
                  ></iframe>
                  
                  {/* Map Overlay */}
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-primary-600" />
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">Levelpro</p>
                        <p className="text-xs text-gray-600">Av. Jujuy 1162</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address Info */}
                <div className="bg-primary-50 rounded-xl p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Dirección completa</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Av. Jujuy 1162, Italia 1351<br />
                        San Miguel de Tucumán - Tucumán, Argentina
                      </p>
                      <a 
                        href="https://maps.google.com/?q=Av.+Jujuy+1162,+San+Miguel+de+Tucumán,+Tucumán,+Argentina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                      >
                        <Globe className="w-4 h-4 mr-1" />
                        Ver en Google Maps
                      </a>
                    </div>
                    </div>
                  </div>

                {/* Additional Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm">Horarios</h4>
                      <p className="text-gray-600 text-sm">
                        Lun-Sáb: 7:00 - 16:00<br />
                        Dom: Cerrado
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm">Contacto</h4>
                      <p className="text-gray-600 text-sm">
                        +54 381 369 8748<br />
                        contacto@levelpro.com.ar
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Info 
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-primary-600" />
                  Información adicional
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Equipo de soporte</h4>
                      <p className="text-gray-600">
                        Especialistas disponibles para ayudarte<br />
                        Tiempo de respuesta promedio: 2 horas
                      </p>
                  </div>
                </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Servicios especializados</h4>
                      <p className="text-gray-600">
                        Soluciones tecnológicas personalizadas<br />
                        Asesoramiento técnico especializado
                      </p>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Envíanos tu mensaje
              </h2>
                <p className="text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-primary-300"
                    required
                  />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico *
                    </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-primary-300"
                    required
                  />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                      placeholder="+54 381 123 4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-primary-300"
                    required
                  />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto *
                    </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all hover:border-primary-300"
                    required
                  />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos más detalles sobre tu consulta..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none hover:border-primary-300"
                    required
                  />
                </div>

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center space-x-2 text-primary-600">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className="text-sm">Escribiendo...</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Send className="w-6 h-6" />
                  <span>Enviar mensaje</span>
                  <Zap className="w-5 h-5" />
                </button>
              </form>

              {/* Success Message */}
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center space-x-2 text-green-700">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    Tu mensaje será enviado por WhatsApp para una respuesta más rápida
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}