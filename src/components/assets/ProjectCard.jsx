import { Github } from 'lucide-react'
import React from 'react'

const ProjectCard = ({ gambar, judul, parag, tech, linkDemo, linkCode }) => {
  return (
    <div className="flex flex-col items-center border-2 border-white rounded-2xl w-full max-w-[501px] min-h-[560px] md:min-h-[560px] sm:min-h-[520px] mx-auto">
      {/* Image Container */}
      <div className="w-full">
        <img 
          className="rounded-t-2xl w-full h-48 sm:h-52 md:h-56 object-cover" 
          src={`/img/${gambar}`} 
          alt="Projects Image" 
        />
      </div>
      
      {/* Year Section */}
      <div className="flex items-center justify-start w-full gap-2 mt-4 md:mt-7 px-4 md:px-6">
        <div className="w-[10px] h-[10px] flex-shrink-0">
          <img
            src="/img/Tahun.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <span className="font-light text-sm text-white">2025</span>
      </div>
      
      {/* Title and Description */}
      <div className="flex flex-col justify-start w-full mt-3 md:mt-4 px-4 md:px-6">
        <h1 className="font-bold text-xl md:text-2xl text-white mb-2">{judul}</h1>
        <p className="text-xs md:text-[13px] text-white font-light leading-relaxed">
          {parag}
        </p>
      </div>
      
      {/* Tech Stack */}
      <div className="flex items-start justify-start w-full px-4 md:px-6 mt-3 md:mt-4">
        <div className="w-[10px] h-[10px] mr-3 md:mr-4 mt-1 flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            src="/img/tag.png"
            alt=""
          />
        </div>
        <div className="flex flex-wrap items-center gap-2 my-2 md:my-3 flex-1">
          {tech.map((item, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium text-blue-400 bg-blue-950/50 rounded-md hover:bg-blue-900/50 transition-colors duration-200 border border-blue-800/30 whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      
      {/* Divider */}
      <div className="w-[90%] md:w-[447px] h-[1px] bg-[#484848] mt-4">
        <span className="opacity-0">.</span>
      </div>
      
      {/* Action Buttons */}
      <div className="flex items-center justify-between w-full mt-4 px-4 md:px-6 pb-4 md:pb-6">
        <a href={linkDemo} target='_blank' rel="noopener noreferrer">
          <button className="flex items-center gap-2 px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-blue-400 hover:text-blue-300 hover:bg-blue-950/30 rounded-lg transition-all duration-200">
            <div className="w-auto h-[10px] flex-shrink-0">
              <img src="/img/Demo.png" className="w-full h-full object-cover" alt="" />
            </div>
            <span className="font-light">
              View Demo
            </span>
          </button>
        </a>
        
        <a href={linkCode} target='_blank'>
          <button className="flex cursor-pointer items-center gap-2 px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white hover:text-slate-300 rounded-lg backdrop-blur-sm transition-colors duration-200 transform">
            <Github size={12} />
            <span className="font-light">
              Code
            </span>
          </button>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard