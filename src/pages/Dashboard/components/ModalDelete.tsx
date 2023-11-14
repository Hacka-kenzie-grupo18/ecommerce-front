import React from "react";
import { Modal } from "../../../components/ModalDefault/Modal";
import { GrClose } from "react-icons/gr";

interface ModalDeleteProps {
  toggleModal: () => void;
  name: string;
}

const ModalDelete = ({ toggleModal, name }: ModalDeleteProps) => {
  return (
    <Modal toggleModal={toggleModal}>
      <div className="bg-white h-fit  w-screen max-w-[530px] top-10  rounded-2xl p-[25px] flex-col overflow-auto  pb-8 relative">
        <h3 className="text-red-500 font-bold font-lexend text-[20px] mb-[30px]">
          Deletar produto
        </h3>

        <p className="mb-6 text-[18px]">
          Você tem certeza que deseja excluir o produto{" "}
          <span className="text-primary font-bold">{name}</span>.
        </p>
        <div className="w-full h-fit flex justify-center">
          <button className="w-fit px-4 py-2 h-fit rounded-xl font-bold text-white text-[16px] background-bt-gradient ">
            Sim, quero excluir!
          </button>
        </div>

        <button
          className="absolute top-[22px] right-[22px] text-whiteFixed "
          onClick={toggleModal}
        >
          <GrClose />
        </button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
