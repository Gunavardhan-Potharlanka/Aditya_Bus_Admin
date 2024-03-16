import React from "react";
const AddOperator = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <form className="p-5 rounded-md shadow-xl">
        <h1 className="text-center text-[24px] font-bold font-[poppins] text-[#004466]">
          ADD OPERATOR
        </h1>
        <div className="flex gap-x-4 mt-5 flex-wrap w-full">
          <div className="flex flex-col md:w-[48%] w-full">
            <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
              FirstName
            </label>
            <input
              type="text"
              placeholder="FirstName"
              className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
            />
          </div>
          <div className="flex flex-col md:w-[48%] w-full">
            <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
              LastName
            </label>
            <input
              type="text"
              placeholder="LastName"
              className="outline-none solid border px-2 py-1 text-[15px] rounded-md font-medium mt-1"
            />
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
            Id
          </label>
          <input
            type="tel"
            placeholder="Id"
            className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-[17px] font-[poppins] font-semibold text-slate-500">
            Mobile No.
          </label>
          <input
            type="tel"
            placeholder="Mobile No."
            className="outline-none solid border px-2 py-1 rounded-md font-medium mt-1"
          />
        </div>
        <div className="flex justify-center items-center mt-4">
          <button className="solid border rounded-md px-3 py-1 bg-[#004466] text-white ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOperator;
