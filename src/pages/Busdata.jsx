import React, { useContext, useEffect } from 'react'
import {Navigate} from 'react-router-dom'
import { BusContext } from '../context/BusContext';
import { useState } from 'react';
import { api } from '../api/api';
const Busdata = () => {
  const context = useContext(BusContext)
    const [Data, setData] = useState([])
    const fetchData = async()=>{
      try{
        const number = context.number;
        const date = context.date;
        await api.post('/admin/stdbybus', {number, date}).then(res=>{
          setData(res.data);
        })
      }catch(err){
        console.log(err);
      }
    }
    useEffect(()=>{
      fetchData();
    }, [])
    console.log(context.number, context.date);
    if(!context.number) return <Navigate to='/dashboard/bus' />
    return (
    <div className='p-3'>
      <h1 className='text-4xl mb-2'>{context.number} - {Data.length}</h1>
        {
          Data.length && 
          <table className='border w-full'>
                     <tr className='border'>
                        <th>S.No</th>
                        <th>Roll No.</th>
                        <th>Name</th>
                        <th>Operator</th>
                     </tr>
                     {
                      Data.map((item, ind)=>{
                        return <tr key={ind} className='text-center'>
                          <td>{ind+1}</td>
                          <td>{item.rollNo}</td>
                          <td>{item.firstName} {item.lastName}</td>
                          <td>{item.operator_id}</td>
                        </tr>
                      })
                     }
             </table>
        }
    </div>
  )
}

export default Busdata
