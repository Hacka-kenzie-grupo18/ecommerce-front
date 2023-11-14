import React from "react";
import foto1 from "../../../assets/foto1.jpg";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";

const CardInfosAdmin = () => {
  const data = [
    {
      stock: 30,
      name: "Camiseta preta StarWars",
      createdAt: "25 de janeiro",
      DisponibleSize: "P, PP, M, G",
    },
    {
      stock: 30,
      name: "Camiseta preta StarWars",
      createdAt: "25 de janeiro",
      DisponibleSize: "P, PP, M, G",
    },
    {
      stock: 30,
      name: "Camiseta preta StarWars",
      createdAt: "25 de janeiro",
      DisponibleSize: "P, PP, M, G",
    },
    {
      stock: 30,
      name: "Camiseta preta StarWars",
      createdAt: "25 de janeiro",
      DisponibleSize: "P, PP, M, G",
    },
    {
      stock: 50,
      name: "Camiseta preta Marvel",
      createdAt: "25 de janeiro",
      DisponibleSize: "P, PP, M, G",
    },
    {
      stock: 50,
      name: "Camiseta preta Marvel",
      createdAt: "25 de janeiro",
      DisponibleSize: "P, PP, M, G",
    },
    {
      stock: 50,
      name: "Camiseta verde Dumbledore",
      createdAt: "25 de janeiro",
      DisponibleSize: "P, PP, M, G",
    },
    {
      stock: 50,
      name: "Camiseta rosa Marvel",
      createdAt: "25 de janeiro",
      DisponibleSize: "P, PP, M, G",
    },
  ];

  return (
    <>
      {" "}
      {data.map((data) => (
        <div className="bg-white w-64 h-96 border-2 rounded border-black">
          <img src={foto1} alt="" className="w-full h-[50%]" />
          <div className="p-4">
            <h6 className="text-[12px] mb-2">{data.name}</h6>
            <h6>
              Em estoque: <span className="font-bold"> {data.stock}</span>{" "}
            </h6>
            <h6>
              Criado: <span className="font-bold"> {data.createdAt}</span>{" "}
            </h6>
            <h6>
              Tamanhos:{" "}
              <span className="font-bold text-[11px]">
                {" "}
                {data.DisponibleSize}
              </span>{" "}
            </h6>
            <div className="w-full justify-center flex">
              <div className="w-full h-12 justify-center flex gap-6 items-center">
                <button className="w-fit h-fit p-1  border-[1px] border-black rounded-xl">
                  <span className="text-[20px]">
                    <BiEdit />
                  </span>
                </button>
                <button className="w-fit h-fit p-1  border-[1px] border-black rounded-xl">
                  <span className="text-[20px]">
                    <MdOutlineDelete />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardInfosAdmin;
