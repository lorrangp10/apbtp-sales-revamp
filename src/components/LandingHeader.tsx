import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useState } from "react";
import Logo from "@/assets/LOGO.png"; // <-- Importa o logo

export const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#sobre", label: "Sobre o Curso" },
    { href: "#modulos", label: "Módulos" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#preco", label: "Preços" },
  ];

  const handleMenuClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border w-full">
      <div className="container mx-auto px-4 w-full max-w-full">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <img src={Logo} alt="Logo DataFlow" className="w-full h-full object-contain" />
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

          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="z-[100]">
              <div className="flex flex-col gap-4 p-6">
                {menuItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleMenuClick(item.href)}
                    className="text-left text-lg py-3 hover:text-primary transition-fast border-b border-border/50 last:border-b-0"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  variant="hero" 
                  size="lg"
                  className="mt-4"
                  onClick={() => {
                    setIsOpen(false);
                    window.open('https://members.kiwify.com/login?club=405e8962-78c2-4912-a1d4-15f45358c1dc', '_blank');
                  }}
                >
                  Acessar Agora
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};
