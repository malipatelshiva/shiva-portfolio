import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Camera, Film, Microscope as Microphone } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  icon: React.ReactNode;
  technologies: string[];
}

const Project: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  githubUrl, 
  liveUrl,
  icon,
  technologies
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col"
      whileHover={{ y: -5 }}
    >
      <div className="p-6 bg-gray-50 flex items-center">
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">{title}</h3>
      </div>
      <div className="p-6 flex-grow">
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 pb-6 flex gap-3">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
        >
          <Github className="w-4 h-4 mr-1" />
          GitHub
        </a>
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: "Quick-Witted Security System",
      description: "Built an intelligent security system that uses computer vision to detect and alert about potential intruders in real-time.",
      githubUrl: "#",
      icon: <Camera className="w-6 h-6 text-primary-500" />,
      technologies: ["Python", "OpenCV", "AI", "Computer Vision"]
    },
    {
      title: "Online Movie Ticket Booking",
      description: "Developed a full-stack web application for booking movie tickets with features including user authentication, search, booking, and payment processing.",
      githubUrl: "#",
      liveUrl: "#",
      icon: <Film className="w-6 h-6 text-primary-500" />,
      technologies: ["React.js", "Node.js", "MongoDB", "Payment Gateway"]
    },
    {
      title: "Parkinson Disease Detection",
      description: "Research project that utilizes audio signal analysis and machine learning to detect early signs of Parkinson's disease from voice recordings.",
      githubUrl: "#",
      icon: <Microphone className="w-6 h-6 text-primary-500" />,
      technologies: ["Python", "Signal Processing", "Machine Learning", "Audio Analysis"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Project {...project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;