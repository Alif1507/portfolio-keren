import React from 'react'

function CompetitionCard() {
  return (
    <section className='flex flex-col items-center justify-around max-w-[390px] min-h-[380px] bg-gradient-to-r from-[#280087] to-[#C00000] rounded-2xl p-1 text-center gap-5'>
            <div className='flex flex-col items-center justify-around w-full h-full bg-black rounded-2xl p-5 text-center gap-5'>
              <img src="/img/competition-foto.png" alt="" />
            <h1 className='text-white font-semibold text-2xl'>3rd Place I/O Festival (Web App)</h1>
            <p className='text-white text-center text-sm'>"We proudly secured 3rd place in the Web App category at the I/O Festival 2025 with our project, BetFree. This marks our first-ever achievement in a competition, making it a truly memorable milestone."</p>
            <a href="https://www.instagram.com/p/DLCOzgkJyMl/"  target='_blank' className="my-7 cursor-pointer">
            <button className="text-white font-semibold bg-gradient-to-tr hover:scale-105 from-[#280087] to-[#C00000] cursor-pointer  p-3 rounded-xl">See More</button>
          </a>
            </div>
        </section>
  )
}

export default CompetitionCard
