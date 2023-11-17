import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";

interface CardProps {
  id: number;
  name: string;
  color: string;
  size?: string[];
  price: string;
  theme: string;
  image: string;
  rating: string;
  sex?: string;
  description: string;
  active: boolean;
}

const CardsProducts = ({
  name,
  color,
  price,
  theme,
  image,
  sex,
  rating,
  description,
  active,
}: CardProps) => {
  const getThemeColorClass = (color: string): string => {
    switch (color.toLowerCase()) {
      case "azul":
        return "text-primary border-b-primary";
      case "preto":
        return "text-black border-b-black";
      case "vermelho":
        return "text-red-500 border-b-red-500";
      case "verde":
        return "text-green-500 border-b-green-500";
      case "rosa":
        return "text-pink-500 border-b-pink-500";
      case "amarelo":
        return "text-yellow-500 border-b-yellow-500";
      case "branco":
        return "text-grey600 border-b-grey300";
      case "roxo":
        return "text-indigo-500 border-b-indigo-500";
      default:
        return "text-black border-b-grey300";
    }
  };
  const themeColorClass = getThemeColorClass(color);

  const cardClass = active ? " h-[250px]" : "w-[250px] h-[400px]";

  return (
    <>
      {active ? (
        <Link
          to={"/dashboard"}
          className={`flex ${cardClass} mt-4  rounded-xl bg-white border-thin`}
        >
          <div
            className={`h-full overflow-hidden w-[300px]`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="w-full h-9 flex flex-col">
            <div
              className={`justify-center w-full flex h-9 border-b-[1px] maxsm:text-[13px] items-center ${themeColorClass} text-[20px] font-bold`}
            >
              <h3>{name}</h3>
            </div>
            <div className="mt-4 ml-3 border-thin rounded-xl maxsm:text-[13px] w-fit flex text-[25px]">
              <h4 className="px-2">R${price}</h4>
              <span className="h-full w-[2px] bg-grey400 "></span>
              <div className="text-[12px] font-bold text-blue-700 rounded-r-xl pr-2 bg-sky-200 pl-2 h-full flex justify-center w-full items-center">
                <h4>CUPOM</h4>
              </div>
            </div>
            <div className="pl-4 gap-2 flex items-center">
              <StarRating rating={parseFloat(rating)} />
              <p className="text-[12px] font-bold text-orange-500">{rating}</p>
            </div>
            <div className="flex gap-4 maxsm:pl-2 maxsm:text-[11px] pl-4">
              <h6 className="px-2 bg-orange-200 rounded font-bold">{theme}</h6>
              <h6 className="px-2 bg-orange-200 rounded font-bold">{color}</h6>
              <h6 className="px-2 bg-orange-200 rounded font-bold">{sex}</h6>
            </div>
            <div className="px-4">
              <p className="font-bold overflow-hidden line-clamp-2 maxsm:text-[11px]">
                Descrição: <span className="font-400">{description}</span>
              </p>
            </div>
            <div className="w-full flex justify-center mt-2">
              <button className="text-blue-700"> Mais informações...</button>
            </div>
          </div>
        </Link>
      ) : (
        <Link
          to={"/dashboard"}
          className={`flex ${cardClass} mt-4 mr-4 rounded-xl maxsm:w-[200px] bg-white border-thin`}
        >
          <div className="flex flex-col w-full">
            <div
              className="h-[200px] w-full flex justify-center items-center p-2"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="w-full h-9 mt-4 flex flex-col">
              <div
                className={`justify-center w-full flex h-9  items-center ${themeColorClass} text-[18px] maxsm:text-[12px] font-bold`}
              >
                <h3>{name}</h3>
              </div>
              <div className="mt-4 ml-3 border-thin rounded-xl  w-fit flex text-[15px]  maxsm:text-[12px]">
                <h4 className="px-2">R${price}</h4>
                <span className="h-full w-[2px] bg-grey400 "></span>
                <div className="text-[12px] font-bold text-blue-700 rounded-r-xl pr-2 bg-sky-200 pl-2 h-full flex justify-center w-full items-center">
                  <h4>CUPOM</h4>
                </div>
              </div>
              <div className="pl-4  gap-2 flex items-center">
                <StarRating rating={parseFloat(rating)} />
                <p className="text-[12px] font-bold text-orange-500">
                  {rating}
                </p>
              </div>
              <div className="flex gap-4 pl-4 maxsm:pl-3">
                <h6 className="px-1 bg-orange-200 text-[12px] rounded flex justify-center items-center font-bold">
                  {theme}
                </h6>
                <h6 className="px-2 maxsm:px-0 bg-orange-200 text-[12px] rounded font-bold">
                  {color}
                </h6>
                <h6 className="px-2 maxsm:px-0 bg-orange-200 text-[12px] rounded font-bold">
                  {sex}
                </h6>
              </div>
              <div className="w-full flex justify-center mt-4">
                <button className="text-blue-700"> Mais informações...</button>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default CardsProducts;
