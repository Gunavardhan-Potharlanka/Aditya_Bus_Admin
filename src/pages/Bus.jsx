import React, { useState, useEffect, useContext } from "react";
import Card from "../components/Buses/Card";
import { BusContext } from "../context/BusContext";
import { Search } from "lucide-react";
const Bus = () => {
  const context = useContext(BusContext);
  const [City, setSelectCity] = useState('*');
  const datetoday = new Date().toISOString().split('T')[0].split('-').reverse().join('-').toString();
  const [date, setDate] = useState(datetoday);
  const HandleDate = (e)=>{
    setDate(e.target.value.split('-').reverse().join('-'));
    context.setDate(e.target.value.split('-').reverse().join('-'));
  }
  return (
    <div className="w-full py-2 px-3">

      <div className="w-full flex justify-between flex-wrap  gap-4 mb-3">
        
        <div className="md:w-[30%] w-full">
          <select
            name="busGround"
            className="w-full outline-0 p-2 rounded border border-[0.5]"
            onChange={(e)=>{
              setSelectCity(e.target.value)
            }}
          >
            <option value="*">All</option>
            <option value="Rajahmundry">Rajahmundry</option>
            <option value="Kakinada">Kakinada</option>
            <option value="Pithapuram">Pithapuram</option>
          </select>
        </div>

        <input type="date" className="border-0 outline-0" onChange={(e)=> HandleDate(e)} />

        <div className="md:w-[35%] w-full  flex gap-2 justify-end">
          <div className="w-full flex flex-wrap relative">
            <input
              type="tel"
              placeholder="Search by Bus Number ..."
              className="w-full outline-0 p-2 border border-[0.5] rounded"
              onChange={(e)=>context.setBusnumber(e.target.value)}
            
            />
            <Search className="absolute right-2 top-2 text-[grey]" />
            
          </div>
        </div>
      </div>
      <div className="flex gap-2 px-5">
        <Card cityName={City} date={date}/>
      </div>
    </div>
  );
};

export default Bus;