import React from 'react'

const CertificationCard = ({ gambar, judul, link }) => {
  return (
     <article>
        <h1>Competition</h1>
        <section className='flex flex-col items-center justify-around max-w-[410px] min-h-[400px] border border-white/70 rounded-2xl p-5 text-center gap-5'>
            <img src={`/img/${gambar}`} className='h-[180px] w-auto' alt="" />
            <h1 className='text-white font-semibold text-2xl text-center'>{judul}</h1>
            <a href={link} className="my-7" target='_blank'>
            <button className="text-white font-light border border-white p-3 rounded-xl">See More</button>
          </a>
        </section>
      </article>
  )
}

export default CertificationCard