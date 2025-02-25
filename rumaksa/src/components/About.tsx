import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, MessageSquare, Shield } from 'lucide-react';
import { useParallax } from 'react-scroll-parallax';

const About = () => {
  const parallax = useParallax<HTMLDivElement>({
    speed: -10,
  });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">
            About Rumaksa
          </h2>
          <p className="text-lg text-slate-300">
            Empowering businesses with cutting-edge cybersecurity solutions and digital transformation strategies since 2020.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-sky-400">Our Vision</h3>
              <p className="text-slate-300">
                To be the leading force in cybersecurity and digital transformation, creating a secure and innovative digital future for businesses worldwide.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-sky-400">Our Mission</h3>
              <p className="text-slate-300">
                To provide state-of-the-art security solutions and digital transformation services that protect and empower organizations in their digital journey.
              </p>
            </div>
          </motion.div>

          <div ref={parallax.ref} className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: 'Expert Team',
                description: '50+ certified security professionals'
              },
              {
                icon: Target,
                title: 'Global Reach',
                description: 'Serving clients in 20+ countries'
              },
              {
                icon: Shield,
                title: 'Security First',
                description: '99.9% threat detection rate'
              },
              {
                icon: MessageSquare,
                title: '24/7 Support',
                description: 'Round-the-clock assistance'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl hover:glow"
              >
                <item.icon className="w-8 h-8 text-sky-400 mb-4" />
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;