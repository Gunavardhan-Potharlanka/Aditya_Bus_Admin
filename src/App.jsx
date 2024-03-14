import React from 'react'
import logo from './assets/aditya-logo.png'

const App = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center flex-col gap-y-3'>
      <img src={logo} alt='Aditya logo' className='h-[150px] object-cover' />
      <h1 className='font-bold text-2xl'>Welcome to Aditya Bus Admin Portal.</h1>
    </div>
  )
}

export default App