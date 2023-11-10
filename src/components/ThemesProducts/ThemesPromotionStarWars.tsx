import React from "react";
import { productStarWars } from "../../mock/products";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

const ThemesPromotionStarWars = () => {
  return (
    <div className="max-w-[1400px] border-y-sky-600 border-2 mx-auto px-4 flex bg-white justify-center items-center h-64">
      <div
        className="h-full w-[50%]"
        style={{
          backgroundImage:
            "url(https://cdn.awsli.com.br/600x700/222/222813/produto/112901042/fce8627233.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full flex justify-center flex-col items-center gap-10">
          <h3 className="text-white animation-star-wars font-extrabold text-[50px] font-kenia flex flex-col justify-center items-center gradient-star-wars">
            <span className="text-[22px] text-white">Produtos</span> Star Wars
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap h-full">
        {productStarWars.map((product: Product) => (
          <div
            key={product.id}
            className="w-60 h-[50%] bg-white border-thin flex justify-center flex-col items-center"
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
