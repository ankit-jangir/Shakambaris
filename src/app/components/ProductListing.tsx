import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Heart, SlidersHorizontal } from 'lucide-react';
import type { Product } from '../types';

interface ProductListingProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  wishlistItems: number[];
  onToggleWishlist: (productId: number) => void;
}

export function ProductListing({
  products,
  onProductClick,
  wishlistItems,
  onToggleWishlist
}: ProductListingProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Almonds', 'Cashews', 'Pistachios', 'Walnuts', 'Raisins', 'Dates', 'Figs', 'Mixed'];

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <section className="min-h-screen py-12 bg-gradient-to-br from-[#fdfbf7] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1
            className="text-4xl sm:text-5xl text-[#2d1f1a] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Premium Collection
          </h1>
          <p className="text-lg text-foreground/70">
            Discover nature's finest dry fruits
          </p>
        </motion.div>

        {/* Filters & Sort */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#6b4423] text-white shadow-lg'
                      : 'bg-white text-foreground/70 hover:bg-[#f5f1eb] border border-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-full hover:bg-muted transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white border border-border rounded-full outline-none focus:ring-2 focus:ring-[#6b4423]"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-foreground/60">
            Showing {sortedProducts.length} products
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
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

                  {product.isOrganic && (
                    <div className="absolute top-4 left-4 bg-[#3a5a40] text-white text-xs px-3 py-1 rounded-full">
                      Organic
                    </div>
                  )}

                  <button
                    onClick={() => onToggleWishlist(product.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        wishlistItems.includes(product.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-foreground/70'
                      }`}
                    />
                  </button>
                </div>

                <div className="p-5">
                  <p className="text-sm text-[#c4a57b] mb-2">{product.category}</p>

                  <button
                    onClick={() => onProductClick(product)}
                    className="text-left w-full"
                  >
                    <h3
                      className="text-lg text-[#2d1f1a] mb-2 group-hover:text-[#6b4423] transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {product.name}
                    </h3>
                  </button>

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
                    <span className="text-sm text-foreground/60">per 250g</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
