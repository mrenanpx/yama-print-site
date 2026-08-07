import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[550px] md:min-h-[650px] flex items-center bg-white overflow-hidden" id="sobre">
      
      {/* Imagem de Fundo Limpa */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/img-hero.png" 
          alt="Yama Print Fundo" 
          className="w-full h-full object-cover object-right md:object-center"
        />
      </div>

      {/* Conteúdo do Hero */}
      <div className="container mx-auto px-6 lg:px-24 relative z-10 py-12">
        <div className="max-w-xl space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          
          {/* Título */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-yama-blue-dark leading-none tracking-tight">
            Papelaria <br />
            <span className="text-yama-red">&</span> Gráfica
          </h1>

          {/* Tag */}
          <div className="inline-block bg-yama-red text-white font-bold px-6 py-2.5 text-sm md:text-base rounded-full shadow-md transform hover:scale-105 transition-transform cursor-default tracking-wide">
            TUDO EM UM SÓ LUGAR!
          </div>

          {/* Caixa de Texto Protegida (Card com fundo branco e leve sombra) */}
          <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-md border border-gray-100 max-w-md">
            <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
              Há mais de 30 anos no mercado proporcionando as melhores soluções para você e sua empresa!
            </p>
          </div>

          {/* Botão de Contato */}
          <div className="pt-2">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 bg-white border-2 border-yama-green-wa text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yama-green-wa hover:text-white transition-all duration-300 group shadow-lg cursor-pointer"
            >
              <FaWhatsapp className="text-yama-green-wa group-hover:text-white text-3xl transition-colors" />
              <span>Entre em contato</span>
            </button>
          </div>

        </div>
      </div>

      {/* Modal de Escolha de Unidade */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 md:p-8 relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors cursor-pointer"
            >
              <FiX className="text-xl" />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-extrabold text-yama-blue-dark mb-2">
                Fale Conosco
              </h3>
              <p className="text-gray-600 text-sm">
                Escolha abaixo a unidade de atendimento desejada:
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="https://wa.me/551134589796" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsModalOpen(false)}
                className="flex items-center justify-between p-4 rounded-2xl border-2 border-gray-100 hover:border-green-500 bg-gray-50 hover:bg-green-50/50 transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-2xl" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Unidade</span>
                    <span className="font-extrabold text-yama-blue-dark text-base">Mogi das Cruzes</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1.5 rounded-full">
                  Conversar
                </span>
              </a>

              <a 
                href="https://wa.me/551147447839" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsModalOpen(false)}
                className="flex items-center justify-between p-4 rounded-2xl border-2 border-gray-100 hover:border-green-500 bg-gray-50 hover:bg-green-50/50 transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-2xl" />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Unidade</span>
                    <span className="font-extrabold text-yama-blue-dark text-base">Suzano</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1.5 rounded-full">
                  Conversar
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;