import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SolutionSection = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "100% Focado na Prática",
      description: "Casos reais de integração com S/4HANA, APIs externas, WhatsApp e muito mais"
    },
    {
      icon: "🚀",
      title: "4 Cursos Completos em 1",
      description: "SAP BTP CPI + Groovy Script + CDS Views + Apps Fiori em um pacote único"
    },
    {
      icon: "💼",
      title: "Cenários Corporativos Reais",
      description: "Aprenda com projetos que você encontrará no dia a dia empresarial"
    },
    {
      icon: "⚡",
      title: "Do Zero ao Especialista",
      description: "Mesmo sem conhecimento prévio, você sairá dominando todas as tecnologias"
    },
    {
      icon: "🎓",
      title: "Metodologia Comprovada",
      description: "Mais de 500 alunos já transformaram suas carreiras com nosso método"
    },
    {
      icon: "🔧",
      title: "Suporte Técnico Completo",
      description: "Tire todas suas dúvidas e nunca fique travado nos projetos"
    }
  ];

  return (
    <section id="sobre" className="py-20 w-full overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 w-full max-w-full">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 md:mb-6 border-success text-success">
            ✅ A Solução Definitiva
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 break-words px-2">
            📚 Guia Definitivo{" "}
            <span className="text-primary font-bold">
              Integration Suite
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            O único curso do mercado que ensina SAP BTP CPI + S/4HANA com casos reais de integração. 
            Transforme sua carreira em 30 dias!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 bg-success/20 text-success px-4 sm:px-6 py-3 rounded-full border border-success/30 mx-4 text-sm sm:text-base">
            <span className="font-semibold">🎉 Promoção Exclusiva:</span>
            <span className="text-center">4 cursos completos por apenas R$ 197,00!</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-smooth border-primary/20">
              <CardHeader>
                <div className="text-4xl mb-2">{benefit.icon}</div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course breakdown */}
        <div className="bg-gradient-accent rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-center mb-8">
            🎯 O Que Você Vai Dominar
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background/50 rounded-lg border border-border">
              <div className="text-3xl mb-3">🔗</div>
              <h4 className="font-semibold mb-2 text-foreground">SAP BTP CPI</h4>
              <p className="text-sm text-muted-foreground">
                Integrações robustas entre sistemas SAP e externos
              </p>
            </div>
            
            <div className="text-center p-6 bg-background/50 rounded-lg border border-border">
              <div className="text-3xl mb-3">⚙️</div>
              <h4 className="font-semibold mb-2">Groovy Script</h4>
              <p className="text-sm text-muted-foreground">
                Automação e personalização de fluxos de integração
              </p>
            </div>
            
            <div className="text-center p-6 bg-background/50 rounded-lg border border-border">
              <div className="text-3xl mb-3">🗄️</div>
              <h4 className="font-semibold mb-2">CDS Views</h4>
              <p className="text-sm text-muted-foreground">
                Modelagem inteligente de dados no SAP HANA
              </p>
            </div>
            
            <div className="text-center p-6 bg-background/50 rounded-lg border border-border">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-semibold mb-2">Apps Fiori</h4>
              <p className="text-sm text-muted-foreground">
                Aplicações modernas sem programação complexa
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button 
            variant="cta" 
            size="lg"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-sm md:text-base"
            onClick={() => window.open('https://pay.kiwify.com.br/Ve66GBT', '_blank')}
          >
            <span className="hidden sm:inline">🔥 Quero Transformar Minha Carreira Agora</span>
            <span className="sm:hidden">🔥 Transformar Carreira</span>
          </Button>
          <p className="text-xs md:text-sm text-muted-foreground mt-3 md:mt-4 px-4">
            ⚡ Acesso imediato • 💳 Parcelamento em até 12x • 🔒 Compra 100% segura
          </p>
        </div>
      </div>
    </section>
  );
};