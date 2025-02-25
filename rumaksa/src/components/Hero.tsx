import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Cpu } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600"
          >
            Secure Your Digital Future
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 mb-8"
          >
            Leading the way in cybersecurity and digital transformation solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button 
              onClick={() => scrollToSection('services')}
              className="px-8 py-3 bg-sky-500 rounded-full font-medium hover:bg-sky-600 hover:glow transition-all duration-300"
            >
              Explore Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-sky-500 rounded-full font-medium hover:bg-sky-500/20 transition-all duration-300"
            >
              Contact Us
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Shield,
                title: 'Cyber Security',
                description: 'Advanced threat protection and security monitoring'
              },
              {
                icon: Lock,
                title: 'Data Protection',
                description: 'Comprehensive data security and privacy solutions'
              },
              {
                icon: Cpu,
                title: 'Digital Business',
                description: 'Digital transformation and business innovation'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl hover:glow transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-sky-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;