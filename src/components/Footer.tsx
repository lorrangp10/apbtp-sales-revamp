export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 w-full overflow-hidden">
      <div className="container mx-auto px-4 w-full max-w-full">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">DataFlow</h3>
                <p className="text-xs text-muted-foreground">Consultoria</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Transformando carreiras através do conhecimento em SAP BTP CPI. 
              Mais de 500 profissionais já confiaram em nossa metodologia.
            </p>
          </div>

          {/* Course */}
          <div className="space-y-4">
            <h4 className="font-semibold">📚 Curso</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>SAP BTP CPI</li>
              <li>Groovy Script</li>
              <li>CDS Views</li>
              <li>Apps Fiori</li>
              <li>Integrações Reais</li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">🆘 Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="font-medium">WhatsApp:</span> (+55) 31 996904401
              </li>
              <li>
                <span className="font-medium">Horário:</span> Seg-Sex 9h às 18h
              </li>
              <li>
                <span className="font-medium">Resposta:</span> Em até 24h
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">⚖️ Informações</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Política de Privacidade</li>
              <li>Termos de Uso</li>
              <li>Política de Reembolso</li>
              <li>Certificações</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 DataFlow Consultoria. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>🔒 Pagamentos seguros via Kiwify</span>
              <span>⚡ Acesso imediato</span>
              <span>🏆 +500 alunos satisfeitos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};