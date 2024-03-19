import axios from "axios";
import React from "react";
import {api} from '../api/api.js'
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const HandleLogout = ()=>{
      localStorage.clear();
      navigate('/');
  }
  return (
    <header className="h-[70px] w-full px-4 sticky top-0 left-0 z-10 bg-white shadow-md">
      <nav className="h-full w-full flex items-center justify-between">
        <div className="h-full w-[90px] flex justify-center items-center p-2">
        <Link to="/dashboard"><img src="favicon.png" className=" object-contain" /></Link>
        </div>
        <div className="md:block hidden">
          <h1 className="text-4xl font-semibold  font-[poppins]">
            <span className="text-[#fd7520e4]">ADITYA</span> UNIVERSITY
          </h1>
        </div>
        <div>
          <button onClick={HandleLogout} className="solid border bg-[#004466] text-white px-2 py-1 rounded-[5px] font-[poppins]">
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
