import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-sky-400" />
              <span className="text-2xl font-bold text-sky-400">Rumaksa</span>
            </div>
            <p className="text-slate-400">
              Securing your digital future with advanced cybersecurity and transformation solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-sky-400 cursor-pointer">Cyber Security</li>
              <li className="hover:text-sky-400 cursor-pointer">Digital Business</li>
              <li className="hover:text-sky-400 cursor-pointer">Cloud Security</li>
              <li className="hover:text-sky-400 cursor-pointer">Consulting</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-sky-400 cursor-pointer">About Us</li>
              <li className="hover:text-sky-400 cursor-pointer">Blog</li>
              <li className="hover:text-sky-400 cursor-pointer">Careers</li>
              <li className="hover:text-sky-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-slate-800 rounded-full hover:bg-sky-500/20 hover:text-sky-400"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-slate-400">
              © 2024 Rumaksa. All rights reserved.
            </p>
            <div className="flex space-x-6 text-slate-400">
              <a href="#" className="hover:text-sky-400">Privacy Policy</a>
              <a href="#" className="hover:text-sky-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;