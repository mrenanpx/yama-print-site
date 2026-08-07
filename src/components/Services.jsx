import React from 'react';
// 1. Aqui em cima nós importamos ícones diferentes da biblioteca
import { FaBook, FaPrint, FaStamp, FaIdCard, FaBookOpen, FaBullhorn, } from 'react-icons/fa';
import { RiPencilRulerLine } from "react-icons/ri";
import { BsFillBackpack3Fill } from "react-icons/bs";
import { GiPapers } from "react-icons/gi";

// O "molde" do cartão agora foi ajustado para receber o ícone (Icon) dinamicamente
const ServiceCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
    
    <div className="w-24 h-24 bg-blue-50 flex items-center justify-center rounded-3xl mb-6 group-hover:bg-yama-blue-dark transition-colors duration-300">
      {/* Aqui ele renderiza o ícone específico que passarmos na lista */}
      <Icon className="text-yama-blue-dark text-4xl group-hover:text-white transition-colors duration-300" />
    </div>
    
    <h3 className="text-2xl font-bold text-yama-blue-dark mb-4">
      {title}
    </h3>
    
    <p className="text-gray-600 text-sm leading-relaxed px-2">
      {description}
    </p>
  </div>
);

const Services = () => {
  // 2. Aqui está a sua lista! 
  // Para modificar, basta alterar o que está entre as aspas em "title" e "description".
  const servicesData = [
    {
      title: "Materiais Escolares",
      description: "Tudo o que é preciso para um ano letivo de sucesso! Temos cadernos, mochilas, estojos, lápis de cor e muito mais.",
      icon: BsFillBackpack3Fill
    },
    {
      title: "Materiais para Escritório",
      description: "Trabalhe com estilo, temos a maior variedade de materiais para escritório da região, pastas, agendas, canetas, grampeadores, prendedores, elástico e muito mais.",
      icon: RiPencilRulerLine
    },
    {
      title: "Papelaria",
      description: "​Muito mais que o básico. Uma seleção completa de itens criativos, papéis especiais, embalagens, presentes e utilidades diversas para facilitar sua rotina com muita cor.",
      icon: GiPapers
    },
    {
      title: "Serviços",
      description: "Soluções rápidas e com alta qualidade para o seu dia a dia. Oferecemos cópias (xerox), impressões coloridas e P&B, plastificação para proteger documentos e encadernações.",
      icon: FaPrint
    },
    {
      title: "Gráfica",
      description: "Destaque a sua marca com nossa impressão profissional. Produzimos adesivos, banners em alta resolução, cartões de visita, blocos, talões, marcadores de página e muito mais.",
      icon: FaIdCard
    },
    {
      title: "Carimbos",
      description: "Agilidade e precisão para o seu negócio. Fabricamos carimbos de madeira e automáticos, trabalhando apenas com as melhores marcas do mercado mundial, como Trodat e Colop.",
      icon: FaStamp
    }
  ];

  return (
    <section className="bg-white py-20" id="servicos">
      <div className="container mx-auto px-6 lg:px-24">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-yama-blue-dark text-center mb-16">
          O que oferecemos?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Aqui o React lê a nossa lista acima e cria os 6 cartões automaticamente */}
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description}
              icon={service.icon} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;