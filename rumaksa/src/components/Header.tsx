import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <Shield className="w-8 h-8 text-sky-400" />
            <span className="text-2xl font-bold text-sky-400">Rumaksa</span>
          </motion.div>

          <ul className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Services', id: 'services' },
              { name: 'Blog', id: 'blog' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.1 }}
                className="hover:text-sky-400 cursor-pointer"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded-full text-white font-medium hover:glow"
          >
            Get Started
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;