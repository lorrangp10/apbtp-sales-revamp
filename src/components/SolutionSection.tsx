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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-success text-success">
            ✅ A Solução Definitiva
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-foreground">
            📚 Guia Definitivo{" "}
            <span className="text-blue-500 font-bold">
              Integration Suite
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            O único curso do mercado que ensina SAP BTP CPI + S/4HANA com casos reais de integração. 
            Transforme sua carreira em 30 dias!
          </p>
          
          <div className="inline-flex items-center gap-2 bg-success/20 text-success px-6 py-3 rounded-full border border-success/30">
            <span className="font-semibold">🎉 Promoção Exclusiva:</span>
            <span>4 cursos completos por apenas R$ 197,00!</span>
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
              <h4 className="font-semibold mb-2">SAP BTP CPI</h4>
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

        <div className="text-center mt-12">
          <Button 
            variant="cta" 
            size="xl"
            onClick={() => window.open('https://pay.kiwify.com.br/Ve66GBT', '_blank')}
          >
            🔥 Quero Transformar Minha Carreira Agora
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            ⚡ Acesso imediato • 💳 Parcelamento em até 12x • 🔒 Compra 100% segura
          </p>
        </div>
      </div>
    </section>
  );
};