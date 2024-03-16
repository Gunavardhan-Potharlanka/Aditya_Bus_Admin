import React, { useState } from "react";
import { ResponsiveContainer, Bar, BarChart, XAxis, YAxis } from "recharts";
import { Array } from "../components/SideBarData";
import PieChart from "../components/PieChart";
const Statistice = () => {
  const [cityName, setCity] = useState("Rajahmundry");
  return (
    <div className="h-full w-full">
      <div className="flex flex-wrap justify-between sm:justify-center items-center">
        <div className="md:w-2/3 w-full h-full flex flex-wrap items-center gap-5 justify-center px-2">
          <div className="w-full md:w-[40%] rounded p-2 shadow solid border border-b-[3px] border-b-red-500">
            <h2 className="text-3xl">69</h2>
            <p>Buses scanned</p>
          </div>

          <div className="w-full md:w-[40%] shadow rounded p-2 solid border border-b-[3px] border-b-blue-500">
            <h1 className="text-3xl">609</h1>
            <p>Students scanned</p>
          </div>

          <div className="w-full md:w-[40%] shadow rounded p-2 solid border border-b-[3px] border-b-blue-500">
            <h1 className="text-3xl">1</h1>
            <p>Black sheep</p>
          </div>
        </div>
        <div className="md:w-1/3 w-full flex justify-center">
          <PieChart />
        </div>
      </div>

      <div className="p-2 w-full">
        <select
          name="Cities"
          className="mb-3 border border-0 outline-0"
          onChange={(e) => setCity(e.target.value)}
        >
          <option value={"Rajahmundry"}>Rajahmundry</option>
          <option value={"Kakinada"}>Kakinada</option>
          <option value={"Pitapuram"}>Pitapuram</option>
          <option value={"Rayavaram"}>Rayavaram</option>
          <option value={"Kesavaram"}>Kesavaram</option>
        </select>
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            data={Array.filter((item) => item.city === cityName)}
            width={400}
            height={400}
          >
            <XAxis dataKey={"name"} />
            <YAxis />
            <Bar dataKey={"students"} fill="#0077B6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistice;
