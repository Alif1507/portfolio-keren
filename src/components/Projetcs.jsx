import { Github } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./assets/ProjectCard";
import { projectsData } from "../../constant";

const Projects = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for the title
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Animation variants for the grid container
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Animation variants for each project card
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.section 
      className="w-full flex flex-col items-center mt-24" 
      style={{ fontFamily: "Sora Variable" }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent font-semibold text-center relative z-30 overflow-hidden mb-12 sm:mb-16 md:mb-20"
        variants={titleVariants}
      >
        Project
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-15"
        variants={gridVariants}
      >
        {projectsData.map((data, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02, 
              transition: { duration: 0.2 } 
            }}
          >
            <ProjectCard 
              gambar={data.gambar} 
              judul={data.judul} 
              parag={data.parag} 
              tech={data.tech} 
              linkDemo={data.linkDemo} 
              linkCode={data.linkCode} 
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;