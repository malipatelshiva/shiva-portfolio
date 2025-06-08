import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
      <motion.div 
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          M Shivakumar
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl font-medium text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Web Developer | Security Enthusiast | Startup Explorer
        </motion.p>
        
        <motion.p 
          className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Open to Software Engineer roles. I specialize in React, UI Engineering, and AI-Driven Frontend Systems.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a 
            href="/resume.pdf" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 transition-all duration-200 transform hover:scale-105"
            download
          >
            <FileText className="mr-2 h-5 w-5" />
            Download Resume
          </a>
          
          <button 
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 transform hover:scale-105"
          >
            <ArrowDown className="mr-2 h-5 w-5" />
            Let's Connect
          </button>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;