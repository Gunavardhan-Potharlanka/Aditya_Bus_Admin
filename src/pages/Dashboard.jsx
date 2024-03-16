import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Menu, Tally3 } from "lucide-react";
import { Data } from "../components/SideBarData";
import Subnav from "../components/Subnav";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [isopen, setIsopen] = useState(false);
  return (
    <>
      <Navbar />
      <div className=" w-full min-h-[calc(100vh-70px)]">
        {isopen ? (
          <>
            <div className="md:p-0 p-3">
              <Tally3 onClick={() => setIsopen((isopen) => !isopen)} />
            </div>
            <div className="md:hidden min-w-screen md:hidden bg-[#004466] py-2 rounded">
              {Data.map((item, index) => {
                return <Subnav item={item} key={index} />;
              })}
            </div>
          </>
        ) : (
          <div className="md:p-0 p-3">
            <Menu
              className="md:hidden"
              onClick={() => setIsopen((isopen) => !isopen)}
            />
          </div>
        )}
        <div className="w-full min-h-[calc(100vh-60px)] flex">
          <Sidebar />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
