import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Analytics } from '@vercel/analytics/react';

// Importação dos componentes do site principal
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Partners from './components/Partners';
import Social from './components/Social';
import Location from './components/Location';
import Footer from './components/Footer';
import ProductsCarousel from './components/ProductsCarousel';

// Importação das Páginas
import EnvieMogi from './pages/EnvieMogi';
import EnvieSuzano from './pages/EnvieSuzano';
import NotFound from './pages/NotFound'; // <-- Importando nossa nova página 404

// Componente da Página Principal (Home)
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        {/* <ProductsCarousel /> */}
        <Location />
        <Social />
        <Partners />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Página Principal do Site */}
          <Route path="/" element={<Home />} />
          
          {/* Páginas Ocultas acessadas via QR Code */}
          <Route path="/envie-seu-arquivo" element={<EnvieMogi />} />
          <Route path="/envie-seu-arquivo2" element={<EnvieSuzano />} />

          {/* ROTA CURINGA: Chama a página de erro 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      
      {/* Componente que registra as visitas de forma invisível */}
      <Analytics />
    </>
  );
}

export default App;