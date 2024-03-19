import React, { useEffect, useState } from 'react'
import { api } from '../api/api';
import { Search } from 'lucide-react';

export const BlackSheep = () => {
    const [data,setData] = useState([]);
    const [search,setSearchQuery] = useState('');
    const getDetails = async() => {
        try {
            await api.get('/admin/unauthorized')
            .then((res) => {
                // console.log(res.data);
                setData(res.data);
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getDetails();
    },[])

    const filteredData = data.filter(
        (item) => item.rollNo.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className='w-full min-h-[calc(100vh-70px)] p-5'>

        <div className='w-full'>
            <div className='w-full relative'>
                <input type="tel"
                       placeholder='search roll number ...'
                       onChange={(e) => setSearchQuery(e.target.value)}
                       className='outline-none font-[poppins] text-[15px] font-medium text-gray-400 solid border md:w-[50%] w-full py-2 shadow-md rounded-[5px] px-10'
                 />
                 <Search className='absolute left-2 bottom-2 text-[grey]'/>
            </div>
        </div>
    { filteredData.length>0 ?
        <div className='px-5 md:my-10 my-5 flex justify-center items-center'>
            <table className='solid border rounded-md' cellPadding={7}>
                <tr className='border'>
                    <th>S.No</th>
                    <th>Date</th>
                    <th>Roll No.</th>
                    <th>Operator</th>
                    <th>Bus No.</th>
                </tr>
                {
                    filteredData.map((item,ind) => {
                        return <tr className='text-center'>
                            <td>{ind+1}</td>
                            <td>{item.date}</td>
                            <td>{item.rollNo}</td>
                            <td>{item.operator}</td>
                            <td>{item.busNumber}</td>
                        </tr>
                    })
                }
            </table>
        </div>:<h1>No fraud detected {':)'}</h1>
    }
    </div>
  )
}
