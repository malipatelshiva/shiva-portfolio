import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cpu, BrainCircuit, Layout, Database, Shield } from 'lucide-react';

interface SkillItemProps {
  title: string;
  icon: React.ReactNode;
}

const SkillItem: React.FC<SkillItemProps> = ({ title, icon }) => {
  return (
    <motion.div 
      className="flex items-center p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-primary-100 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="mr-2 text-primary-500 group-hover:text-primary-600 transition-colors duration-200">
        {icon}
      </div>
      <span className="text-gray-800 font-medium group-hover:text-primary-600 transition-colors duration-200">{title}</span>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    },
  };

  const skills = [
    { title: 'React.js', icon: <Code size={18} /> },
    { title: 'Front-End Development', icon: <Layout size={18} /> },
    { title: 'AI Integration', icon: <BrainCircuit size={18} /> },
    { title: 'Modular UI Architecture', icon: <Cpu size={18} /> },
    { title: 'Tailwind CSS', icon: <Code size={18} /> },
    { title: 'RESTful APIs', icon: <Database size={18} /> },
    { title: 'Web Security', icon: <Shield size={18} /> },
    { title: 'Node.js', icon: <Code size={18} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <SkillItem title={skill.title} icon={skill.icon} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;