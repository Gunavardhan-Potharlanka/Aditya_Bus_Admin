import React from "react";
import { Data } from "./SideBarData";
import Subnav from "./Subnav";
const Sidebar = () => {
  return (
    <div className="hidden md:block md:w-[270px] bg-[#004466]">
      {Data.map((item, index) => {
        return <Subnav item={item} key={index} />;
      })}
    </div>
  );
};

export default Sidebar;
