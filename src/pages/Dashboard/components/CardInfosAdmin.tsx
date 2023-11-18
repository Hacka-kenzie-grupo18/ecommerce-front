import { useState } from "react";

import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import ModalDelete from "./ModalDelete";
import { useProduct } from "../../../hooks/useProduct";
import { dataProducts } from "../../../mock/products";
import { IProducts } from "../../../interfaces/products";
interface CardInfosAdminProps {
  search: string;
  sortFunction?: (a: IProducts, b: IProducts) => number | null;
}

const CardInfosAdmin = ({ search }: CardInfosAdminProps) => {
  const { sortDirection, sortAsc, sortDesc } = useProduct();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isName, setIsName] = useState("");
  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const filteredData = dataProducts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData = [...filteredData].sort(
    sortDirection === "asc" ? sortAsc : sortDesc
  );

  return (
    <>
      {" "}
      {sortedData.map((data, index) => (
        <div
          key={index}
          className="bg-white w-64 h-96 border-2 rounded border-black"
        >
          <img src={data.image} alt="" className="w-full h-[50%]" />
          <div className="p-4">
            <h6 className="text-[12px] mb-2">{data.name}</h6>
            <h6>
              Em estoque: <span className="font-bold"> {data.stock}</span>{" "}
            </h6>
            <h6>
              Criado: <span className="font-bold"> {data.sex}</span>{" "}
            </h6>
            <h6>
              Tamanhos:{" "}
              <span className="font-bold text-[11px]"> {data.size}</span>{" "}
            </h6>
            <div className="w-full justify-center flex">
              <div className="w-full h-12 justify-center flex gap-6 items-center">
                <button className="w-fit h-fit p-1  border-[1px] border-black rounded-xl">
                  <span className="text-[20px]">
                    <BiEdit />
                  </span>
                </button>
                <button
                  className="w-fit h-fit p-1  border-[1px] border-black rounded-xl"
                  onClick={() => {
                    toggleModal();
                    setIsName(data.name);
                  }}
                >
                  <span className="text-[20px]">
                    <MdOutlineDelete />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {isOpenModal && <ModalDelete toggleModal={toggleModal} name={isName} />}
    </>
  );
};

export default CardInfosAdmin;
