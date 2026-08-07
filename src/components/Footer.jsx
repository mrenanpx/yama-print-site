import React from 'react';
import { FaRegClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-yama-blue-dark py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-24 flex flex-col items-center justify-center text-white">
        
        {/* Horário de Funcionamento Centralizado */}
        <div className="text-center mb-8 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 max-w-md w-full">
          <h5 className="font-bold text-xl mb-4 flex items-center justify-center gap-2">
            <FaRegClock className="text-yama-yellow" /> Horário de Funcionamento
          </h5>
          <div className="space-y-2 text-gray-200">
            <p>Segunda à Sexta: <span className="font-medium text-white">9h00 às 18h00</span></p>
            <p>Sábado: <span className="font-medium text-white">9h00 às 14h00</span></p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 space-y-2">
          <p>Todos os direitos reservados YAMA PRINT ® 2026</p>
          <p>Desenvolvido por <span className="text-yama-red font-medium">mrenanpx</span></p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;