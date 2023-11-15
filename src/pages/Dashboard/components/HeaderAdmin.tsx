import React from "react";
import { LiaBellSolid } from "react-icons/lia";
import { IoMdExit } from "react-icons/io";

const HeaderAdmin = () => {
  return (
    <header className="w-full h-[110px] gap-6 items-center border-b-2 border-grey300 justify-center bg-primary100 flex ">
      <button className="rounded-full create hover:text-white hover:bg-primary border-2 h-fit border-black p-1">
        <span className="text-[25px]">
          <LiaBellSolid />
        </span>
      </button>
      <button className="rounded-full logout hover:text-white hover:bg-red-500 border-2 h-fit border-black p-1">
        <span className="text-[25px]">
          <IoMdExit />
        </span>
      </button>
    </header>
  );
};

export default HeaderAdmin;
