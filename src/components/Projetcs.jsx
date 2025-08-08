import { Github } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./assets/ProjectCard";
import { projectsData } from "../../constant";

const Projects = () => {

  return (
   <section className="w-full flex flex-col items-center mt-24" style={{ fontFamily: "Sora Variable" }}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent font-semibold text-center relative z-30 overflow-hidden mb-12 sm:mb-16 md:mb-20">Project</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-15">
        {projectsData.map((data, index) => (
          <ProjectCard key={index} gambar={data.gambar} judul={data.judul} parag={data.parag} tech={data.tech} link={data.link} />
        ))}
      </div>
   </section>
  );
};

export default Projects;