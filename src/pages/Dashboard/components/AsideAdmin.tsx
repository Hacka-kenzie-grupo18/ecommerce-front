import { useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { FaUserGear, FaBuildingUser } from "react-icons/fa6";
import { PiFolderSimpleUserFill } from "react-icons/pi";
import ModalCreateProduct from "./ModalCreate";

import { useProduct } from "../../../hooks/useProduct";

const AsideAdmin = () => {
  const { setSortDirection } = useProduct();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const handleSortAsc: () => void = () => {
    setSortDirection("desc");
  };
  const handleSortDesc: () => void = () => {
    setSortDirection("asc");
  };

  return (
    <aside className="w-[25%] background-aside-dash shadow-aside-dashboard max-w-[300px]  h-full">
      <div className="h-[100px] w-full flex justify-center border-b-2 items-center bg-primary">
        <h2 className="text-[20px] maxsm:text-[11px] text-white  font-bold ">
          Culture Nerd
        </h2>
      </div>
      <div className="gap-16 flex flex-col">
        <div className="flex justify-center   items-center pt-12  h-fit ">
          <button
            className="flex text-white  hover:border-white rounded background-gradient-create maxsm:justify-center maxsm:rounded-full shadow-aside-dashboard border-2 border-black justify-between px-4 w-[70%] text-[18px] sm:text-[12px] font-bold  h-12 items-center"
            onClick={toggleModal}
          >
            <span className=" font-bold  text-[25px]">
              <BiUserPlus />
            </span>
            <p className="maxsm:hidden">Criar produto</p>
          </button>
        </div>
        <div className="flex justify-center  items-center h-fit ">
          <button className="flex rounded hover:border-white border-black maxsm:rounded-full shadow-aside-dashboard maxsm:justify-center border-2  justify-between px-4 w-[70%] text-[12px] font-bold bg-grey300 h-12 items-center">
            <span className=" font-bold text-[22px]">
              <FaUserGear />
            </span>
            <p className="maxsm:hidden">Editar Usuário</p>
          </button>
        </div>
        <div className="flex justify-center   items-center h-fit ">
          <button className="flex border-black hover:border-white rounded maxsm:justify-center maxsm:rounded-full  shadow-aside-dashboard border-2  justify-between px-4 w-[70%] text-[10px] font-bold bg-grey300 h-12 items-center">
            <span className=" font-bold text-[22px]">
              <FaBuildingUser />
            </span>
            <p className="maxsm:hidden">Pág. Disponíveis</p>
          </button>
        </div>
        <div className="flex justify-center   items-center h-fit ">
          <button
            className="flex border-black rounded maxsm:justify-center maxsm:rounded-full maxsm:rouded-full shadow-aside-dashboard border-2  justify-between px-4 w-[70%] text-[12px] font-bold bg-grey300 h-12 items-center "
            onClick={handleSortAsc}
          >
            <span className=" font-bold text-[22px]">
              <PiFolderSimpleUserFill />
            </span>
            <p className="maxsm:hidden">+ Estoques</p>
          </button>
        </div>
        <div className="flex justify-center   items-center h-fit ">
          <button
            onClick={handleSortDesc}
            className="flex border-black rounded maxsm:justify-center maxsm:rounded-full shadow-aside-dashboard border-2  justify-between px-4 w-[70%] text-[12px] font-bold bg-grey300 h-12 items-center"
          >
            <span className=" font-bold text-[22px]">
              <PiFolderSimpleUserFill />
            </span>
            <p className="maxsm:hidden">- Estoques</p>
          </button>
        </div>
      </div>
      {isOpenModal && <ModalCreateProduct toggleModal={toggleModal} />}
    </aside>
  );
};

export default AsideAdmin;
