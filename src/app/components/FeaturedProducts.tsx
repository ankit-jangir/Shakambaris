import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import type { Product } from '../types';

interface FeaturedProductsProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export function FeaturedProducts({ products, onProductClick }: FeaturedProductsProps) {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl sm:text-5xl text-[#2d1f1a] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Featured Products
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover our handpicked selection of premium dry fruits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => onProductClick(product)}
                className="group block w-full text-left"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.isOrganic && (
                      <div className="absolute top-4 left-4 bg-[#3a5a40] text-white text-xs px-3 py-1 rounded-full">
                        Organic
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-[#c4a57b] mb-2">{product.category}</p>
                    <h3 className="text-xl text-[#2d1f1a] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
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
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl text-[#6b4423]">
                        ${product.price}
                      </span>
                      <span className="text-sm text-foreground/60">
                        per 250g
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => onProductClick(products[0])}
            className="px-8 py-3 border-2 border-[#6b4423] text-[#6b4423] rounded-full hover:bg-[#6b4423] hover:text-white transition-all duration-300"
          >
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}
