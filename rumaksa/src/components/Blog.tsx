import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Cybersecurity: AI and Machine Learning',
      excerpt: 'Exploring how artificial intelligence is revolutionizing threat detection and response.',
      author: 'John Smith',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Digital Transformation Success Stories',
      excerpt: 'Case studies of successful digital transformation journeys and lessons learned.',
      author: 'Sarah Johnson',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Securing Your Cloud Infrastructure',
      excerpt: 'Best practices for maintaining robust security in cloud environments.',
      author: 'Mike Wilson',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600">
            Latest Insights
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Stay updated with the latest trends in cybersecurity and digital transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 rounded-xl overflow-hidden hover:glow transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 hover:text-sky-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <button className="mt-4 flex items-center text-sky-400 hover:text-sky-300 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;