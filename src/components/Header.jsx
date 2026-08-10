import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  
  // Estados para controlar o comportamento do Smart Header
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detecta a direção do scroll da página
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Aplica o efeito de vidro se não estiver no topo absoluto
      setIsScrolled(currentScrollY > 20);

      // Se desceu a página mais do que 100px (para não bugar no topo) e está descendo: esconde
      if (currentScrollY > lastScrollY && currentScrollY > 600) {
        setIsVisible(false);
      } 
      // Se rolou para cima: mostra o header novamente
      else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Estados do formulário de orçamento
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'PAPELARIA',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    
    const emailDestino = formData.department === 'GRÁFICA' 
      ? 'graficamogi@yamaprint.com.br' 
      : 'mogi@yamaprint.com.br';

    const subject = encodeURIComponent(`Novo Orçamento: ${formData.department} - ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `Telefone: ${formData.phone}\n` +
      `E-mail: ${formData.email}\n` +
      `Setor Desejado: ${formData.department}\n\n` +
      `Mensagem / Solicitação:\n${formData.message}`
    );

    window.location.href = `mailto:${emailDestino}?subject=${subject}&body=${body}`;
    
    setIsBudgetModalOpen(false);
  };

  return (
    <>
      {/* Header com lógica de Hide on Scroll e translate-y */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 w-full py-4 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-2xl shadow-lg shadow-black/[0.03] border-b border-white/40' 
            : 'bg-white/85 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-24 flex items-center justify-between">
          
          {/* Logo (tamanho fixo, sem encolher) */}
          <a href="#" className="flex items-center cursor-pointer">
            <img 
              src="/logo.svg" 
              alt="Yama Print" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#localizacao" className="text-gray-700 hover:text-yama-blue-dark font-medium text-sm transition-colors uppercase tracking-wide">
              Contato
            </a>
            <button 
              onClick={() => setIsBudgetModalOpen(true)}
              className="bg-yama-red text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wide cursor-pointer border-none"
            >
              Orçamento
            </button>
          </nav>

          {/* Botão do Menu Mobile (Celular) */}
          <button
            className="md:hidden text-yama-blue-dark text-3xl focus:outline-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 mt-4 px-6 py-5 flex flex-col gap-3 shadow-xl absolute w-full left-0 z-40">
            <a
              href="#localizacao"
              onClick={() => setIsOpen(false)}
              className="w-full bg-yama-blue-dark text-white px-5 py-3 rounded-full font-bold text-center shadow-md uppercase tracking-wider text-sm hover:bg-blue-900 transition-all cursor-pointer"
            >
              Contato
            </a>
            <button
              onClick={() => {
                setIsBudgetModalOpen(true);
                setIsOpen(false);
              }}
              className="w-full bg-yama-red text-white px-5 py-3 rounded-full font-bold text-center shadow-md uppercase tracking-wider text-sm hover:bg-red-700 transition-all cursor-pointer border-none"
            >
              Orçamento
            </button>
          </div>
        )}
      </header>

      {/* Modal de Solicitação de Orçamento */}
      {isBudgetModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 md:p-8 relative animate-in fade-in zoom-in duration-200 my-8">
            
            {/* Botão Fechar */}
            <button 
              onClick={() => setIsBudgetModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors cursor-pointer"
            >
              <FiX className="text-xl" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex w-12 h-12 bg-red-100 text-yama-red rounded-full items-center justify-center text-xl mb-2 shadow-inner">
                <FaEnvelope />
              </div>
              <h3 className="text-2xl font-extrabold text-yama-blue-dark">
                Peça aqui seu orçamento
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Preencha os dados abaixo e envie sua solicitação diretamente para nossa equipe.
              </p>
            </div>

            <form onSubmit={handleBudgetSubmit} className="space-y-4">
              
              {/* Campo Nome */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Seu Nome</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yama-blue-dark focus:ring-2 focus:ring-yama-blue-dark/20 outline-none text-sm bg-gray-50"
                />
              </div>

              {/* Grid Telefone e E-mail */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yama-blue-dark focus:ring-2 focus:ring-yama-blue-dark/20 outline-none text-sm bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">E-mail</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yama-blue-dark focus:ring-2 focus:ring-yama-blue-dark/20 outline-none text-sm bg-gray-50"
                  />
                </div>
              </div>

              {/* Seletor de Setor */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Setor de Atendimento</label>
                <select 
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yama-blue-dark focus:ring-2 focus:ring-yama-blue-dark/20 outline-none text-sm bg-gray-50 font-bold text-yama-blue-dark cursor-pointer"
                >
                  <option value="PAPELARIA">PAPELARIA</option>
                  <option value="GRÁFICA">GRÁFICA</option>
                </select>
              </div>

              {/* Caixa para escrever a mensagem */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Sua Solicitação / Detalhes</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Descreva o que você precisa (quantidades, tamanhos, papéis, itens de papelaria...)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yama-blue-dark focus:ring-2 focus:ring-yama-blue-dark/20 outline-none text-sm bg-gray-50 resize-none"
                ></textarea>
              </div>

              {/* Botão Enviar */}
              <button 
                type="submit"
                className="w-full bg-yama-red text-white py-4 rounded-xl font-bold text-base hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wider cursor-pointer mt-2"
              >
                Enviar Solicitação de Orçamento
              </button>

            </form>

          </div>
        </div>
      )}
    </>
  );
};

export default Header;