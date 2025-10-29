import React, { useState, useRef, useEffect } from 'react';
import botIcon from '../assets/botsonido.webp';
import { X, Send, Music, Mic } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: '¡Hola! Soy tu asistente de LevelPro 🎵. Estoy aquí para ayudarte a encontrar el mejor equipo de sonido para tus necesidades. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll cuando llegan mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    setIsConnecting(true);

    // Generar respuesta del bot
    try {
      const response = await generateBotResponse(inputMessage);
      const botMessage: Message = {
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generando respuesta:', error);
      const errorMessage: Message = {
        text: 'Disculpa, estoy teniendo problemas técnicos. Por favor intenta de nuevo en un momento.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
      setIsConnecting(false);
    }
  };

  const generateBotResponse = async (userInput: string): Promise<string> => {
    try {
      const N8N_WEBHOOK_URL = 'https://paneln8n.grupotecnoa.com/webhook/chat-levelpro';
      
      // Enviar mensaje al webhook de n8n por POST con datos en el body
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userInput,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          sessionId: 'levelpro-chat-' + Date.now()
        })
      });

      if (response.ok) {
        // Verificar que la respuesta tenga contenido antes de parsear
        const contentType = response.headers.get('content-type');
        const text = await response.text();
        
        // Si la respuesta está vacía, usar fallback
        if (!text || text.trim().length === 0) {
          console.warn('Respuesta vacía del webhook');
          return await getFallbackResponse(userInput);
        }

        // Intentar parsear JSON solo si el content-type indica JSON
        if (contentType && contentType.includes('application/json')) {
          try {
            const data = JSON.parse(text);
            return data.response || data.message || 'Gracias por tu consulta. ¿En qué más puedo ayudarte?';
          } catch (parseError) {
            console.error('Error parseando JSON:', parseError);
            // Si falla el parseo pero hay texto, devolver el texto directamente
            return text.trim() || await getFallbackResponse(userInput);
          }
        } else {
          // Si no es JSON, devolver el texto directamente
          return text.trim() || await getFallbackResponse(userInput);
        }
      } else {
        console.error('Error en webhook:', response.status, response.statusText);
        return await getFallbackResponse(userInput);
      }
    } catch (error) {
      console.error('Error conectando con el asistente:', error);
      return await getFallbackResponse(userInput);
    }
  };

  const getFallbackResponse = async (userInput: string): Promise<string> => {
    const input = userInput.toLowerCase();

    // Detectar consultas sobre productos
    if (input.includes('producto') || input.includes('equipo') || input.includes('sonido') || input.includes('precio')) {
      try {
        // Buscar productos relacionados con audio
        const { data: products, error } = await supabase
          .from('products')
          .select('*')
          .eq('in_stock', true)
          .limit(3)
          .order('created_at', { ascending: false });

        if (!error && products && products.length > 0) {
          const product = products[0];
          return `🎚️ ¡Te recomiendo el **${product.name}**!\n\n${product.description.substring(0, 150)}...\n\n💰 Precio: $${product.price.toLocaleString()}\n✅ En stock\n\n¿Te gustaría conocer más detalles o ver otros productos?`;
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    // Respuestas inteligentes basadas en palabras clave
    if (input.includes('hola') || input.includes('hi') || input.includes('buenos días')) {
      return '¡Hola! 🎵 Me complace ayudarte. Soy especialista en equipos profesionales de audio. ¿Qué tipo de evento o proyecto necesitas sonorizar?';
    }

    if (input.includes('consulta') || input.includes('información') || input.includes('necesito')) {
      return '🎤 Perfecto. Para darte la mejor recomendación, ¿podrías contarme un poco más sobre tu proyecto?\n\n• ¿Es para un evento, estudio de grabación o instalación fija?\n• ¿Cuántas personas asistirán aproximadamente?\n• ¿Qué presupuesto tienes en mente?';
    }

    if (input.includes('precio') || input.includes('costo') || input.includes('cuanto')) {
      return '💰 Contamos con equipos para todos los presupuestos. Desde sistemas básicos para pequeños eventos hasta equipos profesionales de última generación.\n\n¿Tienes algún modelo específico en mente o prefieres que te recomiende según tus necesidades?';
    }

    if (input.includes('calidad') || input.includes('marca') || input.includes('brand')) {
      return '🏆 Trabajamos con las marcas líderes del mercado:\n• 🔊 JBL Professional\n• 🎵 Yamaha\n• 🎤 Shure\n• 🔊 Bose Professional\n• 🎚️ QSC\n\nAdemás de nuestra propia línea Levelpro de equipos profesionales. ¿Alguna marca te interesa en particular?';
    }

    if (input.includes('contacto') || input.includes('llamar') || input.includes('email')) {
      return '📞 Puedes contactarnos por:\n\n📱 WhatsApp: +595 984 123 456\n📧 Email: info@levelpro.com\n🌐 Visítanos: Av. Principal 123\n\nEstamos disponibles de Lunes a Sábado de 8am a 6pm.';
    }

    if (input.includes('catálogo') || input.includes('ver') || input.includes('mostrar')) {
      return '📋 ¡Perfecto! Puedes ver nuestro catálogo completo de productos en la sección "Productos" del menú principal.\n\n¿Hay algún tipo de equipo específico que estés buscando? Puedo recomendarte los mejores productos para tu proyecto.';
    }

    if (input.includes('gracias') || input.includes('thanks')) {
      return '🎵 ¡De nada! Estoy aquí cuando necesites ayuda con equipos de sonido. No dudes en consultarme sobre productos, características técnicas o cualquier duda que tengas. ¡Que tengas un excelente día!';
    }

    if (input.includes('adiós') || input.includes('bye') || input.includes('chau')) {
      return '👋 ¡Hasta luego! Espero haber podido ayudarte. Recuerda que puedes volver cuando quieras. ¡Que tengas excelente día y excelentes proyectos de audio! 🎚️';
    }

    // Respuesta por defecto si no se reconoce el input
    return '🎚️ Gracias por tu consulta. Para darte la mejor asistencia sobre equipos de sonido, ¿podrías ser más específico?\n\nPuedo ayudarte con:\n• Recomendaciones de productos\n• Características técnicas\n• Precios y disponibilidad\n• Asesoría profesional\n\n¿Qué te gustaría saber?';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Botón flotante del chatbot */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-20 z-50 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center group animate-pulse"
        aria-label="Abrir asistente virtual"
        style={{
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }}
      >
        <img
          src={botIcon}
          alt="Asistente LevelPro"
          className="w-14 h-14"
        />
        <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-ping">
          🎵
        </div>
        <div className="absolute -top-12 -right-20 bg-accent-dark text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          🤖 Pregúntame sobre audio
        </div>
      </button>

      {/* Ventana del chatbot */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 w-96 h-[600px] bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 rounded-2xl shadow-2xl z-50 flex flex-col border-2 border-purple-500 overflow-hidden">
          {/* Header con efecto de audio */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4 flex items-center justify-between border-b border-purple-700">
            <div className="flex items-center space-x-3">
              <img
                src={botIcon}
                alt="Sonotech Bot"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div>
                <h3 className="font-bold text-white flex items-center gap-2">
                  <Music className="w-5 h-5" />
                  LevelPro Bot
                </h3>
                <p className="text-xs text-purple-200">Especialista en Audio</p>
              </div>
            </div>
            {/* Indicador de estado de conexión */}
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isConnecting ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`} />
              <span className="text-xs text-purple-200">
                {isConnecting ? 'Conectando...' : 'Conectado'}
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Área de mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-900/50 to-transparent">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white'
                      : 'bg-gradient-to-br from-gray-700 to-gray-800 text-gray-100 border border-purple-500/30'
                  } shadow-lg`}
                >
                  {message.sender === 'bot' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Music className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-semibold text-purple-300">Asistente de Audio</span>
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                  <span className="text-xs opacity-70 mt-2 block">
                    {message.timestamp.toLocaleTimeString('es-ES', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl px-4 py-3 border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Mic className="w-4 h-4 text-purple-400 animate-pulse" />
                    <span className="text-xs font-semibold text-purple-300">
                      {isConnecting ? 'Conectando con LevelPro AI...' : 'Escribiendo...'}
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input de mensaje */}
          <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-purple-500/30">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Pregunta sobre audio y sonido..."
                className="flex-1 bg-gray-800 text-white placeholder-gray-400 rounded-xl px-4 py-3 border border-purple-500/30 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-purple-500/50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              💡 Tip: Pregunta sobre productos, precios o asesoría técnica
            </p>
          </div>
        </div>
      )}

      {/* Estilos CSS personalizados */}
      <style>{`
        @keyframes audio-wave {
          0%, 100% {
            transform: scaleY(0.5);
          }
          50% {
            transform: scaleY(1.5);
          }
        }
      `}</style>
    </>
  );
}

