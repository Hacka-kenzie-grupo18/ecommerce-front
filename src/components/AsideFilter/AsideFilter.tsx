import React, { useState } from "react";

type Sections = {
  category: boolean;
  colors: boolean;
  sex: boolean;
  size: boolean;
  themes: boolean;
  price: boolean;
};

const AsideFilter: React.FC = () => {
  const [sections, setSections] = useState({
    category: true,
    colors: true,
    sex: true,
    size: false,
    themes: false,
    price: false,
  });

  //   const [showOptions, setShowOptions] = useState(false);

  //   const toggleOptions = () => {
  //     setShowOptions(!showOptions);
  //   };

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

  return (
    <div className="w-[20%] h-full allign  bg-white px-3 py-10">
      <div
        className="text-[18px] font-bold cursor-pointer flex justify-between"
        onClick={() => toggleOptions("category")}
      >
        Category
        <span className="ml-1">{sections.category ? "▲" : "▼"}</span>
      </div>
      {sections.category && (
        <div className="mt-2 flex flex-col gap-2">
          <span>Camisetas</span>
          <span>Acessórios</span>
          <span>Canecas</span>
          <span>Calçados</span>
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
          <span>Preto</span>
          <span>Vermelho</span>
          <span>Cinza</span>
          <span>Branco</span>
          <span>Azul</span>
          <span>Marrom</span>
          <span>Verde</span>
          <span>Roxo</span>
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
          <span>Masculino</span>
          <span>Feminino</span>
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
          <span>PP</span>
          <span>P</span>
          <span>M</span>
          <span>G</span>
          <span>GG</span>
          <span>XG</span>
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
          <span>Animes</span>
          <span>Filmes</span>
          <span>Jogos</span>
          <span>RPG</span>
          <span>Personagens</span>
          <span>Memes</span>
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
