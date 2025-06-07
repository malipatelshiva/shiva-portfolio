import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UserCircle } from 'lucide-react';

const About: React.FC = () => {
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

  const highlightStyle = "relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-primary-400 after:left-0 after:bottom-0 after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left";

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center"
        >
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1 flex justify-center"
          >
            <div className="bg-white p-2 rounded-full shadow-lg">
              <div className="rounded-full bg-gray-200 w-48 h-48 flex items-center justify-center overflow-hidden">
                <UserCircle className="w-32 h-32 text-gray-400" />
                {/* If a real photo is available, replace the UserCircle with:
                <img 
                  src="https://images.pexels.com/photos/3799786/pexels-photo-3799786.jpeg" 
                  alt="Malipatel Shivakumar" 
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="md:col-span-2"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I specialize in building seamless full-stack web applications, with an emphasis on <span className={highlightStyle}>React</span>, API integrations, and clean UX. Passionate about <span className={highlightStyle}>security</span>, <span className={highlightStyle}>AI</span>, and creating digital products that work. My mission is to build scalable, human-centered solutions for the next-gen web.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a focus on modern technologies and best practices, I create robust solutions that solve real problems while delivering exceptional user experiences.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;