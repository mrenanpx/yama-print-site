import React from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Location = () => {
  return (
    <section className="bg-white py-20 border-t border-gray-100" id="localizacao">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <span className="bg-red-100 text-yama-red text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
            Onde Estamos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-yama-blue-dark">
            Nossas Unidades
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Venha nos fazer uma visita ou entre em contato com a loja mais próxima de você.
          </p>
        </div>

        {/* Grid dos Cards de Localização */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Unidade Mogi */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div>
              {/* Mapa com o Pin Corrigido */}
              <div className="w-full h-64 bg-gray-200">
                <iframe
                  title="Mapa Unidade Mogi"
                  src="https://maps.google.com/maps?q=R.+Psa.+Isabel+de+Bragança,+334+-+Centro,+Mogi+das+Cruzes+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              {/* Informações */}
              <div className="p-8 text-center">
                <div className="flex items-center justify-center gap-2 text-yama-red font-bold text-xl mb-3">
                  <FaMapMarkerAlt />
                  <h3>Unidade Mogi</h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  R. Psa. Isabel de Bragança, 334 - Centro - Mogi das Cruzes - SP
                </p>

                <div className="space-y-2 text-sm text-gray-700 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <FaPhone className="text-gray-400 text-xs" />
                    <span>11 3458-9795 | 11 3458-9796</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <FaEnvelope className="text-gray-400 text-xs" />
                    <span>mogi@yamaprint.com.br</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão de Contato WhatsApp da Unidade Mogi */}
            <div className="px-8 pb-8 pt-0">
              <a 
                href="https://wa.me/5511999999991" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-white border-2 border-yama-green-wa text-gray-800 py-3.5 rounded-full font-bold text-base hover:bg-yama-green-wa hover:text-white transition-all duration-300 group shadow-md"
              >
                <FaWhatsapp className="text-yama-green-wa group-hover:text-white text-2xl transition-colors" />
                <span>Falar com Unidade Mogi</span>
              </a>
            </div>
          </div>

          {/* Unidade Suzano */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div>
              {/* Mapa */}
              <div className="w-full h-64 bg-gray-200">
                <iframe
                  title="Mapa Unidade Suzano"
                  src="https://maps.google.com/maps?q=Av.+General+Francisco+Glicério,+901+-+Centro,+Suzano+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              {/* Informações */}
              <div className="p-8 text-center">
                <div className="flex items-center justify-center gap-2 text-yama-red font-bold text-xl mb-3">
                  <FaMapMarkerAlt />
                  <h3>Unidade Suzano</h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  Av. General Francisco Glicério, 901 - Centro - Suzano - SP
                </p>

                <div className="space-y-2 text-sm text-gray-700 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <FaPhone className="text-gray-400 text-xs" />
                    <span>11 4747-3883 | 11 4744-2839</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <FaEnvelope className="text-gray-400 text-xs" />
                    <span>suzano@yamaprint.com.br</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão de Contato WhatsApp da Unidade Suzano */}
            <div className="px-8 pb-8 pt-0">
              <a 
                href="https://wa.me/5511999999992" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-white border-2 border-yama-green-wa text-gray-800 py-3.5 rounded-full font-bold text-base hover:bg-yama-green-wa hover:text-white transition-all duration-300 group shadow-md"
              >
                <FaWhatsapp className="text-yama-green-wa group-hover:text-white text-2xl transition-colors" />
                <span>Falar com Unidade Suzano</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Location;