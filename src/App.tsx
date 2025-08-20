import React from 'react';
import { ShoppingBag, Gift, Truck, Clock, Users, Star, ArrowRight } from 'lucide-react';

function App() {
  const handleWhatsAppClick = () => {
    // Track conversion event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'WhatsApp_Join');
    }
    // Open Linktree with multiple offers
    window.open('https://linktr.ee/tem_mais_ofertas', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      {/* Sticky Header Alert */}
      <header className="bg-red-600 text-white py-3 px-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-sm font-bold">
          <span className="text-yellow-300">⚠️</span>
          Restam poucas vagas no grupo VIP – entre agora!
          <span className="text-yellow-300">⚠️</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 text-center">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4 leading-tight">
            🔥 Grupo VIP Shopee promoções – Descontos até 90% OFF!
          </h1>
          
          <h2 className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Receba ofertas exclusivas, cupons e promoções secretas todos os dias.
            <br />
            <span className="font-semibold text-green-600">Sem spam, só preço baixo!</span>
          </h2>

          {/* Shopee Logo */}
          <div className="mb-8">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Shopee_logo.svg/2560px-Shopee_logo.svg.png" 
              alt="Shopee promoções" 
              className="max-w-60 mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* IMAGEM */}
          <div className="mb-8">
            <img 
              src="https://i.ibb.co/yBqdYYxc/grupo-whastapp.jpg" 
              alt="Grupo WhatsApp" 
              className="max-w-80 mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Main CTA Button with Pulse Animation */}
          <button
            onClick={handleWhatsAppClick}
            className="group bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-9 rounded-xl text-xl shadow-xl hover:shadow-2xl transition-all duration-300 mb-4 inline-flex items-center gap-3 animate-pulse hover:animate-none transform hover:scale-105"
          >
            👉 Quero entrar no grupo agora!
          </button>
          
          {/* Social Proof */}
          <p className="text-sm text-gray-600 mt-4 flex items-center justify-center gap-2">
            👥 Mais de <strong>350 pessoas</strong> já entraram no grupo esta semana!
          </p>
        </div>

        {/* Benefits Section */}
        <div className="max-w-md mx-auto text-left mb-8">
          <div className="space-y-3 text-base">
            <p className="flex items-start gap-3">
              <span className="text-lg">📦</span>
              <span>Ofertas secretas que não aparecem no app.</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-lg">💰</span>
              <span>Descontos de até <strong>90%</strong> em produtos selecionados.</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-lg">🚚</span>
              <span>Frete grátis em vários itens.</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-lg">⏳</span>
              <span>Promoções por tempo limitado.</span>
            </p>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center">
          <p className="text-base font-bold text-gray-700 mb-4">
            ⏳ As vagas podem fechar a qualquer momento – garanta seu acesso agora!
          </p>
          
          <button
            onClick={handleWhatsAppClick}
            className="group bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
          >
            🚀 Entrar no grupo VIP
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-6 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center text-xs text-gray-600">
          <p>
            Este grupo é independente e não possui vínculo oficial com a Shopee. 
            Apenas compartilhamos ofertas e cupons disponíveis publicamente.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;