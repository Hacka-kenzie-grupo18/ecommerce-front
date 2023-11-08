import imgPromo from "../../assets/homeImages/foto1.jpg";
const HeaderPromotion = () => {
  return (
    <div className="h-[410px] w-full bg-white mt-[15px] p-4 flex border-grey6  rounded border-2">
      <div className="flex flex-col gap-4 justify-center px-2 w-[20%]">
        <button className="text-left font-roboto font-semibold text-grey2 hover:bg-brand2 rounded px-2 py-1">
          Animes
        </button>
        <button className="text-left font-roboto font-semibold text-grey2 hover:bg-brand2 rounded px-2 py-1">
          Star Wars
        </button>
        <button className="text-left font-roboto font-semibold text-grey2 hover:bg-brand2 rounded px-2 py-1">
          Game of Thrones
        </button>
        <button className="text-left font-roboto font-semibold text-grey2 hover:bg-brand2 rounded px-2 py-1">
          Jogos
        </button>
        <button className="text-left font-roboto font-semibold text-grey2 hover:bg-brand2 rounded px-2 py-1">
          Animais e Pets
        </button>
        <button className="text-left font-roboto font-semibold text-grey2 hover:bg-brand2 rounded px-2 py-1">
          RPG's
        </button>
        <button className="text-left font-roboto font-semibold text-grey2 hover:bg-brand2 rounded px-2 py-1">
          Mundo Tech
        </button>
        <button className="text-left font-roboto font-semibold text-grey2 hover:bg-brand2 rounded px-2 py-1">
          Personagens
        </button>
      </div>
      <div className="w-[55%] ml-2 justify-center items-center ">
        <div
          style={{
            backgroundImage: `url(${imgPromo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        >
          <div className="flex justify-end items-end w-[85%] h-[60%] flex-col ">
            <h2 className="font-kenia text-white font-bold text-right text-[60px] h-[64px] gradient-text-top">
              TRENDING
            </h2>
            <h3 className="font-roboto text-[25px]  bg-white bg-opacity-30 px-[4px] font-bold my-1 text-brand1 tracking-widest text-shadow-md">
              {" "}
              Personalizadas
            </h3>
            <button className="h-12 w-40 bg-brand4 rounded-xl font-roboto font-semibold bg-gradient-to-r from-brand4 via-random2 to-transparent text-white text-[13px] mt-5">
              VENHA CONHECER!
            </button>
          </div>
        </div>
      </div>
      <div className="w-[23%] ml-2  gap-2 flex flex-col">
        <div className="h-[40%] w-full bg-brand2 rounded-xl pt-2 flex-col flex gap-2">
          <div className="flex h-1/3 items-center justify-center gap-3 pl-3">
            <img
              src="../../../src/assets/foto1.jpg"
              alt=""
              className="w-[50px] h-10 rounded-full"
            />

            <h5 className="text-[16px] font-semibold text-grey2 w-[65%] font-roboto">
              Hi user, let's get started
            </h5>
          </div>
          <div className="flex justify-center flex-col px-3 ">
            <button className="h-9 w-full bg-brand1 rounded-2xl text-white font-semibold mb-1">
              Join now
            </button>
            <button className="h-9 w-full bg-white rounded-2xl border-[2px] text-brand1 font-semibold mb-1">
              Log in
            </button>
          </div>
        </div>
        <button className="h-[29%] w-full bg-orange-500 rounded-xl flex justify-center items-center text-[18px] px-6  text-white ">
          <h5>Get US $10 off with a new supplier</h5>
        </button>
        <button className="h-[29%] w-full bg-random4 rounded-xl flex justify-center items-center text-[18px] px-6 text-white">
          <h5>Send quotes with supplier preferences</h5>
        </button>
      </div>
    </div>
  );
};

export default HeaderPromotion;
