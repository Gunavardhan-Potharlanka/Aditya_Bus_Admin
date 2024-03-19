import React, { useState } from 'react'
import axios from 'axios'
import {Navigate, useNavigate} from 'react-router-dom'
import { apiConfig } from '../../api/api';


const Card = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState({username:'',password:''})

    const handleAdmin = async(e) => {
        e.preventDefault();
        await axios.post(`http://localhost:4000/api/v1/admin/login`,user)
        .then((res) => {
            // console.log(res.data);
            localStorage.setItem("ZyklonX_PhaseDoom",res.headers.authorization)
        })
        .catch((err) => {
            alert('Invalid Credentials')
        })
        navigate('/dashboard');
    }
    if(localStorage.getItem('ZyklonX_PhaseDoom')) return <Navigate to='/dashboard' />
  return (
    <div className='min-h-[calc(100vh-70px)] w-full md:border-none border-t-2 flex items-center justify-center bg-white relative overflow-hidden'>
    
     <div className='md:h-[350px] md:w-[300px] w-full h-full p-5 bg-white solid border  rounded-xl shadow-xl'>
        <h1 className="text-3xl font-[poppins]  font-bold  text-center">Login</h1>

        <form className='h-full w-full py-2' onSubmit={handleAdmin}>
            <div>
                <label className="text-gray-700 md:text-mg text-xl font-semibold " htmlFor="username">Username</label>
                <input
                    className="solid border shadow-md rounded-md px-4 py-2 mt-1 w-full outline-none"
                    value={user.username}
                    onChange={(e) => setUser({...user,username:e.target.value})}
                    id="username"
                    type="text"
                    placeholder="Username"
                />
            </div>
            <div className="mt-4">
                <label className="text-gray-700 md:text-mg text-xl font-semibold " htmlFor="password">Password</label>
                <input
                    className="solid border shadow-md rounded-md px-4 py-2 mt-1 w-full outline-none"
                    value={user.password}
                    onChange={(e) => setUser({...user,password:e.target.value})}
                    id="password"
                    type="password"
                    placeholder="Password"
                />
            </div>
            <div className='mt-4'>
                <p className='flex justify-end font-[poppins] text-md underline'>Forgot password?</p>
            </div>
            <div className='mt-5 flex items-center justify-center'>
                <button className="bg-blue-500 text-white rounded-[30px] font-[poppins] px-8 py-2 hover:rounded-[5px] hover:px-8 duration-500">Login</button>
            </div>
        </form>


    </div>
    <div className='h-[45%] w-[40%] bg-[#004466] rounded-[45px] absolute -top-24 -right-48 rotate-45  hidden md:block'></div>
    <div className='h-[45%]  w-[40%] bg-[#004466] rounded-[45px] absolute -bottom-24 -left-48 rotate-45 hidden md:block'></div> 

    
   </div>
  )
}

export default Card