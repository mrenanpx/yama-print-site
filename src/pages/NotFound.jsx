import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiAlertCircle, FiArrowLeft } from 'react-icons/fi';

// Importando os componentes visuais para manter a estrutura do site
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsCarousel from '../components/ProductsCarousel';

const NotFound = () => {
  // Garante que a página sempre carregue no topo
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Página não encontrada - Yama Print';
  }, []);

  return (
    <>
      <Header />
      
      {/* Seção Principal de Erro */}
      <main className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-6 py-20 text-center">
        <div className="bg-white p-8 md:p-16 rounded-3xl shadow-xl max-w-2xl w-full border border-gray-100 flex flex-col items-center transition-all hover:shadow-2xl">
          
          <div className="w-20 h-20 bg-red-50 text-yama-red rounded-full flex items-center justify-center mb-6">
            <FiAlertCircle className="text-4xl animate-pulse" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-yama-blue-dark mb-2 tracking-tighter">
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ops! Página não encontrada
          </h2>
          
          <p className="text-gray-600 mb-10 max-w-md mx-auto text-sm md:text-base">
            Parece que o link que você digitou está quebrado ou a página foi movida. Mas não se preocupe, nossos produtos continuam por aqui!
          </p>
          
          <Link 
            to="/" 
            className="flex items-center gap-2 bg-yama-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <FiArrowLeft className="text-xl" />
            Voltar para o Início
          </Link>
          
        </div>
      </main>

      {/* O bônus estratégico: Mostra os produtos para o cliente se distrair! */}
      <ProductsCarousel />
      
      <Footer />
    </>
  );
};

export default NotFound;