import React from 'react'
import Marquee from 'react-fast-marquee'

const About = () => {
  return (
    <section className='mt-64'>
        <div className='flex flex-col gap-10 relative'>
          <img src="/img/foto-diri.png" className='w-[676px] h-[676px] max-md:h-[400px] max-md:w-auto absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'  alt="" />
          <Marquee direction='right' className='flex'>
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
        </Marquee>

        <Marquee className='flex'>
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
        </Marquee>

        <Marquee direction='right' className='flex'>
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
          <img src="/img/MAW.png" className='mx-10' alt="" />
        </Marquee>

        
        </div>
    </section>
  )
}

export default About