import React, { useEffect } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';

const EnvieMogi = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    document.title = 'Yama Print - Envie seu arquivo (Mogi)';
    
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 md:p-8 text-center border border-gray-100 relative overflow-hidden">
        
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-50 text-yama-red rounded-full flex items-center justify-center shadow-inner">
            <FiRefreshCw className="text-3xl animate-spin" />
          </div>
        </div>

        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 leading-snug">
          Escolha uma das opções abaixo para <span className="text-yama-red">enviar o seu arquivo!</span>
        </h1>

        <div className="space-y-4 mb-8">
          <a
            href="https://wa.me/551134589796"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg transition-all"
          >
            <FaWhatsapp className="text-2xl" />
            <span>Whatsapp</span>
          </a>

          <a
            href="mailto:mogi@yamaprint.com.br?subject=Envio%20de%20Arquivo"
            className="w-full flex items-center justify-center gap-3 bg-yama-red hover:bg-red-700 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg transition-all"
          >
            <FaEnvelope className="text-xl" />
            <span>E-mail</span>
          </a>
        </div>

        <div className="bg-red-50/60 border border-red-100 rounded-2xl p-4 mb-6">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Retire uma <strong className="text-yama-red">senha no balcão</strong> e aguarde para ser atendido!
          </p>
        </div>

        <div className="space-y-4 text-sm text-gray-600 border-t border-gray-100 pt-6">
          <div>
            <strong className="block text-gray-800 uppercase tracking-wider text-xs mb-1">Contato:</strong>
            <p className="font-medium text-gray-700">11 3458-9796</p>
            <p className="text-gray-500 text-xs">mogi@yamaprint.com.br</p>
          </div>

          <div>
            <strong className="block text-gray-800 uppercase tracking-wider text-xs mb-1">Horário de atendimento:</strong>
            <p className="font-bold text-yama-red">Segunda à Sexta</p>
            <p className="text-xs text-gray-500">das 9h00 às 18h00</p>
            <p className="font-bold text-yama-red mt-1">Sábado</p>
            <p className="text-xs text-gray-500">das 9h00 às 14h00</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EnvieMogi;