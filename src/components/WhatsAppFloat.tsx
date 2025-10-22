import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  const handleClick = () => {
    const phone = "595984123456";
    const message = "Hola! Me gustaría obtener más información sobre Levelpro.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      <div className="absolute -top-12 -left-20 bg-accent-dark text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        ¡Chatea con nosotros!
      </div>
    </button>
  );
}