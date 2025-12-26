import { motion } from 'motion/react';
import { Mail, Gift } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#faf8f3] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#6b4423] to-[#3a5a40] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
              <Gift className="w-4 h-4" />
              <span className="text-sm">Get 10% off your first order</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Join Our Healthy Community
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive deals, health tips, and
              new product launches
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-foreground outline-none focus:ring-2 focus:ring-[#d4af37]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#d4af37] text-white rounded-full hover:bg-[#c4a57b] transition-colors duration-300 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/20 rounded-2xl p-6 max-w-md mx-auto"
              >
                <p className="text-lg">
                  🎉 Thank you for subscribing! Check your email for your discount code.
                </p>
              </motion.div>
            )}

            <p className="text-sm text-white/70 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
