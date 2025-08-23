import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-professional.jpg";
import techBackground from "@/assets/tech-background.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden w-full">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${techBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary-glow rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-accent rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10 w-full max-w-full">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center w-full">
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <Badge variant="secondary" className="bg-success/20 text-white border-success/30">
              🔥 Mais de 500 alunos já transformaram suas carreiras
            </Badge>
            
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight break-words text-white drop-shadow-lg">
                Domine{" "}
                <span className="text-primary-glow font-bold drop-shadow-lg">
                  SAP BTP CPI
                </span>{" "}
                E Seja O Profissional Que As{" "}
                <span className="text-primary-glow drop-shadow-lg">
                  Grandes Empresas Disputam!
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md">
                Aprenda a integrar o SAP com <strong>Groovy, APIs, WhatsApp, Apps Fiori</strong> e muito mais! 
                O único curso do mercado com casos reais de integração.
              </p>
            </div>

            {/* Value proposition */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-border shadow-card">
              <h3 className="text-base md:text-lg font-semibold mb-3">🎯 O que você vai conquistar:</h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li>✅ Dominar SAP BTP CPI do zero ao avançado</li>
                <li>✅ Criar integrações reais com S/4HANA</li>
                <li>✅ Pode Aumentar seu salário em até 300%</li>
                <li>✅ Ser disputado pelas melhores empresas</li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full sm:w-auto sm:flex-none text-sm md:text-base px-4 md:px-6 py-3 md:py-4 whitespace-nowrap"
                onClick={() => window.open('https://pay.kiwify.com.br/Ve66GBT', '_blank')}
              >
                <span className="hidden sm:inline">🚀 Acessar com Desconto Exclusivo</span>
                <span className="sm:hidden">🚀 Acesso com Desconto</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto sm:flex-none text-sm md:text-base px-4 md:px-6 py-3 md:py-4"
                onClick={() => window.open('https://www.youtube.com/watch?v=Ek07IX9aAbw', '_blank')}
              >
                📹 Ver Aula Gratuita
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full border-2 border-background flex items-center justify-center text-xs text-primary-foreground font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="break-words leading-relaxed">Junte-se a mais de 500 profissionais de sucesso</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="Profissional SAP BTP CPI trabalhando"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-accent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-2 right-2 md:-top-4 md:-right-4 bg-success text-success-foreground px-2 py-1 md:px-4 md:py-2 rounded-full font-bold shadow-lg animate-bounce text-xs md:text-sm">
              4 Cursos em 1!
            </div>
            
            <div className="absolute bottom-2 left-2 md:-bottom-4 md:-left-4 bg-warning text-warning-foreground px-2 py-1 md:px-4 md:py-2 rounded-full font-bold shadow-lg text-xs md:text-sm">
              100% Prático
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};