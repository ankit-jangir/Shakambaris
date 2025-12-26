import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Leaf, Award } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#faf8f3] via-white to-[#f5f1eb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 rounded-full border border-[#d4af37]/20">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm text-[#6b4423]">100% Natural & Organic</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl text-[#2d1f1a] leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Pure, Premium &{' '}
              <span className="text-[#6b4423] italic">Naturally Healthy</span>{' '}
              Dry Fruits
            </h1>

            <p className="text-lg text-foreground/70 max-w-xl">
              Discover the finest selection of hand-picked dry fruits, sourced
              from the world's best farms. Packed fresh with love and delivered
              to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('shop')}
                className="group px-8 py-4 bg-[#6b4423] text-white rounded-full hover:bg-[#543318] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-4 border-2 border-[#6b4423] text-[#6b4423] rounded-full hover:bg-[#6b4423] hover:text-white transition-all duration-300"
              >
                Learn More
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <Leaf className="w-8 h-8 text-[#3a5a40] mx-auto mb-2" />
                <p className="text-sm text-foreground/60">100% Organic</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-[#d4af37] mx-auto mb-2" />
                <p className="text-sm text-foreground/60">Premium Quality</p>
              </div>
              <div className="text-center">
                <Sparkles className="w-8 h-8 text-[#c4a57b] mx-auto mb-2" />
                <p className="text-sm text-foreground/60">Freshly Packed</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1584542979166-bd34924d7b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnklMjBmcnVpdHMlMjB3b29kZW4lMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2NjU2NjU3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Premium dry fruits assortment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d1f1a]/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
            >
              <p className="text-sm text-foreground/60 mb-1">Limited Time Offer</p>
              <p className="text-2xl text-[#6b4423]" style={{ fontFamily: 'Playfair Display, serif' }}>
                20% Off on First Order
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#3a5a40]/10 rounded-full blur-3xl"></div>
    </section>
  );
}
