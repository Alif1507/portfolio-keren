import React from 'react'

const CertificationCard = ({ gambar, judul, link }) => {
  return (
     <article className='relative'>
        <h1>Competition</h1>
        <section className='flex flex-col bg-gradient-to-r from-[#280087] to-[#C00000] items-center justify-around max-w-[410px] min-h-[400px] rounded-2xl p-1 relative'>
          <div className='flex flex-col items-center justify-around w-full h-full bg-black rounded-2xl p-5 text-center gap-5'>
            <img src={`/img/${gambar}`} className='h-[180px] w-auto' alt="" />
            <h1 className='text-white font-semibold text-2xl text-center'>{judul}</h1>
            <a href={link} className="my-7" target='_blank' rel='noopener noreferrer'>
              <button className="text-white font-semibold bg-gradient-to-tr hover:scale-105 from-[#280087] to-[#C00000] cursor-pointer p-3 rounded-xl">See More</button>
            </a>
          </div>
        </section>
      </article>
  )
}

export default CertificationCard