import React from "react";
import Counter from "./Counter";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

const PromotionTime = () => {
  return (
    <div className="max-w-screen[1400px] border-y-zinc-500 mx-auto px-4 mt-4 flex flex-col bg-white justify-center items-center mb-10">
      <div className="flex h-full justify-center items-center">
        <span className="maxsm:hidden mr-8 slide-icon text-[35px]">
          <HiArrowSmRight />
        </span>
        <h4 className="text-[55px] maxsm:text-[40px] maxsm:mt-3 font-bold h-16 font-kenia text-brand1">
          Ofertas Exclusivas
        </h4>
        <span className="maxsm:hidden slide-icon ml-4 maxsm:flex-none text-[35px]">
          <HiArrowSmLeft />
        </span>
      </div>
      <h6 className="text-xl tracking-widest h-4">Não perca tempo!</h6>
      <div className="mt-1">
        <Counter days={5} />
      </div>
      <div className="flex flex-wrap -mx-2 overflow-x-auto whitespace-no-wrap">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2"
          >
            <div className="border-thin pb-3 card cursor-pointer flex items-center flex-col">
              <img
                src="https://m.media-amazon.com/images/I/41rmhM8oA-L._AC_SX385_.jpg"
                alt=""
                className="w-52 h-52"
              />
              <div className="flex flex-col items-center mt-2">
                <h5>Camiseta Aranha</h5>
                <span className="bg-red-200 font-semibold text-red-500 h-7 w-12 rounded-xl text-center">
                  -25%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionTime;
