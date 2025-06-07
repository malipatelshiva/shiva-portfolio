import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
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
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <div className="flex items-start">
                <div className="shrink-0 mr-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center shadow-md border border-primary-100 group-hover:bg-primary-100 transition-all duration-200">
                    <GraduationCap className="h-6 w-6 text-primary-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-all duration-200">St. Peter's Engineering College</h3>
                  <p className="text-md font-medium text-gray-600 mb-2">B.Tech in Information Technology (2019–2023)</p>
                  <div className="mb-4 flex items-center">
                    <span className="text-sm font-medium text-gray-500 mr-2">GPA:</span>
                    <span className="text-sm font-bold text-primary-600">6.5</span>
                  </div>
                  <p className="text-gray-700">Worked on multiple frontend and AI research projects</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <div className="flex items-start">
                <div className="shrink-0 mr-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center shadow-md border border-primary-100 group-hover:bg-primary-100 transition-all duration-200">
                    <GraduationCap className="h-6 w-6 text-primary-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-all duration-200">Kasireddy Narayanreddy College</h3>
                  <p className="text-md font-medium text-gray-600 mb-2">Diploma in Electronics & Communications (2017–2019)</p>
                  <div className="mb-4 flex items-center">
                    <span className="text-sm font-medium text-gray-500 mr-2">GPA:</span>
                    <span className="text-sm font-bold text-primary-600">7.0</span>
                  </div>
                  <p className="text-gray-700">Focused on communication systems and embedded programming</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;