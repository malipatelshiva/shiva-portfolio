import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative pl-8 sm:pl-32 py-6 group"
          >
            <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-primary-500 transition-all duration-200">
              <div className="absolute left-0 sm:left-0 top-0 sm:top-6 flex items-center justify-center">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center z-10 shadow-md border border-primary-100 group-hover:bg-primary-100 transition-all duration-200">
                  <Briefcase className="h-6 w-6 text-primary-500" />
                </div>
                <div className="hidden sm:block w-full h-0.5 bg-gray-200 absolute left-12 top-6 z-0"></div>
              </div>
              
              <div className="sm:ml-20 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 w-full">
                <h3 className="text-xl font-bold text-gray-900">Gamyam</h3>
                <p className="text-md font-medium text-primary-600 mb-4">AI Engineer (Nov 2023 – Jun 2024)</p>
                <p className="text-gray-600 italic mb-4">Focus: Front-End Development, React.js, AI Integration</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Built AI-driven UI components using React and Node.js</li>
                  <li>Integrated real-time data for web dashboards</li>
                  <li>Contributed to UI/UX for internal tools</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;