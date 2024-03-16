import React from 'react'

const Navbar = () => {
  return (
    <header className='h-[70px] w-full md:bg-[#fd7520e4] px-5'>
        <nav className='h-full w-full flex items-center md:justify-start justify-center gap-x-[400px]'>
        <div className='h-full w-[90px] p-2'>
            <img src="favicon.png" className='object-contain'/>
        </div>
        <div className='md:block hidden'>
            <h1 className='text-4xl font-semibold font-[poppins]'>
                <span className='text-white'>ADITYA</span> UNIVERSITY</h1> 
        </div>
    </nav>
    </header>
  )
}

export default Navbar