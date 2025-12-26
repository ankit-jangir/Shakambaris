import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Are your products certified organic?',
      answer:
        'Yes! All our products marked as organic are certified by recognized organic certification bodies. We work directly with certified organic farms to ensure authenticity and quality.'
    },
    {
      question: 'How do you ensure freshness?',
      answer:
        'We pack all our dry fruits fresh daily in air-tight containers. Our storage facilities are climate-controlled to maintain optimal freshness. We also use vacuum-sealed packaging for maximum shelf life.'
    },
    {
      question: 'What is your return policy?',
      answer:
        'We offer a 30-day money-back guarantee. If you\'re not completely satisfied with your purchase, you can return it within 30 days for a full refund. Product must be unopened and in original packaging.'
    },
    {
      question: 'Do you ship internationally?',
      answer:
        'Currently, we ship within the United States. We\'re working on expanding our international shipping options. Subscribe to our newsletter to stay updated on new shipping destinations.'
    },
    {
      question: 'How long does shipping take?',
      answer:
        'Standard shipping takes 3-5 business days. Express shipping (1-2 business days) is available for an additional fee. Free shipping is offered on orders over $50.'
    },
    {
      question: 'Are your products tested for quality?',
      answer:
        'Yes, every batch undergoes rigorous quality testing. We test for purity, freshness, moisture content, and nutritional value. Only products that meet our strict standards are shipped to customers.'
    },
    {
      question: 'Can I track my order?',
      answer:
        'Absolutely! Once your order ships, you\'ll receive a tracking number via email. You can also track your order status by logging into your account on our website.'
    },
    {
      question: 'Do you offer bulk discounts?',
      answer:
        'Yes, we offer special pricing for bulk orders. Please contact our customer service team at info@Shakambaris.com for bulk order inquiries and custom quotes.'
    },
    {
      question: 'How should I store the dry fruits?',
      answer:
        'Store in a cool, dry place away from direct sunlight. For extended freshness, you can refrigerate or freeze them. Ensure the container is air-tight to prevent moisture absorption.'
    },
    {
      question: 'Are there any allergens in your products?',
      answer:
        'Our products are processed in facilities that handle tree nuts. Each product page lists specific allergen information. If you have severe allergies, please contact us before ordering.'
    }
  ];

  return (
    <section className="min-h-screen py-12 bg-gradient-to-br from-[#fdfbf7] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-foreground/70">
            Find answers to common questions about our products and services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                >
                  <span
                    className="text-lg text-[#2d1f1a] pr-8"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#6b4423] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-foreground/70 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center bg-gradient-to-br from-[#6b4423] to-[#3a5a40] rounded-3xl p-8 text-white"
        >
          <h3
            className="text-2xl mb-3"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Still Have Questions?
          </h3>
          <p className="text-white/90 mb-6">
            Our customer support team is always here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@Shakambaris.com"
              className="px-6 py-3 bg-white text-[#6b4423] rounded-full hover:bg-white/90 transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:+1234567890"
              className="px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#6b4423] transition-colors"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
