import React, { useState } from 'react'
import { navlinks } from '../../constant'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <>
      {/* Desktop Navbar */}
      <nav className='hidden md:flex justify-around font-sora font-semibold text-white items-center h-16 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg fixed z-100 w-screen'>
        <div>
          <h1 className='text-xl'>MAW</h1>
        </div>
        <div>
          <ul className='flex gap-8'>
            {navlinks.map((navlink) => (
              <li key={navlink.id}>
                <a 
                  href={navlink.link}
                  className='hover:text-gray-300 transition-colors duration-200'
                >
                  {navlink.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className='md:hidden flex justify-between items-center h-16 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg fixed z-50 w-full'>
        <div>
          <h1 className='text-xl font-sora font-semibold text-white'>MAW</h1>
        </div>
        <button
          onClick={toggleSidebar}
          className='text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200'
          aria-label='Toggle menu'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className='md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40'
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/90 backdrop-blur-md border-l border-white/20 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-between items-center p-6 border-b border-white/20'>
          <h1 className='text-xl font-sora font-semibold text-white'>MAW</h1>
          <button
            onClick={closeSidebar}
            className='text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200'
            aria-label='Close menu'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        
        <nav className='p-6'>
          <ul className='space-y-4'>
            {navlinks.map((navlink) => (
              <li key={navlink.id}>
                <a
                  href={navlink.link}
                  onClick={closeSidebar}
                  className='block text-white font-sora font-semibold text-lg py-3 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200'
                >
                  {navlink.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Navbar