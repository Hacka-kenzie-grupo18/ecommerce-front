import React, { useEffect, useState } from "react";
import { PiSquaresFourFill } from "react-icons/pi";
import { PiSquareSplitVerticalFill } from "react-icons/pi";
import { dataProducts } from "../../mock/products";
import CardsProducts from "../CardsProducts/CardsProducts";
import { useProduct } from "../../hooks/useProduct";
const MainProducts = () => {
  const [ativo, setAtivo] = useState("PiSquareSplitVerticalFill");
  const { buttonClicked } = useProduct();
  const handleClick = (botao: React.SetStateAction<string>) => {
    setAtivo(botao);
  };

  const [active, setActive] = useState(true);

  const handleClickActive = (elem: React.SetStateAction<boolean>) => {
    setActive(elem);
  };
  const totalItems = dataProducts.length;

  useEffect(() => {
    const handleResize = () => {
      setActive(window.innerWidth >= 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full allign bg-grey200 pt-2 px-2 h-full">
      <div className="w-full h-10 bg-white justify-between border-[1px] rounded border-black flex gap-2 items-center px-4">
        <div className="flex w-fit gap-2">
          <span className="font-bold">{totalItems}</span>
          <p className="text-[15px]">itens encontrados</p>
        </div>
        <div className="flex border-thin rounded">
          <button
            className={`flex items-center justify-center w-7 gap-1 h-7 p-1 ${
              ativo === "PiSquaresFourFill" ? "bg-grey400" : "bg-grey200"
            }`}
            onClick={() => {
              handleClick("PiSquaresFourFill");
              handleClickActive(false);
            }}
          >
            <span className="text-[22px]">
              <PiSquaresFourFill />
            </span>
          </button>
          <button
            className={`flex items-center justify-center w-7 gap-1 h-7 p-1 ${
              ativo === "PiSquareSplitVerticalFill"
                ? "bg-grey400"
                : "bg-grey200"
            }`}
            onClick={() => {
              handleClick("PiSquareSplitVerticalFill");
              handleClickActive(true);
            }}
          >
            <span className="text-[22px]">
              <PiSquareSplitVerticalFill />
            </span>
          </button>
        </div>
      </div>
      <div className="h-10 w-full bem-aqui gap-1 text-[12px] flex py-2">
        {buttonClicked.map((text, index) => (
          <button
            key={index}
            className="h-[95%] flex items-center rounded w-fit px-1 border-thin  font-bold"
          >
            {text}
          </button>
        ))}
      </div>
      <main
        className={`p-4 h-[930px] overflow-auto flex flex-wrap ${
          active ? "active" : ""
        }`}
      >
        {dataProducts.map((elem) => (
          <CardsProducts
            key={elem.id}
            name={elem.name}
            size={elem.size}
            color={elem.color}
            sex={elem.sex}
            theme={elem.theme}
            image={elem.image}
            rating={elem.rating}
            id={elem.id}
            price={elem.price}
            promotion={elem.promotion}
            description={elem.description}
            active={active}
          />
        ))}
      </main>
    </div>
  );
};

export default MainProducts;
