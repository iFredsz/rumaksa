import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Cpu, Code, Cloud, Database, LineChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      category: 'Cyber Security',
      icon: Shield,
      services: [
        { icon: Lock, name: 'Security Operations Center (SOC)', description: '24/7 monitoring and threat detection' },
        { icon: Shield, name: 'Penetration Testing', description: 'Comprehensive security assessments' },
        { icon: Database, name: 'Data Protection', description: 'Advanced data security solutions' }
      ]
    },
    {
      category: 'Digital Business',
      icon: Cpu,
      services: [
        { icon: Cloud, name: 'Cloud Transformation', description: 'Secure cloud migration and management' },
        { icon: Code, name: 'Digital Innovation', description: 'Custom digital solutions development' },
        { icon: LineChart, name: 'Business Intelligence', description: 'Data-driven decision making' }
      ]
    }
  ];

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
            Our Services
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Comprehensive cybersecurity and digital transformation solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((category, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <category.icon className="w-8 h-8 text-sky-400" />
                <h3 className="text-2xl font-bold text-sky-400">{category.category}</h3>
              </div>

              <div className="grid gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl hover:glow"
                  >
                    <div className="flex items-start space-x-4">
                      <service.icon className="w-6 h-6 text-sky-400" />
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{service.name}</h4>
                        <p className="text-slate-400">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;