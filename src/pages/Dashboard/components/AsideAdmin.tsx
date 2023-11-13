import React from "react";
import { BiUserPlus } from "react-icons/bi";
import { FaUserGear, FaBuildingUser } from "react-icons/fa6";
import { PiFolderSimpleUserFill } from "react-icons/pi";

const AsideAdmin = () => {
  return (
    <aside className="w-[25%] bg-orange-400 h-full">
      <div className="h-[80px] w-full flex justify-center items-center bg-green-400">
        <h2 className="text-[25px] font-bold ">Culture Nerd</h2>
      </div>
      <div className="flex justify-center flex-col  items-center h-fit mt-2">
        <button className="flex rounded justify-between px-4 w-[70%] text-[18px] font-bold bg-green-300 h-12 items-center">
          <span className=" font-bold text-[25px]">
            <BiUserPlus />
          </span>
          Criar produto
        </button>
      </div>
      <div className="flex justify-center flex-col  items-center h-fit mt-2">
        <button className="flex rounded justify-between px-4 w-[70%] text-[18px] font-bold bg-green-300 h-12 items-center">
          <span className=" font-bold text-[22px]">
            <FaUserGear />
          </span>
          Editar Usuário
        </button>
      </div>
      <div className="flex justify-center flex-col  items-center h-fit mt-2">
        <button className="flex rounded justify-between px-4 w-[70%] text-[18px] font-bold bg-green-300 h-12 items-center">
          <span className=" font-bold text-[22px]">
            <FaBuildingUser />
          </span>
          Pág. Disponíveis
        </button>
      </div>
      <div className="flex justify-center flex-col  items-center h-fit mt-2">
        <button className="flex rounded justify-between px-4 w-[70%] text-[18px] font-bold bg-green-300 h-12 items-center">
          <span className=" font-bold text-[22px]">
            <PiFolderSimpleUserFill />
          </span>
          Estoques
        </button>
      </div>
    </aside>
  );
};

export default AsideAdmin;
