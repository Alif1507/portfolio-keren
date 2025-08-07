import { Github } from "lucide-react";
import React from "react";
// import { motion } from "framer-motion";
import ProjectCard from "./assets/ProjectCard";

const Projects = () => {
  // // Animation variants
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       duration: 0.6,
  //       staggerChildren: 0.1
  //     }
  //   }
  // };

  // const titleVariants = {
  //   hidden: { 
  //     opacity: 0, 
  //     y: 50,
  //     scale: 0.9
  //   },
  //   visible: { 
  //     opacity: 1, 
  //     y: 0,
  //     scale: 1,
  //     transition: {
  //       duration: 0.8,
  //       ease: [0.6, -0.05, 0.01, 0.99]
  //     }
  //   }
  // };

  // const gridVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.15,
  //       delayChildren: 0.3
  //     }
  //   }
  // };

  // const cardVariants = {
  //   hidden: { 
  //     opacity: 0, 
  //     y: 60,
  //     scale: 0.8
  //   },
  //   visible: { 
  //     opacity: 1, 
  //     y: 0,
  //     scale: 1,
  //     transition: {
  //       duration: 0.6,
  //       ease: [0.6, -0.05, 0.01, 0.99]
  //     }
  //   }
  // };

  return (
   <section className="w-full flex flex-col items-center" style={{ fontFamily: "Sora Variable" }}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent font-semibold text-center relative z-30 overflow-hidden mb-12 sm:mb-16 md:mb-20">Project</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-15">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
   </section>
  );
};

export default Projects;