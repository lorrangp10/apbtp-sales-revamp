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

      <div className="container mx-auto px-4 relative z-10 w-full max-w-full">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-6xl font-bold mb-6 leading-tight">
            🚀 Não Deixe Essa Oportunidade Passar!
          </h2>
          
          <p className="text-xl lg:text-2xl mb-8 opacity-90">
            Enquanto você hesita, outros profissionais estão se especializando e 
            conquistando vagas de <strong>R$ 8.000 a R$ 15.000</strong> como Consultor SAP BTP CPI.
          </p>

          {/* Urgency countdown visual */}
          <div className="bg-destructive/20 backdrop-blur-sm border border-destructive/30 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <div className="text-2xl font-bold mb-2">⏰ ÚLTIMAS HORAS DA PROMOÇÃO!</div>
            <div className="text-lg">
              Restam apenas <span className="text-warning font-bold">48 horas</span> para garantir 
              seu acesso com <span className="text-success font-bold">60% de desconto</span>
            </div>
          </div>

          {/* Benefits recap */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🎯</div>
              <div className="font-semibold">4 Cursos em 1</div>
              <div className="text-sm opacity-80">Valor de R$ 497 por apenas R$ 197</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-semibold">Acesso Imediato</div>
              <div className="text-sm opacity-80">Comece hoje mesmo a estudar</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl mb-2">🏆</div>
              <div className="font-semibold">Garantia Total</div>
              <div className="text-sm opacity-80">Suporte completo incluído</div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-6">
            <Button 
              variant="cta" 
              size="xl"
              className="text-xl px-12 py-6 shadow-2xl transform hover:scale-110"
              onClick={() => window.open('https://pay.kiwify.com.br/Ve66GBT', '_blank')}
            >
              🔥 QUERO TRANSFORMAR MINHA CARREIRA AGORA
            </Button>
            
            <p className="text-sm opacity-80">
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