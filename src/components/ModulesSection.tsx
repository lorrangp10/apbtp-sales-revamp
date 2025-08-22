import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ModulesSection = () => {
  const modules = [
    {
      number: "01",
      category: "Introdução",
      title: "Primeiros Passos",
      description: "Conheça o SAP BTP CPI, entenda os conceitos básicos e prepare seu ambiente para iniciar suas integrações."
    },
    {
      number: "02",
      category: "Configuração",
      title: "Infraestrutura SAP BTP",
      description: "Aprenda a conectar o SAP S4HANA ao BTP e vincular sistemas externos ao BTP."
    },
    {
      number: "03",
      category: "Mão na Massa",
      title: "Criando Primeiros Pacotes no CPI",
      description: "Aprenda a criar seus primeiros pacotes e entender o funcionamento do Integration Suite na prática."
    },
    {
      number: "04",
      category: "Integração",
      title: "Utilizando SAP BTP Junto ao S4HANA",
      description: "Configure a comunicação entre seu ambiente BTP e o SAP S/4HANA, aprendendo sobre usuários, RFC e conectividade."
    },
    {
      number: "05",
      category: "Integração Real",
      title: "Exportando Dados do S4HANA",
      description: "Conecte seu sistema SAP com um banco externo e envie dados do S/4HANA para o SQL Server utilizando CPI."
    },
    {
      number: "06",
      category: "Scripts e Automação",
      title: "Aprofundando em Groovy",
      description: "Entenda como usar Groovy Script no CPI para manipular dados, chamadas e lógicas em tempo de execução."
    },
    {
      number: "07",
      category: "Primeiros Passos",
      title: "Groovy Script - Introdução",
      description: "Aprenda a sintaxe básica, boas práticas e a estrutura de scripts Groovy no SAP CPI."
    },
    {
      number: "08",
      category: "Comunicação Externa",
      title: "Groovy - Integração com APIs REST",
      description: "Use Groovy para consumir APIs externas e integrar serviços REST ao seu fluxo de integração."
    },
    {
      number: "09",
      category: "Case Real",
      title: "Integrando CPI com Mercado Livre",
      description: "Exemplo prático de como conectar o SAP CPI com o Mercado Livre para automação de vendas."
    },
    {
      number: "10",
      category: "Comunicação Instantânea",
      title: "Integrando SAP BTP com WhatsApp",
      description: "Conecte seu SAP CPI com o WhatsApp para notificações e integração com clientes."
    },
    {
      number: "11",
      category: "Bots e Mensagens",
      title: "Integrando SAP BTP com Telegram",
      description: "Aprenda a integrar com o Telegram e enviar mensagens automáticas com dados do SAP."
    },
    {
      number: "12",
      category: "SAP na Veia",
      title: "BTP CPI Consumindo Dados do S4HANA",
      description: "Utilize Groovy para buscar dados diretamente do S/4HANA via OData ou RFCs com CPI."
    },
    {
      number: "13",
      category: "Fundamentos de Dados",
      title: "Aprofundando em CDS VIEW",
      description: "Conheça o poder das CDS Views no SAP HANA e como elas estruturam seus dados para consumo eficiente."
    },
    {
      number: "14",
      category: "Nível Intermediário",
      title: "CDS View - Comandos Avançados",
      description: "Domine comandos mais complexos como associações, joins e estruturas de views compostas."
    },
    {
      number: "15",
      category: "Inteligência de Dados",
      title: "CDS View - Funções de Cálculos",
      description: "Use funções como AVG, MIN, MAX e SUM diretamente nas CDS para relatórios analíticos."
    },
    {
      number: "16",
      category: "Modelagem de Dados",
      title: "CDS View - Aprendendo Sobre JOIN",
      description: "Entenda como relacionar tabelas e construir views inteligentes com JOINs e ASSOCIATIONS."
    },
    {
      number: "17",
      category: "Casos Reais",
      title: "Consumindo CDS View em Projetos Reais",
      description: "Veja exemplos de CDS Views aplicadas em cenários do dia a dia no SAP S/4HANA."
    },
    {
      number: "18",
      category: "Experiência do Usuário",
      title: "Aprofundando em Aplicações Fiori",
      description: "Descubra como transformar CDS Views em aplicações modernas usando a tecnologia Fiori."
    },
    {
      number: "19",
      category: "Desenvolvimento Low-Code",
      title: "Criando Apps Fiori Sem Programar",
      description: "Crie aplicativos funcionais com base em CDS Views utilizando Fiori Elements, sem escrever código."
    },
    {
      number: "20",
      category: "Desenvolvimento Para o Mercado",
      title: "Apps Fiori - Criando Aplicativos Impressionantes",
      description: "Crie aplicativos funcionais, para resolver problemas e surpreender no mercado de trabalho."
    }
  ];

  return (
    <section id="modulos" className="py-20 bg-muted/20 w-full overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 w-full max-w-full">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 md:mb-6 border-primary text-primary">
            📚 Conteúdo Completo
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 break-words px-2">
            🎯 Estrutura Completa do Curso
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            20 módulos práticos que vão te levar do zero ao especialista em SAP BTP CPI. 
            Cada módulo foi cuidadosamente estruturado para maximizar seu aprendizado.
          </p>
        </div>


        {/* Modules grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {modules.map((module, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-smooth group">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                    {module.number}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {module.category}
                  </Badge>
                </div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-fast">
                  {module.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {module.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bonus content */}
        <div className="bg-gradient-accent rounded-2xl p-8 border border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              🎁 Bônus Exclusivos Inclusos
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">📞</div>
                <h4 className="font-semibold mb-2">Suporte Direto</h4>
                <p className="text-sm text-muted-foreground">
                  WhatsApp: (+55) 31 996904401
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-2">🗂️</div>
                <h4 className="font-semibold mb-2">Materiais Extras</h4>
                <p className="text-sm text-muted-foreground">
                  Templates e códigos prontos
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-2">🏆</div>
                <h4 className="font-semibold mb-2">Certificado</h4>
                <p className="text-sm text-muted-foreground">
                  Certificação de conclusão
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};