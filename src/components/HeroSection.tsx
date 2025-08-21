import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-professional.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-glow rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
              🔥 Mais de 500 alunos já transformaram suas carreiras
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Domine{" "}
                <span className="text-primary-glow font-bold">
                  SAP BTP CPI
                </span>{" "}
                E Seja O Profissional Que As{" "}
                <span className="text-primary-glow">
                  Grandes Empresas Disputam!
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Aprenda a integrar o SAP com <strong>Groovy, APIs, WhatsApp, Apps Fiori</strong> e muito mais! 
                O único curso do mercado com casos reais de integração.
              </p>
            </div>

            {/* Value proposition */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border shadow-card">
              <h3 className="text-lg font-semibold mb-3">🎯 O que você vai conquistar:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✅ Dominar SAP BTP CPI do zero ao avançado</li>
                <li>✅ Criar integrações reais com S/4HANA</li>
                <li>✅ Pode Aumentar seu salário em até 300%</li>
                <li>✅ Ser disputado pelas melhores empresas</li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="flex-1 sm:flex-none"
                onClick={() => window.open('https://pay.kiwify.com.br/Ve66GBT', '_blank')}
              >
                🚀 Acessar com Desconto Exclusivo
              </Button>
              
              <Button 
                variant="outline" 
                size="xl" 
                className="flex-1 sm:flex-none"
                onClick={() => window.open('https://www.youtube.com/watch?v=Ek07IX9aAbw', '_blank')}
              >
                📹 Ver Aula Gratuita
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-primary rounded-full border-2 border-background flex items-center justify-center text-xs text-primary-foreground font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span>Junte-se a mais de 500 profissionais de sucesso</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="Profissional SAP BTP CPI trabalhando"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-accent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
              4 Cursos em 1!
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-warning text-warning-foreground px-4 py-2 rounded-full font-bold shadow-lg">
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