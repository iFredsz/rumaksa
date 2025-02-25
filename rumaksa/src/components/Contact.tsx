import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to secure your digital future? Contact us for a consultation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-sky-400">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: '+1 (555) 123-4567' },
                  { icon: Mail, text: 'contact@rumaksa.com' },
                  { icon: MapPin, text: '123 Security Street, Cyber City, 12345' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <item.icon className="w-6 h-6 text-sky-400" />
                    <span className="text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-sky-400">Office Hours</h3>
              <div className="text-slate-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-sky-400 focus:ring focus:ring-sky-400/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-sky-400 focus:ring focus:ring-sky-400/20"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-sky-400 focus:ring focus:ring-sky-400/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-sky-400 focus:ring focus:ring-sky-400/20"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              className="w-full px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-lg font-medium hover:glow flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;