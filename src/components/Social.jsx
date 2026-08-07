import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Social = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-24 flex flex-col items-center text-center">
        
        {/* Ícone de Destaque */}
        <div className="w-20 h-20 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300 mb-8">
          <FaInstagram className="text-white text-5xl" />
        </div>
        
        {/* Textos */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-yama-blue-dark mb-6">
          Acompanhe nosso dia a dia!
        </h2>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          Nos siga nas redes sociais e fique por dentro de todas as novidades, dicas de produtos e promoções exclusivas da Yama Print.
        </p>
        
        {/* Botão de Ação */}
        <a 
          href="https://instagram.com/lojayamaprint" // Coloque o link do seu Instagram aqui
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white border border-gray-200 text-yama-blue-dark px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <FaInstagram className="text-red-500 text-2xl" />
          <span>@lojayamaprint</span>
        </a>
        
      </div>
    </section>
  );
};

export default Social;