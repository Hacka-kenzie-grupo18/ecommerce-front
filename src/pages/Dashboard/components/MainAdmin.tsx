import { ChangeEvent, useEffect, useState } from "react";
import CardInfosAdmin from "./CardInfosAdmin";

const MainAdmin = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const images = [
      "../../../src/assets/foto1.jpg",
      "../../../src/assets/foto2.jpg",
      "../../../src/assets/foto3.jpg",
      "../../../src/assets/foto4.jpg",
      "../../../src/assets/foto10.jpg",
      "../../../src/assets/foto11.jpg",
      "../../../src/assets/foto12.jpg",
      "../../../src/assets/foto13.jpg",
      "../../../src/assets/foto14.jpg",
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    setBackgroundImage(images[randomIndex]);
  }, []);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main className="h-full w-full bg-white flex items-center flex-col">
      <div
        className="flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
          paddingBottom: "25px",
        }}
      >
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
      </div>
    </main>
  );
};

export default MainAdmin;
