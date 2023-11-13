import React from "react";
import Header from "../../components/Header";
import AsideFilter from "../../components/AsideFilter/AsideFilter";
import MainProducts from "../../components/MainProducts/MainProducts";

const SearchProdutcts = () => {
  return (
    <div>
      <Header />
      <section className="bg-slate-100 h-[2000px] w-full flex">
        <AsideFilter />
        <MainProducts />
      </section>
    </div>
  );
};

export default SearchProdutcts;
