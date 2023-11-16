import React from "react";
import { LiaBellSolid } from "react-icons/lia";

const HeaderAdmin = () => {
  return (
    <header className="w-full h-[110px] gap-6 items-center border-b-2 border-grey300 justify-center bg-brand4 flex ">
      <button className="rounded-full  border-2 h-fit border-black p-1">
        <span className="text-[25px]">
          <LiaBellSolid />
        </span>
      </button>
      <button className="rounded-full border-2  border-black h-fit p-1">
        <span className="text-[25px]">
          <LiaBellSolid />
        </span>
      </button>
      <button className="rounded-full border-2  border-black h-fit p-1">
        <span className="text-[25px]">
          <LiaBellSolid />
        </span>
      </button>
      <button className="rounded-full border-2  border-black h-fit p-1">
        <span className="text-[25px]">
          <LiaBellSolid />
        </span>
      </button>
    </header>
  );
};

export default HeaderAdmin;
