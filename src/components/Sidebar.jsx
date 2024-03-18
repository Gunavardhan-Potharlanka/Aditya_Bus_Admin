import React from "react";
import { Data } from "./SideBarData";
import Subnav from "./Subnav";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden md:block md:w-[270px] bg-[#004466]">
      <div className="pt-2 px-3 text-xl text-white cursor-pointer">
        <Link to="bus">
          <p>Buses</p>
        </Link>
      </div>
      {Data.map((item, index) => {
        return <Subnav item={item} key={index} />;
      })}
    </div>
  );
};

export default Sidebar;