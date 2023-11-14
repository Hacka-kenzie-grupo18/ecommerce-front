import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginType } from "./interfaces/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/login/schemas";
import { AuthContext } from "../../context/AuthContext";


const Login = () => {

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


  const {register, handleSubmit, formState: {errors}} = useForm<LoginType>({resolver: zodResolver(loginSchema)})


  const {login} = useContext(AuthContext)

  const handleSubmitData = (data: LoginType) => {
    console.log(data)
    login(data)
  }
  
    return(
        <main className="w-[100%] h-[100vh]">
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
                <section className="w-[90%] max-w-[400px] h-[500px] h-fit pb-7 bg-white bg-opacity-70 rounded-xl">
                    <div className="w-full h-20% flex items-center mt-4 flex-col">
                        <h1 className="font-kenia text-[50px] mt-8 h-[55px] gradient-text">Cultura Geek</h1>
                        <span className="font-pixelify font-bold">Geeks Life</span>
                        <p className="mt-6 text-sm font-roboto font-bold">LOGIN</p>
                    </div>

                    <form onSubmit={handleSubmit(handleSubmitData)} className="m-8">
                    
                    <fieldset className="relative flex flex-col gap-2 border-none">
                    <label className="font-500 text-[14px] text-[#2563eb]">Email</label>
                    <input
                      {...register("email")}
                      placeholder="Digite seu Email"
                      className="h-12 w-full outline-none bg-whiteFixed text-grey1 rounded-4 border-2 border-grey4 hover:bg-grey9 focus-border-[#2563eb] px-4 font-semibold"
                    />
                    <span className={`error-message text-[15px] ${errors.email?.message ? "block" : "hidden"}`}>
                      {errors.email?.message} 
                    </span>

                   

                   
                    <label className="font-500 text-[14px] text-[#2563eb]">Senha</label>
                    <input
                      {...register("password")}
                      type="password"
                      placeholder="Digite sua senha"
                      className="h-12 w-full outline-none bg-whiteFixed text-grey1 rounded-4 border-2 border-grey4 hover:bg-grey9 focus-border-[#2563eb] px-4 font-semibold"
                    />
                      <span className={`error-message text-[15px] ${errors.password?.message ? "block" : "hidden"}`}>
                      {errors.password?.message} 
                      </span>
                        <button
                          type="submit"
                          className="w-full h-14 bg-blue-600 text-[white] rounded-xl text-[18px] font-bold font-roboto"
                          >
                          ENTRAR
                        </button>
                          
                      </fieldset>
                    </form>

                    <div className="flex justify-center m-4">
                        <p className="text-[17px] mt-4 font-semibold ">Ainda não faz parte?{" "}
                        <Link to={`/register`} className="hover:underline text-blue-600">Clique aqui </Link>e cadastre-se!</p>
                    </div>
                </section>
            </div>
        </main>
        
    )
}

export default Login