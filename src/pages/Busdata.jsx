import React from 'react'
import { StudentByBus } from '../components/SideBarData';
import {Navigate} from 'react-router-dom'
const Busdata = (props) => {
    const Data = StudentByBus(props.number);
    if(!props.number) return <Navigate to='/dashboard/bus' />
    return (
    <div className='p-3'>
      <h1 className='text-4xl mb-2'>{props.number}</h1>
      <div className="p-3 border border-[0.5] rounded">
        {
            Data.map((item, ind)=>{
                return <div className="p-2 flex gap-x-2" key={ind}>
                    <p>{ind+1}.</p>
                    <h1>{item.rollNo}</h1>
                    <h1>{item.firstName} {item.lastName}</h1>
                    <h1>{item.operator_id}</h1>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default Busdata
