import React from 'react';
import { FaArrowDown, FaStar, FaHeart } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden" id="por-que-escolher">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center relative">
          
          {/* Coluna Esquerda - Texto (5 colunas) */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-yama-blue-dark leading-tight">
              Porque escolher<br />
              <span className="text-yama-red">a YAMA PRINT?</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Com mais de três décadas de história, a Yama Print é a sua parceira completa em papelaria, gráfica e material de escritório na região. Unimos tradição e evolução constante para entregar um atendimento de excelência e serviços ágeis — com destaque para a nossa confecção impecável de carimbos. Mais do que vender produtos, nosso compromisso é facilitar o seu dia a dia com agilidade e qualidade.
            </p>
          </div>

          {/* Coluna Central - Linhas Conectoras em SVG (Apenas Desktop - 2 colunas) */}
          <div className="hidden lg:flex lg:col-span-2 justify-center items-center relative h-full">
            <svg className="absolute w-20 h-[360px] overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Linha vertical principal */}
              <path d="M 10 30 L 10 330" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
              {/* Ramificação para o Card 1 */}
              <path d="M 10 50 L 35 50" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
              {/* Ramificação para o Card 2 */}
              <path d="M 10 180 L 35 180" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
              {/* Ramificação para o Card 3 */}
              <path d="M 10 310 L 35 310" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          {/* Coluna Direita - Cards (5 colunas) */}
          <div className="lg:col-span-5 space-y-6 z-10">
            
            {/* Card 1: Preço Baixo */}
            <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-50 text-yama-red rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                <FaArrowDown className="text-xl" />
              </div>
              <div>
                <h3 className="font-extrabold text-yama-blue-dark text-lg mb-1">PREÇO BAIXO</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Garantimos o melhor preço da região do Alto Tietê. Aproveite descontos exclusivos de até 15% ou parcele seus serviços em até 3x sem juros.
                </p>
              </div>
            </div>

            {/* Card 2: Qualidade */}
            <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-50 text-yama-red rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                <FaStar className="text-xl" />
              </div>
              <div>
                <h3 className="font-extrabold text-yama-blue-dark text-lg mb-1">QUALIDADE</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Utilizamos equipamentos de ponta e materiais de primeira linha para que suas impressões e materiais tenham o melhor acabamento e durabilidade.
                </p>
              </div>
            </div>

            {/* Card 3: Compromisso */}
            <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-50 text-yama-red rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                <FaHeart className="text-xl" />
              </div>
              <div>
                <h3 className="font-extrabold text-yama-blue-dark text-lg mb-1">COMPROMISSO</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Trabalhamos com as melhores marcas do mercado mundial, proporcionando uma experiência de excelência e atendimento personalizado de ponta a ponta.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;