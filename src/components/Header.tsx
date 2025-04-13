import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  
  return (
    <header className="border-b sticky top-0 z-10 bg-background">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center gap-2">
            <img src="/logo-b.svg" alt="Apple Gift Cards" className="w-8 h-8" />
            <span className="font-bold text-lg hidden md:inline-block">Apple Gift Cards</span>
          </div>
          
          {/* Навигация для десктопа */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Главная</a>
            <a href="#" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#" className="hover:text-primary transition-colors">Доставка</a>
          </nav>
          
          {/* Действия пользователя */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User size={20} />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                  {cartCount}
                </Badge>
              )}
            </Button>
            
            {/* Мобильное меню */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="#" className="hover:text-primary transition-colors py-2">Главная</a>
                  <a href="#" className="hover:text-primary transition-colors py-2">Каталог</a>
                  <a href="#" className="hover:text-primary transition-colors py-2">Доставка</a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
