import React from 'react'

const CompetitionCard = () => {
  return (
    <article>
        <h1>Competition</h1>
        <section className='flex flex-col items-center justify-around max-w-[410px] min-h-[400px] border border-white/70 rounded-2xl p-5 text-center gap-5'>
            <img src="/img/competition-foto.png" alt="" />
            <h1 className='text-white font-semibold text-2xl'>3rd Place I/O Festival (Web App)</h1>
            <p className='text-white text-center text-sm'>"We proudly secured 3rd place in the Web App category at the I/O Festival 2025 with our project, BetFree. This marks our first-ever achievement in a competition, making it a truly memorable milestone."</p>
            <a href="#" className="my-7">
            <button className="text-white font-light border border-white p-3 rounded-xl">See More</button>
          </a>
        </section>
      </article>
  )
}

export default CompetitionCard