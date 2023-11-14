import { useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { FaUserGear, FaBuildingUser } from "react-icons/fa6";
import { PiFolderSimpleUserFill } from "react-icons/pi";
import ModalCreateProduct from "./ModalCreate";

const AsideAdmin = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <aside className="w-[25%] bg-primary100 shadow-aside-dashboard h-full">
      <div className="h-[100px] w-full flex justify-center border-b-2 items-center bg-primary">
        <h2 className="text-[32px] text-white  font-bold ">Culture Nerd</h2>
      </div>
      <div className="gap-16 flex flex-col">
        <div className="flex justify-center   items-center pt-12  h-fit ">
          <button
            className="flex rounded shadow-aside-dashboard border-2  justify-between px-4 w-[70%] text-[18px] font-bold bg-grey300 h-12 items-center"
            onClick={toggleModal}
          >
            <span className=" font-bold  text-[25px]">
              <BiUserPlus />
            </span>
            Criar produto
          </button>
        </div>
        <div className="flex justify-center  items-center h-fit ">
          <button className="flex rounded shadow-aside-dashboard border-2  justify-between px-4 w-[70%] text-[18px] font-bold bg-grey300 h-12 items-center">
            <span className=" font-bold text-[22px]">
              <FaUserGear />
            </span>
            Editar Usuário
          </button>
        </div>
        <div className="flex justify-center   items-center h-fit ">
          <button className="flex rounded  shadow-aside-dashboard border-2  justify-between px-4 w-[70%] text-[15px] font-bold bg-grey300 h-12 items-center">
            <span className=" font-bold text-[22px]">
              <FaBuildingUser />
            </span>
            Pág. Disponíveis
          </button>
        </div>
        <div className="flex justify-center   items-center h-fit ">
          <button className="flex rounded shadow-aside-dashboard border-2  justify-between px-4 w-[70%] text-[18px] font-bold bg-grey300 h-12 items-center">
            <span className=" font-bold text-[22px]">
              <PiFolderSimpleUserFill />
            </span>
            + Estoques
          </button>
        </div>
        <div className="flex justify-center   items-center h-fit ">
          <button className="flex rounded shadow-aside-dashboard border-2  justify-between px-4 w-[70%] text-[18px] font-bold bg-grey300 h-12 items-center">
            <span className=" font-bold text-[22px]">
              <PiFolderSimpleUserFill />
            </span>
            - Estoques
          </button>
        </div>
      </div>
      {isOpenModal && <ModalCreateProduct toggleModal={toggleModal} />}
    </aside>
  );
};

export default AsideAdmin;
