import React from "react";
import CardInfosAdmin from "./CardInfosAdmin";

const MainAdmin = () => {
  return (
    <main className="h-full w-full bg-white flex items-center flex-col pt-6">
      <div className="w-[30%] h-10 mb-8">
        <input
          type="text"
          placeholder="Pesquise o produto"
          className="w-full h-full pl-3 rounded-lg border-2 border-black  bg-grey200"
        />
      </div>
      <section className="bg-grey200 justify-center flex border-2 border-black rounded-xl gap-4 flex-wrap h-[600px] overflow-auto w-[80%] p-3">
        <CardInfosAdmin />
      </section>
    </main>
  );
};

export default MainAdmin;
