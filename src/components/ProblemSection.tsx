import { Card, CardContent } from "@/components/ui/card";

export const ProblemSection = () => {
  const problems = [
    {
      icon: "😤",
      title: "Cursos teóricos que não ensinam a prática",
      description: "Você estuda, mas não consegue aplicar no mundo real"
    },
    {
      icon: "🔒",
      title: "Falta de conhecimento em integrações SAP",
      description: "Empresas exigem profissionais que dominem BTP CPI"
    },
    {
      icon: "💸",
      title: "Salário estagnado por falta de especialização",
      description: "Sem conhecimentos avançados, você fica para trás"
    },
    {
      icon: "⏰",
      title: "Perda de oportunidades por não saber integrar",
      description: "Vagas de R$ 8.000+ passam longe do seu currículo"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 w-full overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 w-full max-w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 break-words px-2">
            🚫 Cansado De Ficar Para Trás Enquanto{" "}
            <span className="text-destructive">Outros Avançam?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Você não é o único que enfrenta esses desafios. Milhares de profissionais SAP 
            estão presos nos mesmos problemas que impedem o crescimento profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="border-destructive/20 shadow-card hover:shadow-lg transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{problem.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-destructive">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 md:p-6 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-destructive mb-3 md:mb-4">
              ⚠️ A Realidade Dolorosa
            </h3>
            <p className="text-sm sm:text-base md:text-lg">
              Enquanto você fica parado, outros profissionais estão se especializando e 
              conquistando vagas de <strong>R$ 8.000 a R$ 15.000</strong> como Consultor SAP BTP CPI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};