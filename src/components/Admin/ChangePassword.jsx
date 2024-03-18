import React, { useState } from "react";
import { api } from "../../api/api.js";

const ChangePassword = () => {
  const decodeJwt = (token) => {
    if (!token) {
      console.error('No JWT token provided');
      return null;
    }
  
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      ).join(''));
  
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding JWT token:', error);
      return null;
    }
  };
  const token = localStorage.getItem('ZyklonX_PhaseDoom').split(' ')[1];
  const decodedToken = decodeJwt(token);
  let userid = decodedToken.id;
  console.log(userid);

  const [data, setData] = useState({id:userid, oldPassword:'', newPassword:'', confirmPassword:''});

  const updatePassword = async(e) => {
    e.preventDefault()
    if(data.newPassword === data.confirmPassword){
      await api.post('/admin/changePass', {
        id:data.id,
        oldPassword:data.oldPassword,
        newPassword:data.newPassword
      })
      .then((res) => {
        console.log(res.data)
      }).catch((err)=>{
        alert('Error changing password');
        console.log(err);
      })
    }
    else alert("Password doesn't match")
    setData({id:userid, oldPassword:'', newPassword:'', confirmPassword:''})
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form className="w-full md:w-[350px] p-5 solid border shadow-lg" onSubmit={updatePassword}>
        <h1 className="text-2xl text-center font-semibold text-[#004466] font-[poppins]">
          Update Password
        </h1>
        <div className="flex flex-col my-5">
          <label className="text-[17px] font-medium font-[poppins]">
            Old Password
          </label>
          <input
            type="password"
            placeholder="Old Password ..."
            value={data.oldPassword}
            onChange={(e) => setData({...data,oldPassword:e.target.value})}
            className="outline-none solid border px-2 py-1 shadow-md mt-2"
            required
          />
        </div>
        <div className="flex flex-col my-5">
          <label className="text-[17px] font-medium font-[poppins]">
            New Password
          </label>
          <input
            type="password"
            placeholder="New Password ..."
            value={data.newPassword}
            onChange={(e) => setData({...data,newPassword:e.target.value})}
            className="outline-none solid border px-2 py-1 shadow-md mt-2"
            required
          />
        </div>
        <div className="flex flex-col my-5">
          <label className="text-[17px] font-medium font-[poppins]">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password ..."
            value={data.confirmPassword}
            onChange={(e) => setData({...data,confirmPassword:e.target.value})}
            className="outline-none solid border px-2 py-1 text-[15px] shadow-md mt-2"
            required
          />
        </div>
        <div className="text-center">
          <button className="bg-[#004466] font-[poppins] text-[14px] px-4 py-1  rounded-md text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
// import React from 'react'

// const ChangePassword = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ChangePassword
