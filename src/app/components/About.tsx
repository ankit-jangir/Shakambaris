import { motion } from 'motion/react';
import { Leaf, Heart, Award, Users } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Leaf,
      title: 'Organic & Natural',
      description: 'We source only the finest organic dry fruits from certified farms around the world.'
    },
    {
      icon: Heart,
      title: 'Health First',
      description: 'Your health is our priority. Every product is carefully selected for maximum nutrition.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Rigorous quality control ensures only the best products reach your table.'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'We believe in building lasting relationships through exceptional service.'
    }
  ];

  return (
    <section className="min-h-screen py-12 bg-gradient-to-br from-[#fdfbf7] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className="text-4xl sm:text-6xl text-[#2d1f1a] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Story
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A journey of passion, quality, and a commitment to bringing nature's
            finest treasures to your home
          </p>
        </motion.div>

        {/* Image and Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1618453731654-3eb0816cd121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NjY1NjY1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="About Shakambaris"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h2
              className="text-3xl text-[#2d1f1a]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Premium Quality Since Day One
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Founded with a simple mission: to provide families with the
              highest quality, most nutritious dry fruits available. We work
              directly with organic farms across the globe to source the finest
              almonds, cashews, pistachios, and more.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Every product undergoes rigorous quality checks to ensure you
              receive only the best. From farm to your table, we maintain the
              highest standards of freshness, purity, and taste.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Our commitment goes beyond just selling dry fruits – we're
              passionate about promoting healthy lifestyles and sustainable
              farming practices that benefit both people and the planet.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2
            className="text-4xl text-[#2d1f1a] text-center mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6b4423] to-[#c4a57b] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl text-[#2d1f1a] mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-foreground/70">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#6b4423] to-[#3a5a40] rounded-3xl p-12 text-white"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p
                className="text-5xl mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                10+
              </p>
              <p className="text-white/80">Years Experience</p>
            </div>
            <div>
              <p
                className="text-5xl mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                50K+
              </p>
              <p className="text-white/80">Happy Customers</p>
            </div>
            <div>
              <p
                className="text-5xl mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                100%
              </p>
              <p className="text-white/80">Organic Certified</p>
            </div>
            <div>
              <p
                className="text-5xl mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                15+
              </p>
              <p className="text-white/80">Countries Sourced</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
