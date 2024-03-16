import React from 'react'
import Card from '../components/LoginPage/Card'
import Navbar from '../components/LoginPage/Navbar'

const Login = () => {
  return (
    <div className='h-[100vh] w-full  flex flex-col'>
        <Navbar />
        <Card />
    </div>
  )
}

export default Login