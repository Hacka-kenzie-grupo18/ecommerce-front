import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const useProduct = () => {
  const prodContext = useContext(ProductContext);

  return prodContext;
};
