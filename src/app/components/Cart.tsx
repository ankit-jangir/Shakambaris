import { motion } from 'motion/react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import type { CartItem } from '../types';

interface CartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, weight: string, quantity: number) => void;
  onRemove: (productId: number, weight: string) => void;
  onNavigate: (page: string) => void;
}

export function Cart({ cartItems, onUpdateQuantity, onRemove, onNavigate }: CartProps) {
  const subtotal = cartItems.reduce((sum, item) => {
    const weightData = item.product.weights.find(w => w.value === item.weight);
    return sum + (weightData?.price || 0) * item.quantity;
  }, 0);

  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <section className="min-h-[70vh] py-20 bg-gradient-to-br from-[#fdfbf7] to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ShoppingBag className="w-24 h-24 text-foreground/20 mx-auto mb-6" />
            <h2
              className="text-3xl text-[#2d1f1a] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Your Cart is Empty
            </h2>
            <p className="text-foreground/60 mb-8">
              Discover our premium collection of dry fruits
            </p>
            <button
              onClick={() => onNavigate('shop')}
              className="px-8 py-4 bg-[#6b4423] text-white rounded-full hover:bg-[#543318] transition-colors inline-flex items-center gap-2"
            >
              Continue Shopping
              <ArrowRight className="w-5 h-5" />
            </button>
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
          <h1
            className="text-4xl text-[#2d1f1a] mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Shopping Cart
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => {
                const weightData = item.product.weights.find(w => w.value === item.weight);
                const itemTotal = (weightData?.price || 0) * item.quantity;

                return (
                  <motion.div
                    key={`${item.product.id}-${item.weight}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-md"
                  >
                    <div className="flex gap-6">
                      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <div>
                            <h3
                              className="text-xl text-[#2d1f1a] mb-1"
                              style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                              {item.product.name}
                            </h3>
                            <p className="text-sm text-foreground/60">
                              Weight: {item.weight}
                            </p>
                          </div>

                          <button
                            onClick={() => onRemove(item.product.id, item.weight)}
                            className="text-red-500 hover:text-red-600 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3 bg-muted rounded-full p-1">
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.product.id, item.weight, item.quantity - 1)
                              }
                              className="w-8 h-8 rounded-full hover:bg-white transition-colors flex items-center justify-center"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() =>
                                onUpdateQuantity(item.product.id, item.weight, item.quantity + 1)
                              }
                              className="w-8 h-8 rounded-full hover:bg-white transition-colors flex items-center justify-center"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <p className="text-2xl text-[#6b4423]">
                            ${itemTotal.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-lg sticky top-24"
              >
                <h2
                  className="text-2xl text-[#2d1f1a] mb-6"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-foreground/70">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-foreground/70">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>

                  {shipping > 0 && subtotal < 50 && (
                    <p className="text-sm text-[#3a5a40] bg-[#3a5a40]/10 rounded-lg p-3">
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  )}

                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between text-xl">
                      <span className="text-[#2d1f1a]">Total</span>
                      <span className="text-[#6b4423]">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('checkout')}
                  className="w-full py-4 bg-[#6b4423] text-white rounded-full hover:bg-[#543318] transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => onNavigate('shop')}
                  className="w-full mt-3 py-4 border-2 border-[#6b4423] text-[#6b4423] rounded-full hover:bg-[#6b4423] hover:text-white transition-colors"
                >
                  Continue Shopping
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
