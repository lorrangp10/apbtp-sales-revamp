import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Luana Katy",
      role: "Consultora SAP",
      content: "Quero deixar registrado meu agradecimento pelo curso de SAP BTP CPI com Groovy. O conteúdo foi extremamente claro, prático e direto ao ponto — exatamente o que eu precisava para evoluir na integração de sistemas SAP. As explicações sobre o uso de Groovy Script no CPI foram um diferencial. Antes eu tinha muita dificuldade com essa parte, mas com os exemplos e a didática do curso, tudo fez sentido. A estrutura foi muito bem pensada, com casos reais que realmente acontecem no dia a dia de um consultor.",
      rating: 5,
      initials: "LK"
    },
    {
      name: "Carla Freitas",
      role: "Desenvolvedora SAP",
      content: "Tudo certo. O curso é bem estruturado, aborda temas que se usam no dia a dia e é muito bem explicado. Consegui aplicar imediatamente no meu trabalho e já vejo resultados práticos. Recomendo para qualquer profissional que queira se destacar na área de integrações SAP.",
      rating: 5,
      initials: "CF"
    },
    {
      name: "Alef Souza",
      role: "Analista de Sistemas",
      content: "O curso superou minhas expectativas! Estava procurando algo prático e encontrei exatamente isso. As integrações com WhatsApp e Mercado Livre foram fantásticas de aprender. Nunca imaginei que seria possível fazer essas integrações de forma tão simples. Minha carreira deu um salto após concluir o curso.",
      rating: 5,
      initials: "AS"
    }
  ];

  const stats = [
    { number: "500+", label: "Alunos Satisfeitos" },
    { number: "4.9/5", label: "Avaliação Média" },
    { number: "98%", label: "Taxa de Aprovação" },
    { number: "24h", label: "Suporte Rápido" }
  ];

  return (
    <section id="depoimentos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            💬 Mais de{" "}
            <span className="text-success">500 Alunos Satisfeitos!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos alunos falam sobre a transformação que o curso trouxe para suas carreiras
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">⭐</span>
                  ))}
                </div>

                <blockquote className="text-muted-foreground italic">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="bg-gradient-accent rounded-2xl p-8 border border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">
              🏆 Por Que Nossos Alunos Escolhem A DataFlow?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">Metodologia Comprovada</h4>
                <p className="text-muted-foreground text-sm">
                  Método testado e aprovado por centenas de profissionais
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">💼</div>
                <h4 className="font-semibold mb-2">Cases Reais</h4>
                <p className="text-muted-foreground text-sm">
                  Projetos que você encontrará no mercado de trabalho
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-semibold mb-2">Resultados Garantidos</h4>
                <p className="text-muted-foreground text-sm">
                  Aplique no trabalho desde o primeiro módulo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};