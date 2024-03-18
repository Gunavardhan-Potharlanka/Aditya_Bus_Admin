import React, { useContext, useEffect, useState } from "react";
import { BusFront, UserRound } from "lucide-react";
import { BusContext } from "../../context/BusContext";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
const Card = (props) => {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const city = props.cityName;
  useEffect(()=>{
      try{
        if(props.cityName==='*'){
          api.get('/admin/allbuses').then(res=>{
            setData(res.data);
          })
        }
        else{
          api.post('/admin/filtercities', {city}).then(res=>{
            setData(res.data);
          })
        }
      }catch(err){
        console.log(err);
        console.log('Fetch error');
      }
  }, [props.cityName]);
  const context = useContext(BusContext);
  const handleNavigate = (item)=>{
    context.setNumber(item.busNumber);
    navigate('/dashboard/busData');
  }
  
  return (
    <div className="flex flex-wrap gap-5">
      {Data.length>0 ?Data.filter((item)=>{
        if(context.busNumber==0){
          return true;
        }else{
          return (item.busNumber.toString()).startsWith(context.busNumber);
        }
      }).map((item, ind) => {
        return (
          <div
            className="flex gap-x-4 border border-[0.5] p-4 rounded cursor-pointer hover:scale-105"
            onClick={() => handleNavigate(item)}
            key={ind}
          > 
            <div className="flex items-center text-[14px] gap-[3px]">
              <BusFront className="w-[17px]" />
              {item.busNumber}
            </div>
            <div className="flex items-center text-[14px] gap-[3px]">
              <UserRound className="w-[17px]" />
              {item.count}
            </div>
          </div>
        );
      }):<h1 className="text-xl">No buses scanned</h1>}
    </div>
  );
};

export default Card;