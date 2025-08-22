import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden w-full">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-primary-glow rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 md:w-48 md:h-48 bg-accent rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10 w-full max-w-full">
        <div className="max-w-4xl mx-auto text-center text-white px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight break-words">
            🚀 Não Deixe Essa Oportunidade Passar!
          </h2>
          
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-6 md:mb-8 opacity-90 px-2">
            Enquanto você hesita, outros profissionais estão se especializando e 
            conquistando vagas de <strong>R$ 8.000 a R$ 15.000</strong> como Consultor SAP BTP CPI.
          </p>

          {/* Urgency countdown visual */}
          <div className="bg-destructive/20 backdrop-blur-sm border border-destructive/30 rounded-lg p-4 md:p-6 mb-6 md:mb-8 max-w-2xl mx-auto">
            <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2">⏰ ÚLTIMAS HORAS DA PROMOÇÃO!</div>
            <div className="text-sm sm:text-base md:text-lg">
              Restam apenas <span className="text-warning font-bold">48 horas</span> para garantir 
              seu acesso com <span className="text-success font-bold">60% de desconto</span>
            </div>
          </div>

          {/* Benefits recap */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 px-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
              <div className="text-xl md:text-2xl mb-2">🎯</div>
              <div className="font-semibold text-sm md:text-base">4 Cursos em 1</div>
              <div className="text-xs md:text-sm opacity-80">Valor de R$ 497 por apenas R$ 197</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
              <div className="text-xl md:text-2xl mb-2">⚡</div>
              <div className="font-semibold text-sm md:text-base">Acesso Imediato</div>
              <div className="text-xs md:text-sm opacity-80">Comece hoje mesmo a estudar</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
              <div className="text-xl md:text-2xl mb-2">🏆</div>
              <div className="font-semibold text-sm md:text-base">Garantia Total</div>
              <div className="text-xs md:text-sm opacity-80">Suporte completo incluído</div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-4 md:space-y-6 px-2">
            <Button 
              variant="cta" 
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-12 py-3 md:py-4 lg:py-6 shadow-2xl transform hover:scale-105"
              onClick={() => window.open('https://pay.kiwify.com.br/Ve66GBT', '_blank')}
            >
              <span className="hidden sm:inline">🔥 QUERO TRANSFORMAR MINHA CARREIRA AGORA</span>
              <span className="sm:hidden">🔥 TRANSFORMAR CARREIRA</span>
            </Button>
            
            <p className="text-xs md:text-sm opacity-80 px-2">
              ⚡ Acesso em menos de 2 minutos • 💳 Parcelamento em até 12x • 🔒 Compra 100% segura
            </p>

            {/* Risk reversal */}
            <div className="bg-success/20 backdrop-blur-sm border border-success/30 rounded-lg p-4 max-w-md mx-auto mt-8">
              <div className="text-white font-semibold">
                ✅ RISCO ZERO: Se não ficar satisfeito, devolvemos seu dinheiro!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};