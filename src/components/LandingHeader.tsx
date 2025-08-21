import { Button } from "@/components/ui/button";

export const LandingHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">D</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold">DataFlow</h2>
              <p className="text-xs text-muted-foreground">Consultoria</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm hover:text-primary transition-fast">
              Sobre o Curso
            </a>
            <a href="#modulos" className="text-sm hover:text-primary transition-fast">
              Módulos
            </a>
            <a href="#depoimentos" className="text-sm hover:text-primary transition-fast">
              Depoimentos
            </a>
            <a href="#preco" className="text-sm hover:text-primary transition-fast">
              Preços
            </a>
          </nav>

          <Button 
            variant="hero" 
            size="lg"
            className="hidden md:flex"
            onClick={() => window.open('https://members.kiwify.com/login?club=405e8962-78c2-4912-a1d4-15f45358c1dc', '_blank')}
          >
            Acessar Agora
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};