import React from 'react'
import {api} from '../../api/api.js'
import { useState } from 'react';


const ViewStudent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [details, setDetails] = useState({
      firstname: "",
      lastname: "",
      
    });
    const handleInputs = (e)=>{
      setSearchQuery(e.target.value);
      setDetails({
        firstname: "",
        lastname: "",
      })
    }
    const handleSearch = () => {
        api.get('/admin/getstudetails/'+searchQuery)
        .then(res=>{
            setDetails(res.data.student);
        }).catch((err)=>{
            alert('Student details Not Found');
            setSearchQuery('');
        })
    };
  return (
    <div className='h-full w-full px-5 flex flex-col gap-5 justify-center items-center'>
      <div className='w-full flex justify-center gap-2'>
            <input type="text"
                    className="md:max-w-[280px] w-full flex-1 font-[poppins] solid border rounded-md shadow-md px-4 py-2  outline-none "
                    value={searchQuery}
                    onChange={(e) => handleInputs(e)}
                    placeholder="Search ..."
            />
            <div>
                <button  className="bg-[#004466] text-white text-[15px] font-[poppins] rounded-md px-2 py-2" onClick={handleSearch}>Search</button>
            </div>
      </div>

      { details.firstname.length>0 &&
        <div className='md:w-[350px] solid border p-2 border-slate-200 rounded-md w-full shadow-md'>
            <table className='h-[60%] w-full'>
                <tbody className='font-[poppins]'>
                    <tr>
                        <th>Name :</th>
                        <td className='font-[poppins]'>{details.firstname} {details.lastname}</td>
                    </tr>
                    <tr>
                        <th>Roll :</th>
                        <td>{details.rollno}</td>
                    </tr>
                    <tr>
                        <th>Email :</th>
                        <td>{details.email}</td>
                    </tr>
                    <tr>
                        <th>Year & Semester</th>
                        <td>{details.year}rd year - {details.semester}</td>
                    </tr>
                    <tr>
                        <th>City :</th>
                        <td>{details.cityName}</td>
                    </tr>
                    <tr>
                        <th>BusRoute :</th>
                        <td>{details.busRoute}</td>
                    </tr>
                    <tr>
                        <th>Fee :</th>
                        <td>{details.feePaid}</td>
                    </tr>
                </tbody>
            </table>
      </div>}

    </div>
  )
}

export default ViewStudent

