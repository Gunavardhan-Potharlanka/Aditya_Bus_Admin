import React, { useState } from "react";
import{ api }from '../../api/api.js'

const AddOperator = () => {
  const [data,setData] = useState({firstname:'',lastname:'',operator_id:'',password:'',phoneNumber:''})
  const handleAdd = (e)=>{
    e.preventDefault();
    api.post('/op/register',data)
    .then((res) => {
      alert('Successfully Added')
      setData({firstname:'',lastname:'',operator_id:'',password:'',phoneNumber:''})
    })

  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form onSubmit={handleAdd} className="p-5 rounded-md shadow-xl">
        <h1 className="text-center text-[24px] font-bold font-[poppins] text-[#004466]">
          ADD OPERATOR
        </h1>
        <div className="flex gap-x-4 mt-5 flex-wrap w-full">
          <div className="flex flex-col md:w-[47%] w-full">
            <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
              FirstName
            </label>
            <input
              type="text"
              placeholder="FirstName"
              value={data.firstname}
              onChange={(e) => setData({...data,firstname:e.target.value})}
              className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
              name="firstname"
            />
          </div>
          <div className="flex flex-col md:w-[47%] w-full">
            <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
              LastName
            </label>
            <input
              type="text"
              placeholder="LastName"
              value={data.lastname}
              onChange={(e) => setData({...data,lastname:e.target.value})}
              className="outline-none solid border px-2 py-1 text-[15px] rounded-md font-medium mt-1"
              name="lastname"
            />
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
            Id
          </label>
          <input
            type="tel"
            placeholder="Id"
            value={data.operator_id}
              onChange={(e) => setData({...data,operator_id:e.target.value})}
            className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
            name="operator_id"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={data.password}
              onChange={(e) => setData({...data,password:e.target.value})}
            className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
            name="password"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
            Mobile No.
          </label>
          <input
            type="tel"
            placeholder="Mobile No."
            value={data.phoneNumber}
              onChange={(e) => setData({...data,phoneNumber:e.target.value})}
            className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
            name="phoneNumber"
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          <button type="submit" className="solid border rounded-md px-3 py-1 bg-[#004466] text-white ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOperator;
