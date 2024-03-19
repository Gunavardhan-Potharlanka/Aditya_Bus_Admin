import React, { useState } from "react";
import {api} from '../../api/api.js'

const AddStudent = () => {
  const options = [
    { label: "select college", value: 0 },
    { label: "AEC", value: 1 },
    { label: "ACET", value: 2 },
    { label: "ACOE", value: 3 },
  ];
  const branches = [
    { label: "select branch ", value: 0 },
    { label: "CSE", value: 1 },
    { label: "ECE", value: 2 },
    { label: "EEE", value: 3 },
    { label: "IT", value: 4 },
    { label: "MECH", value: 5 },
  ];
  const years = [
    { label: "select year", value: 0 },
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
  ];
  const nmbrs = [
    { label: "select semester", value: 0 },
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
  ];
  const passouts = [
    { label: "passout year", value: 0 },
    { label: "2024", value: 1 },
    { label: "2025", value: 2 },
    { label: "2026", value: 3 },
    { label: "2027", value: 4 },
  ];
  const fee = [
    { label: "fee", value: 0 },
    { label: "Paid", value: 1 },
    { label: "Not Paid", value: 2 },
  ];
  const cities = [
    { label: "select city", value: 0 },
    { label: "Rajahmundry", value: 1 },
    { label: "Kakinada", value: 2 },
    { label: "Pithapuram", value: 3 },
    { label: "Peddapuram", value: 4 },
  ];
  const [data,setData] = useState({
      firstname:'',lastname:'',college: '',branch: '',rollno:'',phoneNumber:'',email:'',year:'',semester:'',
      passout:'',busfee:'',cityName:'',busRoute: '',
    })

  const handleStudData = (e) => {
        e.preventDefault()
        api.post('/admin/addstudent',data)
        .then((res) => {
          alert('Added Successfully ... ')
          setData({
            firstname:'',lastname:'',college: '',branch: '',rollno:'',phoneNumber:'',email:'',year:'',semester:'',
            passout:'',busfee:'',cityName:'',busRoute: '',
          })
          // console.log(res.data);
        })
  }
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
      <form className="md:w-[500px] h-full w-full p-5 rounded-md shadow-xl mt-5" onSubmit={handleStudData}>
        <h1 className="text-center text-[24px] font-bold font-[poppins] text-[#004466]">
          ADD STUDENT{" "}
        </h1>

        <div className="flex gap-x-4 w-full flex-wrap mt-2">
              <div className="flex flex-col md:w-[48%] w-full">
                <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
                  FirstName
                </label>
                <input
                  type="text"
                  placeholder="FirstName"
                  value={data.firstname}
                  onChange={(e) => setData({...data,firstname:e.target.value})}
                  className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
                />
              </div>
              <div className="flex flex-col md:w-[48%] md:mt-0 mt-2 w-full">
                <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
                  LastName
                </label>
                <input
                  type="text"
                  placeholder="LastName"
                  value={data.lastname}
                  onChange={(e) => setData({...data,lastname:e.target.value})}
                  className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
                />
              </div>
        </div>

        <div className="flex gap-x-4 w-full flex-wrap mt-2">
          <div className="flex flex-col md:w-[48%] w-full">
            <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
              College
            </label>
            <select
                  className="outline-none solid border px-2 w-full py-1 rounded-md font-medium mt-1"
                  value={data.college}
                  onChange={(e) => setData({...data,college:e.target.value})}
            >
              {options.map((option) => (
                <option value={option.value} className="font-medium text-grey-500">{option.label}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:w-[48%] md:mt-0 mt-2 w-full">
            <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
              Branch
            </label>
            <select 
                  className="outline-none solid border px-2 w-full py-1 rounded-md font-medium mt-1"
                  value={data.branch}
                  onChange={(e) => setData({...data,branch:e.target.value})}
            >
              {branches.map((branch) => (
                <option value={branch.value}>{branch.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-x-4 mt-2 flex-wrap">
          <div className="flex flex-col md:w-[48%] w-full">
            <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
              Roll No.
            </label>
            <input
              type="text"
              placeholder="Roll No."
              value={data.rollno}
              onChange={(e) => setData({...data,rollno:e.target.value})}
              className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
            />
          </div>
          <div className="flex flex-col w-full md:w-[48%] md:mt-0 mt-2">
            <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
              Mobile No.
            </label>
            <input
              type="tel"
              placeholder="Mobile No."
              value={data.phoneNumber}
              onChange={(e) => setData({...data,phoneNumber:e.target.value})}
              className="outline-none solid border px-2 py-1 text-[15px] rounded-md font-medium mt-1"
            />
          </div>
        </div>

        <div className="flex flex-col mt-2">
          <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({...data,email:e.target.value})}
            className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
          />
        </div>

        <div className="flex gap-x-4 flex-wrap w-full mt-2">
          <div className="flex flex-col md:w-[48%] w-full">
            <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
              Year
            </label>
            <select 
                  className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
                  value={data.year}
                  onChange={(e) => setData({...data,year:e.target.value})}
            >
              {years.map((year) => (
                <option value={year.value}>{year.label}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:w-[48%] w-full md:mt-0 mt-2">
            <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
              Semester
            </label>
            <select 
                className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
                value={data.semester}
                onChange={(e) => setData({...data,semester:e.target.value})}
            >
              {nmbrs.map((sem) => (
                <option value={sem.value}>{sem.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-x-4 w-full flex-wrap mt-2">
          <div className="flex flex-col md:w-[48%] w-full">
            <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
              Passout
            </label>
            <select 
                  className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
                  value={data.passout}
                  onChange={(e) => setData({...data,passout:e.target.value})}
            >
              {passouts.map((year) => (
                <option value={year.value}>{year.label}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:w-[48%] w-full md:mt-0 mt-2">
            <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
              Bus Fee
            </label>
            <select 
                  className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
                  value={data.busfee}
                  onChange={(e) => setData({...data,busfee:e.target.value})}
            >
              {fee.map((sem) => (
                <option value={sem.value}>{sem.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-x-4 w-full flex-wrap mt-2">
          <div className="flex flex-col md:w-[48%] w-full">
            <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
              City
            </label>
            <select 
                  className="outline-none solid border px-2 w-full py-1 rounded-md font-medium mt-1"
                  value={data.cityName}
                  onChange={(e) => setData({...data,cityName:e.target.value})}
            >
              {cities.map((city) => (
                <option value={city.value}>{city.label}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:w-[48%] w-full md:mt-0 mt-2">
            <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
              Bus Route
            </label>
            <input
              type="text"
              placeholder="Bus route"
              value={data.busRoute}
              onChange={(e) => setData({...data,busRoute:e.target.value})}
              className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
          <button className="solid border rounded-md px-3 py-1 bg-[#004466] text-white ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
