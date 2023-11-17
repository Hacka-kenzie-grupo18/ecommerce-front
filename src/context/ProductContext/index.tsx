import { Dispatch, SetStateAction, createContext, useState } from "react";
import { productProviderProps } from "./types";
import { IProducts } from "../../interfaces/products";

export const ProductContext = createContext<ProductProvideValues>(
  {} as ProductProvideValues
);

interface ProductProvideValues {
  setButtonClicked: Dispatch<SetStateAction<string[]>>;
  buttonClicked: string[];
  sortDirection: "asc" | "desc";
  setSortDirection: Dispatch<SetStateAction<"asc" | "desc">>;
  sortFunction: ((a: IProducts, b: IProducts) => number) | null;
  sortAsc: (a: IProducts, b: IProducts) => number;
  sortDesc: (a: IProducts, b: IProducts) => number;
  setSortFunction: Dispatch<
    SetStateAction<((a: IProducts, b: IProducts) => number) | null>
  >;
}

export const ProductProvider = ({ children }: productProviderProps) => {
  const [buttonClicked, setButtonClicked] = useState<string[]>([]);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [sortFunction, setSortFunction] = useState<
    ((a: IProducts, b: IProducts) => number) | null
  >(null);
  const sortAsc: (a: IProducts, b: IProducts) => number = (a, b) => {
    if (!a || !b || !a.stock || !b.stock) {
      return 0;
    }

    return a.stock - b.stock;
  };

  const sortDesc: (a: IProducts, b: IProducts) => number = (a, b) => {
    const stockA = Number(a.stock);
    const stockB = Number(b.stock);

    return stockB - stockA;
  };

  return (
    <ProductContext.Provider
      value={{
        setButtonClicked,
        buttonClicked,
        sortDirection,
        setSortDirection,
        sortFunction,
        sortAsc,
        sortDesc,
        setSortFunction,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
