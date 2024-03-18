import React from 'react'
import {api} from '../../api/api.js'
import { useState } from 'react';
const ViewOperator = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [details, setDetaisl] = useState({
      firstname: "",
      lastname: "",
      operator_id:"",
      phoneNumber: ""
    });
    const handleInputs = (e)=>{
      setSearchQuery(e.target.value);
      setDetaisl({
        firstname: "",
        lastname: "",
        operator_id:"",
        phoneNumber: ""
      })
    }
    const handleSearch = () => {
        api.get('/op/getOp/'+searchQuery).then(res=>{
            setDetaisl(res.data.operator);
        }).catch((err)=>{
        alert('Operator not found');
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
        <div className='h-[200px] md:w-[350px] solid border p-2 border-slate-200 rounded-md w-full shadow-md'>
            <table className='h-[60%] w-full'>
                <tbody className='font-[poppins]'>
                    <tr>
                        <th>Name :</th>
                        <td className='font-[poppins]'>{details.firstname} {details.lastname}</td>
                    </tr>
                    <tr>
                        <th>Op Id:</th>
                        <td>{details.operator_id}</td>
                    </tr>
                    <tr>
                        <th>Mobile :</th>
                        <td>{details.phoneNumber}</td>
                    </tr>
                </tbody>
            </table>
      </div>}

    </div>
  )
}

export default ViewOperator
