import React from "react";
const ChangePassword = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <form className="w-full md:w-[350px] p-5 solid border shadow-lg w-[30%]">
        <h1 className="text-2xl text-center font-semibold text-[#004466] font-[poppins]">
          Update Password
        </h1>
        <div className="flex flex-col my-5">
          <label className="text-[17px] font-medium font-[poppins]">
            Old Password
          </label>
          <input
            type="text"
            placeholder="Old Password ..."
            className="outline-none solid border px-2 py-1 shadow-md mt-2"
            required
          />
        </div>
        <div className="flex flex-col my-5">
          <label className="text-[17px] font-medium font-[poppins]">
            New Password
          </label>
          <input
            type="password"
            placeholder="New Password ..."
            className="outline-none solid border px-2 py-1 shadow-md mt-2"
            required
          />
        </div>
        <div className="flex flex-col my-5">
          <label className="text-[17px] font-medium font-[poppins]">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password ..."
            className="outline-none solid border px-2 py-1 text-[15px] shadow-md mt-2"
            required
          />
        </div>
        <div className="text-center">
          <button className="bg-[#004466] font-[poppins] text-[14px] px-4 py-1  rounded-md text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
