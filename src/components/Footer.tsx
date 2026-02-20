import { UtensilsCrossed, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary">
              <UtensilsCrossed className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-gradient">SmartCanteen</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/menu" className="hover:text-primary transition-colors">Menu</Link>
            <Link to="/orders" className="hover:text-primary transition-colors">Orders</Link>
            <Link to="/login" className="hover:text-primary transition-colors">Login</Link>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-3 w-3 text-accent" /> in India 🇮🇳
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
