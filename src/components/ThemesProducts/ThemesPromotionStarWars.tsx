import React, { useEffect, useState } from "react";
import { productStarWars } from "../../mock/products";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

const ThemesPromotionStarWars = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-[1400px] border-y-sky-600 border-2 mx-auto px-4 flex bg-white justify-center items-center h-64 mt-10">
      <div
        className="h-full w-[70%] maxsm:w-full"
        style={{
          backgroundImage:
            "url(https://cdn.awsli.com.br/600x700/222/222813/produto/112901042/fce8627233.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full flex justify-center flex-col items-center gap-20">
          <h3 className="text-white animation-star-wars font-extrabold text-[50px] font-kenia flex flex-col justify-center items-center gradient-star-wars">
            Star Wars
          </h3>
          <button className="w-40 h-14 background-bt-gradient text-white border-thin rounded-xl font-bold text-[20px] ">
            Veja mais
          </button>
        </div>
      </div>
      <div className="flex flex-wrap h-full">
        {productStarWars.map((product: Product, index: number) => (
          <div
            key={product.id}
            className={`w-52 h-[50%] bg-white border-thin  cursor-pointer  flex justify-center flex-col items-center`}
            style={{
              display:
                (index >= 6 && windowWidth < 1400) ||
                (index >= 4 && windowWidth < 1000) ||
                (index >= 0 && windowWidth < 768)
                  ? "none"
                  : "flex",
            }}
          >
            <img src={product.imageUrl} alt="" className="w-[33%] h-[50%]" />
            <h5 className="mt-2 font-semibold ">{product.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemesPromotionStarWars;
