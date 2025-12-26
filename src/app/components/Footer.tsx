import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Shield, CreditCard, Truck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#2d1f1a] to-[#6b4423] text-white">
      {/* Trust Badges */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#d4af37]" />
              </div>
              <div>
                <p className="font-medium">100% Organic Certified</p>
                <p className="text-sm text-white/70">Pure & Natural</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-[#d4af37]" />
              </div>
              <div>
                <p className="font-medium">Secure Payment</p>
                <p className="text-sm text-white/70">SSL Encrypted</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-[#d4af37]" />
              </div>
              <div>
                <p className="font-medium">Free Shipping</p>
                <p className="text-sm text-white/70">On orders over $50</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#d4af37] to-[#c4a57b] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span
                className="text-2xl"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
               Shakambaris
              </span>
            </div>
            <p className="text-white/80 mb-6">
              Premium quality dry fruits sourced from the world's finest farms.
              Pure, healthy, and naturally delicious.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Shop', 'About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-white/80 hover:text-[#d4af37] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="text-white/80 hover:text-[#d4af37] transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#d4af37] transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#d4af37] transition-colors">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#d4af37] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#d4af37] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  123 Organic Street,<br />
                  Health Valley, CA 94016
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/80 hover:text-[#d4af37] transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <a href="mailto:info@Shakambaris.com" className="text-white/80 hover:text-[#d4af37] transition-colors">
                  info@Shakambaris.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-white/70">
          <p>
            © {currentYear} Shakambaris. All rights reserved. Made with ❤️ for healthy living.
          </p>
        </div>
      </div>
    </footer>
  );
}
