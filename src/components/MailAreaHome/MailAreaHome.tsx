import React from "react";
import { FiMail } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
const MailAreaHome = () => {
  return (
    <div className=" allign w-full background-animated flex first-letter:first-line: h-[420px] maxsm:flex maxsm:justify-center maxsm:items-center bg-black">
      <div className=" w-[45%] flex flex-col maxsm:hidden justify-center items-center gap-12">
        <h3 className="text-[55px]  font-kenia flex items-center gap-4 font-bold text-white">
          <span className="text-[30px]">
            <FiMail />
          </span>{" "}
          Contate-nos
          <span className="text-[30px]">
            <HiOutlineMailOpen />
          </span>{" "}
        </h3>
        <h5 className="text-[25px] text-yellow-400 px-7 font-semibold text-center">
          Mande uma mensagem para os nossos fornecedores
        </h5>
      </div>
      <div className="w-[55%] maxsm:w-full maxsm:flex maxsm:justify-center h-full py-6">
        <form className="w-[80%] h-full  bg-white flex-col justify-center items-center flex p-5 rounded-xl">
          <h3 className="lg:text-[15px] maxsm:text-[12px] xl:text-[20px]  font-bold mb-3">
            A melhor parceria é um contato direto
          </h3>
          <input
            type="email"
            className="w-[90%] py-2 px-4 rounded border-thin bg-grey7"
            placeholder="Digite seu melhor email"
          />
          <textarea
            name="text"
            id=""
            className="textarea-mail border-thin"
            placeholder="Digite sua mensagem"
          ></textarea>
          <div className="w-full flex justify-center mt-5">
            <button className="h-10 background-bt-gradient font-bold text-[20px] text-white flex justify-center items-center w-48 p-3 rounded-lg bg-red-500">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MailAreaHome;
