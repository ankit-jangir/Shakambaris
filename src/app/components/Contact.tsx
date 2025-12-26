import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section className="min-h-screen py-12 bg-gradient-to-br from-[#fdfbf7] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Get In Touch
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6b4423]/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#6b4423]" />
              </div>
              <h3
                className="text-xl text-[#2d1f1a] mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Email Us
              </h3>
              <p className="text-foreground/70 mb-2">Our team is here to help</p>
              <a
                href="mailto:info@Shakambaris.com"
                className="text-[#6b4423] hover:underline"
              >
                info@Shakambaris.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6b4423]/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#6b4423]" />
              </div>
              <h3
                className="text-xl text-[#2d1f1a] mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Call Us
              </h3>
              <p className="text-foreground/70 mb-2">Mon-Fri from 8am to 6pm</p>
              <a href="tel:+1234567890" className="text-[#6b4423] hover:underline">
                +1 (234) 567-890
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-[#6b4423]/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#6b4423]" />
              </div>
              <h3
                className="text-xl text-[#2d1f1a] mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Visit Us
              </h3>
              <p className="text-foreground/70">
                123 Organic Street<br />
                Health Valley, CA 94016<br />
                United States
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input-background rounded-xl border border-border outline-none focus:ring-2 focus:ring-[#6b4423]"
                      />
                    </div>

                    <div>
                      <label className="block mb-2">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-input-background rounded-xl border border-border outline-none focus:ring-2 focus:ring-[#6b4423]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input-background rounded-xl border border-border outline-none focus:ring-2 focus:ring-[#6b4423]"
                    />
                  </div>

                  <div>
                    <label className="block mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-input-background rounded-xl border border-border outline-none focus:ring-2 focus:ring-[#6b4423] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#6b4423] text-white rounded-full hover:bg-[#543318] transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3
                    className="text-2xl text-[#2d1f1a] mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-foreground/70">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
         <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-12 bg-muted rounded-3xl h-96 overflow-hidden"
    >
      <iframe
        title="Shakambaris Location"
        src="https://www.google.com/maps?q=C-3,+Vaishali+Marg,+E+-+Block,+Block+C,+Vaishali+Nagar,+Jaipur,+Rajasthan+302021&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.div>
      </div>
    </section>
  );
}
