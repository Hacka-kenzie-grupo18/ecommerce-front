import React, { useState } from "react";

import { useProduct } from "../../hooks/useProduct";

type Sections = {
  category: boolean;
  colors: boolean;
  sex: boolean;
  size: boolean;
  themes: boolean;
  price: boolean;
};

const AsideFilter = () => {
  const { setButtonClicked, buttonClicked } = useProduct();

  const [sections, setSections] = useState({
    category: true,
    colors: true,
    sex: true,
    size: false,
    themes: false,
    price: false,
  });

  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [selectedValues, setSelectedValues] = useState({ min: 0, max: 100 });

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const newMax = value;
    const newMin = newMax < selectedValues.min ? newMax : selectedValues.min;
    setPriceRange({ min: newMin, max: newMax });
    setSelectedValues({ min: newMin, max: newMax });
  };

  const toggleOptions = (section: keyof Sections) => {
    setSections({
      ...sections,
      [section]: !sections[section],
    });
  };
  const handleButtonClick = (text: string) => {
    if (!buttonClicked.includes(text)) {
      setButtonClicked((prev) => [...prev, text]);
    }
  };
  return (
    <div className=" w-[300px] h-full allign  bg-white px-3 py-10">
      <div
        className="text-[18px] font-bold cursor-pointer flex justify-between"
        onClick={() => toggleOptions("category")}
      >
        Category
        <span className="ml-1">{sections.category ? "▲" : "▼"}</span>
      </div>
      {sections.category && (
        <div className="mt-2 flex flex-col gap-2">
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Camisetas")}
          >
            Camisetas
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Camisa")}
          >
            Camisa
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Casacos")}
          >
            Casacos
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Regatas")}
          >
            Regatas
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Blusas")}
          >
            Blusas
          </button>
        </div>
      )}
      <div className="w-full h-[1px] mt-5 bg-black"></div>

      <div
        className="text-[18px] mt-3 font-bold cursor-pointer flex justify-between"
        onClick={() => toggleOptions("colors")}
      >
        Cores
        <span className="ml-1">{sections.colors ? "▲" : "▼"}</span>
      </div>
      {sections.colors && (
        <div className="mt-2 flex flex-col gap-2">
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Preto")}
          >
            Preto
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Vermelho")}
          >
            Vermelho
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Cinza")}
          >
            Cinza
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Branco")}
          >
            Branco
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Azul")}
          >
            Azul
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Marrom")}
          >
            Marrom
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Verde")}
          >
            Verde
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Roxo")}
          >
            Roxo
          </button>
        </div>
      )}
      <div className="w-full h-[1px] mt-5 bg-black"></div>
      <div
        className="text-[18px] mt-3 font-bold cursor-pointer flex justify-between"
        onClick={() => toggleOptions("sex")}
      >
        Sexo
        <span className="ml-1">{sections.sex ? "▲" : "▼"}</span>
      </div>
      {sections.sex && (
        <div className="mt-2 flex flex-col gap-2">
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Masculino")}
          >
            Masculino
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Feminino")}
          >
            Feminino
          </button>
        </div>
      )}
      <div className="w-full h-[1px] mt-5 bg-black"></div>
      <div
        className="text-[18px] mt-3 font-bold cursor-pointer flex justify-between"
        onClick={() => toggleOptions("size")}
      >
        Tamanho
        <span className="ml-1">{sections.size ? "▲" : "▼"}</span>
      </div>
      {sections.size && (
        <div className="mt-2 flex flex-col gap-2">
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("PP")}
          >
            PP
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("P")}
          >
            P
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("M")}
          >
            M
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("G")}
          >
            G
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("GG")}
          >
            GG
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("XG")}
          >
            XG
          </button>
        </div>
      )}
      <div className="w-full h-[1px] mt-5 bg-black"></div>
      <div
        className="text-[18px] mt-3 font-bold cursor-pointer flex justify-between"
        onClick={() => toggleOptions("themes")}
      >
        Temas
        <span className="ml-1">{sections.themes ? "▲" : "▼"}</span>
      </div>
      {sections.themes && (
        <div className="mt-2 flex flex-col gap-2">
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Animes")}
          >
            Animes
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Filmes")}
          >
            Filmes
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Jogos")}
          >
            Jogos
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("RPG")}
          >
            RPG
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Personagens")}
          >
            Personagens
          </button>
          <button
            className="w-full flex hover:bg-grey200 px-1"
            onClick={() => handleButtonClick("Memes")}
          >
            Memes
          </button>
        </div>
      )}
      <div className="w-full h-[1px] mt-5 bg-black"></div>
      <div
        className="text-[18px] font-bold cursor-pointer mt-3 flex justify-between"
        onClick={() => toggleOptions("price")}
      >
        Preços
        <span className="ml-1">{sections.price ? "▲" : "▼"}</span>
      </div>
      {sections.price && (
        <>
          <div className="mt-2 ">
            <input
              type="range"
              min={0}
              max={1000}
              value={priceRange.max}
              step={5}
              onChange={handlePriceChange}
              className="w-full appearance-none h-2 rounded-md bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 outline-none"
            />
            <div className="absolute top-0 left-0 right-0 flex justify-between px-1">
              <div className="w-2 h-2 rounded-full bg-gray-700" />
              <div className="w-2 h-2 rounded-full bg-gray-700" />
            </div>
            <div>
              Min: R${selectedValues.min} - Max: R${selectedValues.max}
            </div>
          </div>
        </>
      )}
      <div className="w-full flex mt-12 justify-center">
        <button className="w-[70%] h-10 text-white mt-7 background-bt-gradient text-[18px] font-bold rounded-xl">
          Aplicar
        </button>
      </div>
    </div>
  );
};

export default AsideFilter;
