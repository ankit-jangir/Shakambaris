import { motion } from 'motion/react';
import { Heart, ShoppingCart, X } from 'lucide-react';
import type { Product } from '../types';

interface WishlistProps {
  wishlistItems: number[];
  products: Product[];
  onProductClick: (product: Product) => void;
  onToggleWishlist: (productId: number) => void;
}

export function Wishlist({
  wishlistItems,
  products,
  onProductClick,
  onToggleWishlist
}: WishlistProps) {
  const wishlistProducts = products.filter((product) =>
    wishlistItems.includes(product.id)
  );

  if (wishlistProducts.length === 0) {
    return (
      <section className="min-h-[70vh] py-20 bg-gradient-to-br from-[#fdfbf7] to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="w-24 h-24 text-foreground/20 mx-auto mb-6" />
            <h2
              className="text-3xl text-[#2d1f1a] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Your Wishlist is Empty
            </h2>
            <p className="text-foreground/60 mb-8">
              Save your favorite items for later
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-12 bg-gradient-to-br from-[#fdfbf7] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h1
              className="text-4xl text-[#2d1f1a]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              My Wishlist
            </h1>
            <p className="text-foreground/60">
              {wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <button
                    onClick={() => onProductClick(product)}
                    className="w-full h-full"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </button>

                  <button
                    onClick={() => onToggleWishlist(product.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition-colors shadow-lg"
                    aria-label="Remove from wishlist"
                  >
                    <X className="w-5 h-5 text-red-500" />
                  </button>

                  {product.isOrganic && (
                    <div className="absolute top-4 left-4 bg-[#3a5a40] text-white text-xs px-3 py-1 rounded-full">
                      Organic
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <p className="text-sm text-[#c4a57b] mb-2">{product.category}</p>

                  <button
                    onClick={() => onProductClick(product)}
                    className="text-left w-full mb-3"
                  >
                    <h3
                      className="text-lg text-[#2d1f1a] group-hover:text-[#6b4423] transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {product.name}
                    </h3>
                  </button>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl text-[#6b4423]">
                      ${product.price}
                    </span>
                    <span className="text-sm text-foreground/60">per 250g</span>
                  </div>

                  <button
                    onClick={() => onProductClick(product)}
                    className="w-full py-3 bg-[#6b4423] text-white rounded-full hover:bg-[#543318] transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
