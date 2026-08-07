import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-gray-50 py-12 md:py-20 overflow-hidden" id="sobre">
      <div className="container mx-auto px-6 lg:px-24 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Coluna Esquerda - Texto */}
        <div className="space-y-6 text-center md:text-left flex flex-col justify-center z-10">
          
          {/* Título em duas linhas com md:text-7xl */}
          <h1 className="text-7xl sm:text-7xl md:text-7xl lg:text-8xl font-black text-yama-blue-dark leading-tight md:leading-none tracking-tight">
            Papelaria<br /> <span className="text-yama-red">&</span> Gráfica
          </h1>

          <div className="inline-block bg-yama-red text-white font-bold px-6 py-2.5 text-sm md:text-base rounded-full shadow-md transform hover:scale-105 transition-transform cursor-default w-fit mx-auto md:mx-0 tracking-wide">
            TUDO EM UM SÓ LUGAR!
          </div>

          <p className="text-base sm:text-lg text-gray-700 max-w-lg mx-auto md:mx-0 font-medium">
            Há mais de 30 anos no mercado proporcionando as melhores soluções para você e sua empresa!
          </p>

          <div className="pt-2 flex justify-center md:justify-start">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 bg-white border-2 border-yama-green-wa text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yama-green-wa hover:text-white transition-all duration-300 group shadow-lg cursor-pointer"
            >
              <FaWhatsapp className="text-yama-green-wa group-hover:text-white text-3xl transition-colors" />
              <span>Entre em contato</span>
            </button>
          </div>
        </div>

        {/* Coluna Direita - Imagem (Visível apenas no Desktop, removida no mobile) */}
        <div className="relative hidden md:flex justify-center items-center w-full">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/80 via-red-100/70 to-yellow-100/80 rounded-3xl transform rotate-2 scale-105 -z-10 blur-2xl opacity-90"></div>
          <div className="relative z-10 w-full">
             <img 
               src="/img-hero.png" 
               alt="Yama Print Hero" 
               className="w-full aspect-[2/1] object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.01]" 
             />
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