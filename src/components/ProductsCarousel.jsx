import { useRef, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// =========================================================
// 🛠️ EDITE AQUI: lista de produtos
// - image: caminho da imagem dentro de /public/products
//   (não precisa escrever "public", o Vite já serve a partir da raiz)
// - name: nome do produto
// - price: preço em número (ex: 49.9)
// - oldPrice (opcional): preço "de", riscado, para mostrar desconto
// =========================================================
const products = [
  { id: 1, image: "/products/prtd1.webp", name: "Caderno 1 matéria", price: 14.9 },
  { id: 2, image: "/products/prtd2.webp", name: "500un cartão de vista", price: 59.9 },
  { id: 3, image: "/products/prtd3.webp", name: "Caneta BIC", price: 1.3 },
  { id: 4, image: "/products/prtd4.webp", name: "Marca texto MASTERPRINT", price: 2.5 },
  { id: 5, image: "/products/prtd5.webp", name: "Pasta L YES", price: 2.75 },
  { id: 6, image: "/products/prtd6.webp", name: "Lapis ACRILEX", price: 0.99 },
  { id: 7, image: "/products/prtd7.webp", name: "Carnê GPS Tamoio", price: 5.9 },
  { id: 8, image: "/products/prtd8.webp", name: "Cartolina varias cores", price: 1.25 },
  { id: 9, image: "/products/prtd9.webp", name: "Banner 60x90cm", price: 67.0 },
  { id: 10, image: "/products/prtd10.webp", name: "Adesivo Vinil 5x5cm - 170un", price: 82.00 },
  { id: 11, image: "/products/prtd11.webp", name: "Envelope Kraft", price: 1.00 },
  ];

// 🛠️ Velocidade do movimento automático (pixels por frame). Aumente para mais rápido.
const AUTO_SCROLL_SPEED = 1.5;

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function ProductCard({ product }) {
  return (
    <div className="relative flex-shrink-0 w-64 snap-start bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Imagem do produto */}
      <div className="w-full h-64 bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Tag de preço em destaque */}
      <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
        {product.oldPrice && (
          <span className="text-xs line-through text-gray-200 bg-black/40 px-2 py-0.5 rounded-full">
            {formatPrice(product.oldPrice)}
          </span>
        )}
        <span className="bg-yellow-400 text-gray-900 font-bold text-sm px-3 py-1 rounded-full shadow-md">
          {formatPrice(product.price)}
        </span>
      </div>

      {/* Nome do produto */}
      <div className="p-4">
        <h3 className="text-gray-800 font-semibold text-base truncate">
          {product.name}
        </h3>
      </div>
    </div>
  );
}

export default function ProductsCarousel() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Movimento automático contínuo, pausa quando o mouse está em cima
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;

    const step = () => {
      if (!isPaused) {
        container.scrollLeft += AUTO_SCROLL_SPEED;

        // Quando chega ao fim, volta pro começo (loop)
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 1) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
  <span className="text-yama-red font-bold uppercase tracking-widest text-xs md:text-sm bg-red-50 px-4 py-1.5 rounded-full inline-block mb-3">
    O melhor preço da região!
  </span>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yama-blue-dark">
    Produtos em destaque
  </h2>
</div>

        <div className="relative">
          {/* Botão esquerda */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-100 transition"
            aria-label="Produtos anteriores"
          >
            <FiChevronLeft size={22} />
          </button>

          {/* Carrossel */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Botão direita */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-100 transition"
            aria-label="Próximos produtos"
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
