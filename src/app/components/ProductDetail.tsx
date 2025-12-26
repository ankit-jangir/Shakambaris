import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Heart, ShoppingCart, Truck, RefreshCw, Shield, Leaf, MapPin } from 'lucide-react';
import type { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number, weight: string) => void;
  products: Product[];
  onProductClick: (product: Product) => void;
  isInWishlist: boolean;
  onToggleWishlist: (productId: number) => void;
}

export function ProductDetail({
  product,
  onAddToCart,
  products,
  onProductClick,
  isInWishlist,
  onToggleWishlist
}: ProductDetailProps) {
  const [selectedWeight, setSelectedWeight] = useState(product.weights[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'nutrition' | 'reviews'>('description');

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedWeight.value);
  };

  return (
    <section className="min-h-screen py-12 bg-gradient-to-br from-[#fdfbf7] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24">
              <div className="aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {product.isOrganic && (
                <div className="mt-6 flex items-center gap-3 bg-[#3a5a40]/10 rounded-2xl p-4">
                  <Leaf className="w-6 h-6 text-[#3a5a40]" />
                  <div>
                    <p className="font-medium text-[#3a5a40]">Certified Organic</p>
                    <p className="text-sm text-foreground/60">
                      100% natural, no pesticides
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-[#c4a57b] mb-2">{product.category}</p>
              <h1
                className="text-4xl sm:text-5xl text-[#2d1f1a] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-[#d4af37] text-[#d4af37]'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-foreground/70">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-lg text-foreground/70 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-foreground/60">
              <MapPin className="w-4 h-4 text-[#c4a57b]" />
              <span>Origin: {product.origin}</span>
            </div>

            <div className="border-t border-b border-border py-6 space-y-4">
              <div>
                <label className="block text-sm mb-3">Select Weight:</label>
                <div className="grid grid-cols-3 gap-3">
                  {product.weights.map((weight) => (
                    <button
                      key={weight.value}
                      onClick={() => setSelectedWeight(weight)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedWeight.value === weight.value
                          ? 'border-[#6b4423] bg-[#6b4423]/5'
                          : 'border-border hover:border-[#6b4423]/50'
                      }`}
                    >
                      <p className="font-medium text-[#2d1f1a]">{weight.value}</p>
                      <p className="text-sm text-foreground/60">${weight.price}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-3">Quantity:</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 border border-border rounded-xl hover:bg-muted transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 border border-border rounded-xl hover:bg-muted transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-3xl text-[#6b4423]">
                ${(selectedWeight.price * quantity).toFixed(2)}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-[#6b4423] text-white rounded-full hover:bg-[#543318] transition-colors shadow-lg hover:shadow-xl"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>

              <button
                onClick={() => onToggleWishlist(product.id)}
                className={`px-8 py-4 rounded-full border-2 transition-all ${
                  isInWishlist
                    ? 'border-red-500 bg-red-50 text-red-500'
                    : 'border-[#6b4423] text-[#6b4423] hover:bg-[#6b4423] hover:text-white'
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${isInWishlist ? 'fill-red-500' : ''}`}
                />
              </button>
            </div>

            {/* Delivery Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-[#6b4423]" />
                <div>
                  <p className="text-sm font-medium">Free Shipping</p>
                  <p className="text-xs text-foreground/60">On orders $50+</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-[#6b4423]" />
                <div>
                  <p className="text-sm font-medium">Easy Returns</p>
                  <p className="text-xs text-foreground/60">30-day policy</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#6b4423]" />
                <div>
                  <p className="text-sm font-medium">Quality Assured</p>
                  <p className="text-xs text-foreground/60">100% guaranteed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <div className="mb-16">
          <div className="border-b border-border mb-8">
            <div className="flex gap-8">
              {(['description', 'nutrition', 'reviews'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-b-2 border-[#6b4423] text-[#6b4423]'
                      : 'text-foreground/60 hover:text-[#6b4423]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'description' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <h3
                  className="text-2xl text-[#2d1f1a] mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Health Benefits
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.healthBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#3a5a40]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-[#3a5a40] rounded-full"></div>
                      </div>
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {activeTab === 'nutrition' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <h3
                className="text-2xl text-[#2d1f1a] mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Nutrition Facts (per 28g serving)
              </h3>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border">
                <div className="space-y-4">
                  <div className="flex justify-between pb-3 border-b border-border">
                    <span>Calories</span>
                    <span className="font-medium">{product.nutritionFacts.calories}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-border">
                    <span>Protein</span>
                    <span className="font-medium">{product.nutritionFacts.protein}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-border">
                    <span>Total Fat</span>
                    <span className="font-medium">{product.nutritionFacts.fat}</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-border">
                    <span>Carbohydrates</span>
                    <span className="font-medium">{product.nutritionFacts.carbs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dietary Fiber</span>
                    <span className="font-medium">{product.nutritionFacts.fiber}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'reviews' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-foreground/60">Customer reviews coming soon!</p>
            </motion.div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2
              className="text-3xl text-[#2d1f1a] mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              You May Also Like
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <button
                  key={relatedProduct.id}
                  onClick={() => onProductClick(relatedProduct)}
                  className="group text-left"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg text-[#2d1f1a] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {relatedProduct.name}
                      </h3>
                      <p className="text-xl text-[#6b4423]">
                        ${relatedProduct.price}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
