import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const PricingSection = () => {
  const pricingOptions = [
    {
      title: "Pagamento à Vista",
      subtitle: "PIX ou Cartão",
      price: "R$ 197,00",
      originalPrice: "R$ 497,00",
      discount: "60% OFF",
      features: [
        "🎯 4 Cursos Completos em 1 Pacote",
        "📚 20 Módulos Práticos",
        "💻 Casos Reais de Integração", 
        "🎁 Materiais Extras e Templates",
        "📞 Suporte WhatsApp",
        "🏆 Certificado de Conclusão",
        "🔄 Acesso Vitalício ao Conteúdo"
      ],
      highlight: true,
      buttonText: "🔥 Garantir Acesso à Vista"
    },
    {
      title: "Parcelamento",
      subtitle: "Facilidade no Cartão",
      price: "12x R$ 20,37",
      originalPrice: "R$ 497,00", 
      discount: "60% OFF",
      features: [
        "🎯 4 Cursos Completos em 1 Pacote",
        "📚 20 Módulos Práticos", 
        "💻 Casos Reais de Integração",
        "🎁 Materiais Extras e Templates",
        "📞 Suporte WhatsApp",
        "🏆 Certificado de Conclusão",
        "🔄 Acesso Vitalício ao Conteúdo"
      ],
      highlight: false,
      buttonText: "💳 Parcelar no Cartão"
    },
    {
      title: "Boleto Bancário",
      subtitle: "Para sua Comodidade",
      price: "R$ 197,00",
      originalPrice: "R$ 497,00",
      discount: "60% OFF", 
      features: [
        "🎯 4 Cursos Completos em 1 Pacote",
        "📚 20 Módulos Práticos",
        "💻 Casos Reais de Integração",
        "🎁 Materiais Extras e Templates", 
        "📞 Suporte WhatsApp",
        "🏆 Certificado de Conclusão",
        "🔄 Acesso Vitalício ao Conteúdo"
      ],
      highlight: false,
      buttonText: "🏦 Pagar com Boleto"
    }
  ];

  return (
    <section id="preco" className="py-20 bg-muted/20 w-full overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 w-full max-w-full">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 md:mb-6 border-success text-success bg-success/10">
            🔥 Promoção Por Tempo Limitado
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 break-words px-2">
            💰 Acesse o Conteúdo Completo{" "}
            <span className="text-success">Com as Melhores Condições</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            Investimento que se paga na primeira oportunidade! Consultores SAP BTP CPI ganham de R$ 8.000 a R$ 15.000 por mês.
          </p>
          
          {/* Urgency */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 md:p-6 max-w-2xl mx-auto mb-4 md:mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-destructive mb-2">
              ⏰ ATENÇÃO: Promoção Válida Por Apenas 48 Horas!
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Após esse período, o valor volta para <strong>R$ 497,00</strong>. 
              Garante já sua vaga com 60% de desconto!
            </p>
          </div>

          {/* Cupom adicional */}
          <div className="bg-success/10 border border-success/30 rounded-lg p-4 md:p-6 max-w-2xl mx-auto mb-8 md:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-success mb-2">
              🎉 CUPOM ESPECIAL: 30% OFF ADICIONAL!
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Use o cupom que aparece no checkout e pague apenas <strong>R$ 137,90</strong> à vista! 
              Economia total de mais de R$ 350,00.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`shadow-card hover:shadow-lg transition-smooth ${
                option.highlight 
                  ? 'border-success border-2 relative overflow-hidden' 
                  : 'border-border'
              }`}
            >
              {option.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-success text-success-foreground text-center py-2 text-sm font-semibold">
                  ⭐ MAIS ESCOLHIDA ⭐
                </div>
              )}
              
              <CardHeader className={option.highlight ? 'pt-12' : 'pt-6'}>
                <div className="text-center">
                  <Badge variant="outline" className="mb-4 border-primary text-primary">
                    {option.discount}
                  </Badge>
                   <CardTitle className="text-lg sm:text-xl md:text-2xl mb-2 break-words">{option.title}</CardTitle>
                   <p className="text-muted-foreground mb-4 text-sm md:text-base">{option.subtitle}</p>
                   
                   <div className="space-y-2">
                     <div className="text-xs sm:text-sm text-muted-foreground line-through">
                       De: {option.originalPrice}
                     </div>
                     <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-success break-words">
                       {option.price}
                     </div>
                   </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-success">✅</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={option.highlight ? "cta" : "hero"}
                  size="lg" 
                  className="w-full text-sm md:text-base px-4 py-3 break-words"
                  onClick={() => window.open('https://pay.kiwify.com.br/Ve66GBT', '_blank')}
                >
                  <span className="text-center">{option.buttonText}</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantees */}
        <div className="bg-gradient-accent rounded-2xl p-8 border border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              🛡️ Suas Garantias de Segurança
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="font-semibold mb-2">Pagamento 100% Seguro</h4>
              <p className="text-sm text-muted-foreground">
                Plataforma Kiwify com certificado SSL
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-semibold mb-2">Acesso Imediato</h4>
              <p className="text-sm text-muted-foreground">
                Comece a estudar assim que o pagamento for aprovado
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-semibold mb-2">Suporte Garantido</h4>
              <p className="text-sm text-muted-foreground">
                Tire suas dúvidas direto com o instrutor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};