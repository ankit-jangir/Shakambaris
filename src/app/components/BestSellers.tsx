import { motion } from 'motion/react';
import { Star, TrendingUp } from 'lucide-react';
import type { Product } from '../types';

interface BestSellersProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export function BestSellers({ products, onProductClick }: BestSellersProps) {
  const bestSellers = products.filter(p => p.isBestSeller);

  return (
    <section className="py-20 bg-gradient-to-br from-[#faf8f3] to-[#f5f1eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 rounded-full border border-[#d4af37]/20 mb-4">
            <TrendingUp className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm text-[#6b4423]">Customer Favorites</span>
          </div>

          <h2
            className="text-4xl sm:text-5xl text-[#2d1f1a] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Best Sellers
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our most loved products, trusted by thousands
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => onProductClick(product)}
                className="group block w-full text-left"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute -top-3 -right-3 bg-gradient-to-br from-[#d4af37] to-[#c4a57b] text-white text-xs px-4 py-2 rounded-full shadow-lg">
                    Best Seller
                  </div>

                  <div className="aspect-square rounded-xl overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div>
                    <h3
                      className="text-xl text-[#2d1f1a] mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-[#d4af37] text-[#d4af37]'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-foreground/60">
                        {product.rating}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl text-[#6b4423]">
                        ${product.price}
                      </span>
                      <span className="text-xs text-foreground/50">
                        {product.reviews} reviews
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
