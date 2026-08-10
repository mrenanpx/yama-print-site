import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight, FiPlus } from 'react-icons/fi';

// Array com os produtos
const productsData = [
  { id: 1, image: '/products/prtd1.webp', title: 'CADERNO 1 MATÉRIA', price: 'R$ 14,90', startingAt: true },
  { id: 2, image: '/products/prtd2.webp', title: 'CARTÃO DE VISITA COUCHÊ 250g', price: 'R$ 79,00', tag: 'MAIS VENDIDO', tagColor: 'bg-green-500', startingAt: true },
  { id: 3, image: '/products/prtd3.webp', title: 'CANETA BIC', price: 'R$ 1,30',tag:'MAIS VENDIDO', tagColor: 'bg-green-500', startingAt: true },
  { id: 4, image: '/products/prtd4.webp', title: 'MARCA TEXTO MASTERPRINT', price: 'R$ 2,50', tag: 'PROMOÇÃO', tagColor: 'bg-blue-500' },
  { id: 5, image: '/products/prtd5.webp', title: 'PASTA EM L YES', price: 'R$ 2,75' },
  { id: 6, image: '/products/prtd6.webp', title: 'LAPIS ACRILEX', price: 'R$ 0,99', tag: 'OFERTA', tagColor: 'bg-yama-red' },
  { id: 7, image: '/products/prtd7.webp', title: 'CARNÊ GPS TAMOIO', price: 'R$ 5,90' },
  { id: 8, image: '/products/prtd8.webp', title: 'CARTOLINA VARIAS CORES', price: 'R$ 1,25', tag: 'MAIS VENDIDO', tagColor: 'bg-green-500' },
  { id: 9, image: '/products/prtd9.webp', title: 'BANNER C/ BASTÃO', price: 'R$ 60,00', startingAt: true },
  { id: 10, image: '/products/prtd10.webp', title: 'ADESIVO VINIL C/ RECORTE PERSONALIZADO', price: 'R$ 82,00', startingAt: true },
  { id: 11, image: '/products/prtd11.webp', title: 'ENVELOPE KRAFT A4', price: 'R$ 1,00', tag: 'MAIS VENDIDO', tagColor: 'bg-green-500' },
];

const ProductsCarousel = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Estado para pausar no hover das setas

  // Define a quantidade de itens por tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(2); // Mobile: 2 produtos
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3); // Tablet: 3 produtos
      } else {
        setItemsPerPage(4); // Desktop: 4 produtos
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  // Impede que a página quebre no redimensionamento
  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(totalPages - 1);
    }
  }, [itemsPerPage, currentPage, totalPages]);

  // Função para trocar de página com Fade
  const changePage = useCallback((newPage) => {
    if (newPage === currentPage || isFading) return;
    setIsFading(true); 
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsFading(false);
    }, 300); 
  }, [currentPage, isFading]);

  const nextPage = useCallback(() => changePage(currentPage >= totalPages - 1 ? 0 : currentPage + 1), [changePage, currentPage, totalPages]);
  const prevPage = () => changePage(currentPage === 0 ? totalPages - 1 : currentPage - 1);

  // AUTOPLAY: Roda a cada 2.5 segundos
  useEffect(() => {
    // Não roda o autoplay se o mouse estiver em cima das SETAS, se estiver ocorrendo fade ou se houver apenas 1 página
    if (isHovered || isFading || totalPages <= 1) return;

    const timer = setInterval(() => {
      nextPage();
    }, 5000); // 5 segundos

    // Limpa o timer para não sobrepor intervalos ao trocar de página
    return () => clearInterval(timer);
  }, [nextPage, isHovered, isFading, totalPages]);

  // Recorta os produtos da página atual
  const currentProducts = productsData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden" id="produtos">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Título da Seção */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-yama-red font-bold uppercase tracking-widest text-xs md:text-sm bg-red-50 px-4 py-1.5 rounded-full inline-block mb-3">
            Nosso Catálogo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yama-blue-dark">
            Produtos em Destaque
          </h2>
        </div>

        {/* Container do Carrossel */}
        <div className="relative">
          <div 
            className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 transition-opacity duration-300 ease-in-out ${
              isFading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {currentProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group overflow-hidden flex flex-col h-full relative cursor-pointer"
              >
                {/* Tag Opcional */}
                {product.tag && (
                  <div className={`absolute top-3 left-3 z-10 px-2.5 py-1 text-[9px] md:text-[10px] uppercase tracking-wider font-extrabold text-white rounded-full shadow-sm ${product.tagColor}`}>
                    {product.tag}
                  </div>
                )}
                
                {/* Imagem do Produto */}
                <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
                  />
                </div>
                
                {/* Detalhes do Produto */}
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <h3 className="font-bold text-yama-blue-dark text-sm md:text-base leading-tight mb-4 group-hover:text-yama-red transition-colors">
                    {product.title}
                  </h3>
                  
                  {/* Destaque Elegante do Preço */}
                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      {product.startingAt ? (
                        <span className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                          A partir de
                        </span>
                      ) : (
                        <span className="text-[9px] md:text-[10px] text-transparent font-bold uppercase tracking-wider mb-0.5 select-none pointer-events-none">
                          A partir de
                        </span>
                      )}
                      
                      <span className="text-lg md:text-xl font-black text-yama-blue-dark group-hover:text-yama-red transition-colors leading-none">
                        {product.price}
                      </span>
                    </div>
                    
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-yama-red group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                      <FiPlus className="text-base md:text-lg" />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Navegação Manual (Agora a trava de pausa por Hover está SOMENTE aqui) */}
          <div 
            className="flex justify-center items-center gap-6 mt-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button 
              onClick={prevPage}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-yama-blue-dark shadow-md hover:bg-yama-red hover:text-white transition-colors cursor-pointer border border-gray-100"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => changePage(idx)} 
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentPage === idx 
                      ? 'bg-yama-red w-8' 
                      : 'bg-gray-300 w-2.5 hover:bg-gray-400'
                  }`} 
                  aria-label={`Ir para página ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextPage}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-yama-blue-dark shadow-md hover:bg-yama-red hover:text-white transition-colors cursor-pointer border border-gray-100"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;