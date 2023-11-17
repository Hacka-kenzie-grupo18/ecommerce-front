import React, { ChangeEvent, useState } from "react";
import CardInfosAdmin from "./CardInfosAdmin";

const MainAdmin = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main className="h-full w-full bg-white flex items-center flex-col pt-6">
      <div className=" h-10 mb-8">
        <input
          type="text"
          placeholder="Pesquise o produto"
          className="maxsm:w-[230px] h-full pl-3  rounded-lg border-2 border-black w-[350px]  bg-grey200"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <section className="bg-grey200 justify-center flex border-2 border-black rounded-xl gap-4 flex-wrap h-[600px] overflow-auto w-[80%] p-3">
        <CardInfosAdmin search={searchTerm} />
      </section>
    </main>
  );
};

export default MainAdmin;
