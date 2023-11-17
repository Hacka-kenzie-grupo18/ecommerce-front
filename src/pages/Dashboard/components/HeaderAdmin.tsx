import React from "react";
import { LiaBellSolid } from "react-icons/lia";
import { IoMdExit } from "react-icons/io";

const HeaderAdmin = () => {
  return (
    <header className="w-full h-[110px] background-animated gap-6 items-center border-b-2 border-grey300 justify-center  flex ">
      <button className="rounded-full create hover:text-white hover:bg-primary border-2 h-fit border-white p-1">
        <span className="text-[25px] text-white">
          <LiaBellSolid />
        </span>
      </button>
      <button className="rounded-full logout hover:text-white hover:bg-red-500 border-2 h-fit border-white p-1">
        <span className="text-[25px] text-white">
          <IoMdExit />
        </span>
      </button>
    </header>
  );
};

export default HeaderAdmin;
