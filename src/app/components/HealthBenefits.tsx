import { motion } from 'motion/react';
import { Leaf, Shield, Heart, Sparkles, Award, Package } from 'lucide-react';

export function HealthBenefits() {
  const benefits = [
    {
      icon: Leaf,
      title: '100% Organic',
      description: 'Sourced from certified organic farms with no pesticides or chemicals'
    },
    {
      icon: Shield,
      title: 'No Preservatives',
      description: 'Completely natural with no artificial additives or preservatives'
    },
    {
      icon: Package,
      title: 'Freshly Packed',
      description: 'Packed fresh daily in air-tight containers to preserve quality'
    },
    {
      icon: Heart,
      title: 'Heart Healthy',
      description: 'Rich in nutrients that support cardiovascular health'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Hand-selected and quality-checked for superior taste'
    },
    {
      icon: Sparkles,
      title: 'Energy Boost',
      description: 'Natural source of energy and essential nutrients'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl text-[#2d1f1a] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why Choose Us
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We're committed to delivering the finest quality dry fruits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-[#faf8f3] to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-border h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6b4423] to-[#c4a57b] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3
                    className="text-2xl text-[#2d1f1a] mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {benefit.title}
                  </h3>

                  <p className="text-foreground/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
