import { useState, useEffect } from "react";
import FormRegister from "./formRegister/FormRegister";
import { Link } from "react-router-dom";

const Register = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

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
            Cultura Geek
            </h1>
            <span className="font-pixelify font-bold">Geeks Life</span>
          </div>

          <FormRegister />
          <div className="flex justify-center">
            <p className="text-[17px] mt-4 font-semibold ">
              Você já faz parte da nossa família?{" "}
              <Link to={`/login`} className="hover:underline text-blue-600">
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
