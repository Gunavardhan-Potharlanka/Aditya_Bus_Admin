import React, { useEffect, useState } from "react";
import { ResponsiveContainer, Bar, BarChart, XAxis, YAxis } from "recharts";
import PieChart from "../components/PieChart";
import { api } from "../api/api";
const Statistice = () => {
  
  const [Data, setTodayData] = useState([]);
  const [BS, setBs] = useState(0); 
  const fetchData = async()=>{
    try {
      await api.get('/admin/getTodayData').then(res=>{
        setTodayData(res.data);
      })
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try{
      await api.get('/admin/unauthCount').then(res=>{
        setBs(res.data);
        // console.log(res.data)
      })
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData()
  }, []);
  const [cityName, setCity] = useState("Rajahmundry");
  const rjy = Data.reduce((acc, cur) => {
    if (cur.city === 'Rajahmundry') {
      return acc + cur.studentCount;
    } else {
      return acc;
    }
  }, 0);
  const kkd = Data.reduce((acc, cur) => {
    if (cur.city === 'Kakinada') {
      return acc + cur.studentCount;
    } else {
      return acc;
    }
  }, 0);
  const ppt = Data.reduce((acc, cur) => {
    if (cur.city === 'Pithapuram') {
      return acc + cur.studentCount;
    } else {
      return acc;
    }
  }, 0);
  const CityData = [rjy, kkd, ppt];
  return (
    <div className="h-full w-full">
      <div className="flex flex-wrap justify-between sm:justify-center items-center">
        <div className="md:w-2/3 w-full h-full flex flex-wrap items-center gap-5 justify-center px-2">
          <div className="w-full md:w-[40%] rounded p-2 shadow solid border border-b-[3px] border-b-red-500">
            <h2 className="text-3xl">{Data.length}</h2>
            <p>Buses scanned</p>
          </div>

          <div className="w-full md:w-[40%] shadow rounded p-2 solid border border-b-[3px] border-b-blue-500">
            <h1 className="text-3xl">{
               Data.reduce((acc, cur) => acc + cur.studentCount, 0)
            }</h1>
            <p>Students scanned</p>
          </div>

          <div className="w-full md:w-[40%] shadow rounded p-2 solid border border-b-[3px] border-b-blue-500">
            <h1 className="text-3xl">{BS}</h1>
            <p>Black sheep</p>
          </div>
        </div>
        <div className="md:w-1/3 w-full flex justify-center">
          <PieChart citydata={CityData} />
        </div>
      </div>

      <div className="p-2 w-full">
        <select
          name="Cities"
          className="mb-3 border-0 outline-0"
          onChange={(e) => setCity(e.target.value)}
        >
          <option value={"Rajahmundry"}>Rajahmundry</option>
          <option value={"Kakinada"}>Kakinada</option>
          <option value={"Pithapuram"}>Pithapuram</option>
        </select>
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            data={Data.filter((item) => item.city === cityName)}
            width={400}
            height={400}
          >
            <XAxis dataKey={"busNumber"} />
            <YAxis />
            <Bar dataKey={"studentCount"} fill="#0077B6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistice;
