import React from "react";

const MainProducts = () => {
  return (
    <div className="w-full allign bg-grey200 pt-2 px-2 h-full">
      <div className="w-full h-10 bg-white flex gap-2 items-center px-4">
        <span className="font-bold">10.000</span>
        <p className="text-[15px]">itens encontrados</p>
        <div className="flex">
          <button className="flex bg-grey500 items-center justify-center w-[30px] gap-1 h-[25px] p-1">
            <div className="w-[13px] h-[18px] bg-black"></div>
            <div className="w-[11px] h-[15px] bg-black"></div>
          </button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default MainProducts;
