import { ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  cartItemCount: number;
  isLoggedIn: boolean;
}

export function Header({ onNavigate, cartItemCount, isLoggedIn }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Shop', page: 'shop' },
    { name: 'About', page: 'about' },
    { name: 'Blog', page: 'blog' },
    { name: 'Contact', page: 'contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#6b4423] to-[#c4a57b] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-semibold text-[#6b4423] hidden sm:block">
              Shakambaris
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className="text-foreground/80 hover:text-[#6b4423] transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate(isLoggedIn ? 'orders' : 'login')}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="User account"
            >
              <User className="w-5 h-5 text-foreground/70" />
            </button>

            <button
              onClick={() => onNavigate('wishlist')}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 text-foreground/70" />
            </button>

            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5 text-foreground/70" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#d4af37] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="py-4 space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.page}
                    onClick={() => {
                      onNavigate(link.page);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-foreground/80 hover:bg-muted hover:text-[#6b4423] rounded-lg transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
