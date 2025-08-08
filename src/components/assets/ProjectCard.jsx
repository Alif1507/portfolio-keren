import { Github } from 'lucide-react'
import React from 'react'

const ProjectCard = ({gambar, judul, parag, tech, link}) => {
  return (
  <div className="flex flex-col items-center border-2 w-[501px] h-[560px] border-white rounded-2xl">
          <div>
            <img className="rounded-t-2xl" src={`/img/${gambar}`} alt="Projects Image" />
          </div>
          <div className="flex items-center justify-start w-full gap-2 mt-7 ml-4">
            <div className="w-[10px] h-[10px] relative">
              <img
                src="/img/Tahun.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <span className="font-light text-sm text-white">2025</span>
          </div>
          <div className="flex flex-col justify-start w-full mt-4 ml-6">
            <h1 className="font-bold text-2xl text-white">{judul}</h1>
            <p className="text-[13px] max-w-100 text-white font-light">
              {parag}
            </p>
          </div>
          <div className="flex items-center justify-start w-full ml-6">
            <div className="w-[10px] h-[10px] mr-4">
              <img
                className="w-full h-full object-cover"
                src="/img/tag.png"
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-2 my-3">
              {tech.map((item, index) => (
                <span key={index} className="px-2 py-1 text-xs font-medium text-blue-400 bg-blue-950/50 rounded-md hover:bg-blue-900/50 transition-colors duration-200 border border-blue-800/30">
                {item}
              </span>
              ))}
            </div>
          </div>
          <div className="w-[447px] h-[1px] bg-[#484848]">
            <h1 classname="opacity-0">.</h1>
          </div>
          <div className="flex items-center justify-between w-full mt-4">
            <a href={link} target='_blank'>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-400 hover:text-blue-300 hover:bg-blue-950/30 rounded-lg transition-all duration-200">
              <div className="w-auto h-[10px]">
                <img src="/img/Demo.png" className="w-full h-full object-cover" alt="" />
              </div>
              <a className="font-light" href="#">
                View Demo
              </a>
            </button>
            </a>

            <a href="#">
              <button className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium text-white hover:text-slate-300 rounded-lg backdrop-blur-sm transition-colors duration-200 transform">
              <Github size={12} />
              <a className="font-light" href="#">
                Code
              </a>
            </button>
            </a>
          </div>
        </div>
  )
}

export default ProjectCard