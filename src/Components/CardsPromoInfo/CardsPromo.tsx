import React from "react";

const CardsPromoInfo = () => {
  return (
    <div
      className="h-72 allign max-w-[1400px] border-y-2 rounded-4 border-black bg-red-500 flex justify-between maxsm:hidden"
      style={{
        backgroundImage:
          "url(https://cdn.leonardo.ai/users/a08cfa3d-85e3-4580-ba8a-e5640b7837cb/generations/f762f4f1-5fb3-49d8-9f89-fc9b1015c622/Leonardo_Diffusion_XL_neon_colours_a_translucent_spheres_trap_1.jpg?w=512)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[28%] justify-center flex items-center h-full">
        <img
          src="https://media.giphy.com/media/zQhFEBrX6plKg/giphy.gif"
          alt=""
          className="rounded-full w-[220px]  shadow-gif"
        />
      </div>
      <div className="h-full py-16 w-[44%] flex items-center flex-col justify-between">
        <h2 className="text-[62px] maxsm:text-[40px] highlight-text font-kenia font-bold leading-none lg:text-[45px] gradient-promo-podcast text-center ">
          Conheça nosso Podcast
        </h2>

        <button className="background-bt-gradient text-white font-bold w-52 h-12 text-[20px] rounded-xl  bg-white">
          Clique aqui
        </button>
      </div>
      <div className="w-[28%] h-full justify-center items-center flex flex-col gap-6">
        <img
          src="https://i.pinimg.com/originals/8f/11/5d/8f115de7d4a8952b8f321f1d148a36da.gif"
          className="w-[250px] rounded-full shadow-gif"
          alt=""
        />
        <img
          src="https://i.gifer.com/YabR.gif"
          alt=""
          className="w-[250px] rounded-full shadow-gif"
        />
      </div>
    </div>
  );
};

export default CardsPromoInfo;
