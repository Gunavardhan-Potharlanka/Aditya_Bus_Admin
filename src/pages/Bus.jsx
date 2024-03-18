import React, { useState, useEffect, useContext } from "react";
import Card from "../components/Buses/Card";
import { BusContext } from "../context/BusContext";
const Bus = () => {
  const context = useContext(BusContext);
  const [City, setSelectCity] = useState('*');
  return (
    <div className="w-full py-2 px-3">
      <div className="w-full flex justify-between mb-3">
        <div className="w-[30%]">
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
        <div className="w-[50%] flex gap-2 justify-end">
          <div className="w-[50%]">
            <input
              type="tel"
              placeholder="Search by Bus Number"
              className="w-full outline-0 p-2 border border-[0.5] rounded"
              onChange={(e)=>context.setBusnumber(e.target.value)}
            />
          </div>
          <div className=" flex justify-center">
            <button className="text-white bg-blue-500 rounded px-2">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-2 px-5">
        <Card cityName={City}/>
      </div>
    </div>
  );
};

export default Bus;