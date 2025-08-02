import React from 'react'

const ProjectCard = ({ gambar, judul, parag, img1, img2, img3, img4, tech1, tech2, tech3, tech4, link }) => {
  return (
    <div className="flex flex-col items-center justify-around gap-5 w-[300px] border-white border-1 min-h-[625px] p-4 rounded-2xl">
          <img src={`/img/${gambar}`} alt="" />
          <h1 className="text-white font-semibold text-2xl">{judul}</h1>
          <p className="text-white text-center text-sm">
            {parag}
          </p> 
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center gap-2 border-1 border-white rounded-xl p-2">
              <img src={`/img/${img1}`} alt="" className='h-[18px] w-auto'  /> <span className="text-white font-light">{tech1}</span>
            </div>
            <div className="flex items-center justify-center gap-2 border-1 border-white rounded-xl p-2">
              <img className='h-[18px] w-auto' src={`/img/${img2}`} alt="" /> <span className="text-white font-light">{tech2}</span>
            </div>

            <div className="flex items-center justify-center gap-2 border-1 border-white rounded-xl p-2">
              <img src={`/img/${img3}`} alt="" className='h-[18px] w-auto' /> <span className="text-white font-light">{tech3}</span>
            </div>

            <div className="flex items-center justify-center gap-2 border-1 border-white rounded-xl p-2">
              <img src={`/img/${img4}`} alt="" className='h-[18px] w-auto' /> <span className="text-white font-light">{tech4}</span>
            </div>
          </div>
          <a href={link} className="my-7 cursor-pointer">
            <button className="text-white font-semibold bg-gradient-to-tr hover:scale-105 from-[#280087] to-[#C00000] cursor-pointer  p-3 rounded-xl">Visit Site</button>
          </a>
        </div>
  )
}

export default ProjectCard