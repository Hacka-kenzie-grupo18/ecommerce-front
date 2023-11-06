import { useState, useEffect, ChangeEvent } from "react";
import FormRegister from "./formRegister/FormRegister";
import { Link } from "react-router-dom";

const Register = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [selectedOption, setSelectedOption] = useState("true");

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    const images = [
      "../../../src/assets/foto1.jpg",
      "../../../src/assets/foto2.jpg",
      "../../../src/assets/foto3.jpg",
      "../../../src/assets/foto4.jpg",
      "../../../src/assets/foto5.jpg",
      "../../../src/assets/foto6.jpg",
      "../../../src/assets/foto7.jpg",
      "../../../src/assets/foto8.jpg",
      "../../../src/assets/foto9.jpg",
      "../../../src/assets/foto10.jpg",
      "../../../src/assets/foto11.jpg",
      "../../../src/assets/foto12.jpg",
      "../../../src/assets/foto13.jpg",
      "../../../src/assets/foto14.jpg",
      "../../../src/assets/foto15.jpg",
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    setBackgroundImage(images[randomIndex]);
  }, []);

  return (
    <main className="">
      <div
        className="flex justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
          paddingBottom: "25px",
          paddingTop: "25px",
        }}
      >
        <section className="w-[90%] max-w-[450px] h-fit pb-7 bg-white bg-opacity-70 rounded-xl">
          <div className="w-full h-20% flex items-center mt-4 flex-col">
            <h1 className="font-kenia text-[50px] m-0 h-[55px] gradient-text">
              Hacka Kenzie
            </h1>
            <span className="font-pixelify font-bold">Geeks Life</span>
          </div>
          <div className="px-[30px] mt-4">
            <p className="text-sm mb-[16px] font-roboto  font-bold">
              Tipo de conta
            </p>
            <div className="flex gap-4 justify-center">
              <label
                className={`flex items-center rounded h-[48px] w-[100%] ${
                  selectedOption === "false" ? "bg-blue-600 text-white" : " "
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  name="userType"
                  value="false"
                  checked={selectedOption === "false"}
                  onChange={handleOptionChange}
                />
                <div className="border-2 border-grey3 text-[16px]  h-[48px] w-[100%] font-bold rounded-md px-4 py-2 cursor-pointer flex justify-center items-center">
                  Fornecedor
                </div>
              </label>
              <label
                className={`flex items-center rounded h-[48px] w-[100%] ${
                  selectedOption === "true" ? "bg-blue-600 text-white" : " "
                }`}
              >
                <input
                  type="radio"
                  className="hidden"
                  name="userType"
                  value="true"
                  checked={selectedOption === "true"}
                  onChange={handleOptionChange}
                />
                <div className="border-2 border-grey3 text-[16px]  h-[48px] w-[100%] font-bold rounded-md px-4 py-2 cursor-pointer flex justify-center items-center">
                  Comprador
                </div>
              </label>
            </div>
          </div>
          <FormRegister />
          <div className="flex justify-center">
            <p className="text-[17px] mt-4 font-semibold ">
              Você já faz parte da nossa família?{" "}
              <Link to={`/`} className="hover:underline text-blue-600">
                Clique aqui!
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;
