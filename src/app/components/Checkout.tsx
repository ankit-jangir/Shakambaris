import { useState } from 'react';
import { motion } from 'motion/react';
import { CreditCard, Truck, CheckCircle2 } from 'lucide-react';
import type { CartItem } from '../types';

interface CheckoutProps {
  cartItems: CartItem[];
  onNavigate: (page: string) => void;
}

export function Checkout({ cartItems, onNavigate }: CheckoutProps) {
  const [step, setStep] = useState<'address' | 'payment' | 'success'>('address');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const subtotal = cartItems.reduce((sum, item) => {
    const weightData = item.product.weights.find(w => w.value === item.weight);
    return sum + (weightData?.price || 0) * item.quantity;
  }, 0);

  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  if (step === 'success') {
    return (
      <section className="min-h-[70vh] py-20 bg-gradient-to-br from-[#fdfbf7] to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-16 h-16 text-green-600" />
            </div>

            <h2
              className="text-4xl text-[#2d1f1a] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Order Placed Successfully!
            </h2>

            <p className="text-lg text-foreground/70 mb-2">
              Thank you for your order, {formData.fullName}
            </p>
            <p className="text-foreground/60 mb-8">
              A confirmation email has been sent to {formData.email}
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-xl text-[#2d1f1a] mb-4">Order Summary</h3>
              <div className="space-y-2 text-left mb-4">
                {cartItems.map((item) => {
                  const weightData = item.product.weights.find(w => w.value === item.weight);
                  return (
                    <div key={`${item.product.id}-${item.weight}`} className="flex justify-between text-sm">
                      <span>
                        {item.product.name} ({item.weight}) x {item.quantity}
                      </span>
                      <span>${((weightData?.price || 0) * item.quantity).toFixed(2)}</span>
                    </div>
                  );
                })}
              </div>
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between text-xl">
                  <span className="text-[#2d1f1a]">Total Paid</span>
                  <span className="text-[#6b4423]">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('orders')}
                className="px-8 py-4 bg-[#6b4423] text-white rounded-full hover:bg-[#543318] transition-colors"
              >
                View Orders
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="px-8 py-4 border-2 border-[#6b4423] text-[#6b4423] rounded-full hover:bg-[#6b4423] hover:text-white transition-colors"
              >
                Back to Home
              </button>
            </div>
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
            Checkout
          </h1>

          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step === 'address' ? 'bg-[#6b4423] text-white' : 'bg-green-500 text-white'
                  }`}
                >
                  {step === 'address' ? '1' : '✓'}
                </div>
                <span className="ml-2">Address</span>
              </div>

              <div className="w-24 h-0.5 bg-border"></div>

              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step === 'payment'
                      ? 'bg-[#6b4423] text-white'
                      : step === 'success'
                      ? 'bg-green-500 text-white'
                      : 'bg-muted text-foreground/60'
                  }`}
                >
                  {step === 'success' ? '✓' : '2'}
                </div>
                <span className="ml-2">Payment</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              {step === 'address' && (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleAddressSubmit}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Truck className="w-6 h-6 text-[#6b4423]" />
                    <h2
                      className="text-2xl text-[#2d1f1a]"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Shipping Address
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input-background rounded-xl border border-border outline-none focus:ring-2 focus:ring-[#6b4423]"
                      />
                    </div>

                    <div>
                      <label className="block mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input-background rounded-xl border border-border outline-none focus:ring-2 focus:ring-[#6b4423]"
                      />
                    </div>

                    <div>
                      <label className="block mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input-background rounded-xl border border-border outline-none focus:ring-2 focus:ring-[#6b4423]"
                      />
                    </div>

                    <div>
                      <label className="block mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input-background rounded-xl border border-border outline-none focus:ring-2 focus:ring-[#6b4423]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block mb-2">Address *</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input-background rounded-xl border border-border outline-none focus:ring-2 focus:ring-[#6b4423]"
                      />
                    </div>

                    <div>
                      <label className="block mb-2">ZIP Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input-background rounded-xl border border-border outline-none focus:ring-2 focus:ring-[#6b4423]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-8 py-4 bg-[#6b4423] text-white rounded-full hover:bg-[#543318] transition-colors"
                  >
                    Continue to Payment
                  </button>
                </motion.form>
              )}

              {step === 'payment' && (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handlePaymentSubmit}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="w-6 h-6 text-[#6b4423]" />
                    <h2
                      className="text-2xl text-[#2d1f1a]"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Payment Details
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block mb-2">Card Number *</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        required
                        className="w-full px-4 py-3 bg-input-background rounded-xl border border-border outline-none focus:ring-2 focus:ring-[#6b4423]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2">Expiry Date *</label>
                        <input
                          type="text"
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required
                          className="w-full px-4 py-3 bg-input-background rounded-xl border border-border outline-none focus:ring-2 focus:ring-[#6b4423]"
                        />
                      </div>

                      <div>
                        <label className="block mb-2">CVV *</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          required
                          className="w-full px-4 py-3 bg-input-background rounded-xl border border-border outline-none focus:ring-2 focus:ring-[#6b4423]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button
                      type="button"
                      onClick={() => setStep('address')}
                      className="flex-1 py-4 border-2 border-[#6b4423] text-[#6b4423] rounded-full hover:bg-[#6b4423] hover:text-white transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-4 bg-[#6b4423] text-white rounded-full hover:bg-[#543318] transition-colors"
                    >
                      Place Order
                    </button>
                  </div>
                </motion.form>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h3
                  className="text-2xl text-[#2d1f1a] mb-6"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Order Summary
                </h3>

                <div className="space-y-3 mb-6">
                  {cartItems.map((item) => {
                    const weightData = item.product.weights.find(w => w.value === item.weight);
                    return (
                      <div key={`${item.product.id}-${item.weight}`} className="flex gap-3">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <p className="text-sm text-[#2d1f1a]">{item.product.name}</p>
                          <p className="text-xs text-foreground/60">
                            {item.weight} x {item.quantity}
                          </p>
                          <p className="text-sm text-[#6b4423]">
                            ${((weightData?.price || 0) * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex justify-between text-foreground/70">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground/70">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <div className="flex justify-between text-xl">
                      <span className="text-[#2d1f1a]">Total</span>
                      <span className="text-[#6b4423]">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
