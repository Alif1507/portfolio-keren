import React from 'react'
import { navlinks } from '../../constant'

const Navbar = () => {
  return (
    <nav className='flex justify-around font-sora font-semibold text-white items-center h-16 border-b-1 border-white/20'>
      <div>
        <h1>MAW</h1>
      </div>
      <div>
        <ul className='flex gap-8'>
          {navlinks.map((navlink) => (
            <li key={navlink.id}>
              <a href={navlink.link}>{navlink.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar