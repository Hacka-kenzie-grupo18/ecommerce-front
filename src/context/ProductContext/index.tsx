import { Dispatch, createContext, useState } from "react";
import { productProviderProps } from "./types";

export const ProductContext = createContext<ProductProvideValues>(
  {} as ProductProvideValues
);

interface ProductProvideValues {
  setButtonClicked: Dispatch<React.SetStateAction<string[]>>;
  buttonClicked: string[];
}

export const ProductProvider = ({ children }: productProviderProps) => {
  const [buttonClicked, setButtonClicked] = useState<string[]>([]);

  return (
    <ProductContext.Provider
      value={{
        setButtonClicked,
        buttonClicked,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
