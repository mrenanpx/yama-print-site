import React from 'react';

const Partners = () => {
  const partnersList = [
    { name: "Marca 1", src: "/partners/marca1.png" },
    { name: "Marca 2", src: "/partners/marca2.png" },
    { name: "Marca 3", src: "/partners/marca3.png" },
    { name: "Marca 4", src: "/partners/marca4.png" },
    { name: "Marca 4", src: "/partners/marca5.png" },
    { name: "Marca 4", src: "/partners/marca6.png" },
    { name: "Marca 4", src: "/partners/marca7.png" },
    { name: "Marca 4", src: "/partners/marca8.png" },
    { name: "Marca 4", src: "/partners/marca9.png" },
    { name: "Marca 4", src: "/partners/marca10.png" },
    { name: "Marca 4", src: "/partners/marca11.png" },
    { name: "Marca 4", src: "/partners/marca12.png" },
    { name: "Marca 4", src: "/partners/marca13.png" },
  ];

  return (
    <section className="bg-white py-20 overflow-hidden border-t border-gray-100" id="marcas">
      <div className="text-center mb-10">
  <span className="text-yama-red font-bold uppercase tracking-widest text-xs md:text-sm bg-red-50 px-4 py-1.5 rounded-full inline-block mb-3">
    Qualidade em primeiro lugar!
  </span>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yama-blue-dark">
    Marcas parceiras
  </h2>
</div>

      {/* Container do Carrossel com efeito de gradiente nas bordas */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        {/* Faixa que se movimenta continuamente */}
        <div className="flex animate-marquee gap-16 py-4 items-center">
          
          {/* Primeira listagem dos logos */}
          {partnersList.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center min-w-[180px] h-20 bg-gray-50 border border-gray-100 rounded-2xl px-6 shadow-sm flex-shrink-0"
            >
              <img 
                src={partner.src} 
                alt={partner.name} 
                className="max-h-14 w-auto object-contain" 
              />
            </div>
          ))}

          {/* Duplicamos a lista para criar o efeito infinito contínuo */}
          {partnersList.map((partner, index) => (
            <div 
              key={`dup-${index}`} 
              className="flex items-center justify-center min-w-[180px] h-20 bg-gray-50 border border-gray-100 rounded-2xl px-6 shadow-sm flex-shrink-0"
            >
              <img 
                src={partner.src} 
                alt={partner.name} 
                className="max-h-14 w-auto object-contain" 
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Partners;