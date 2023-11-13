import { createContext } from "react";
import { productProviderData, productProviderProps } from "./types";

export const ProductContext = createContext<productProviderData>({} as productProviderData)

export const ProductProvider = ({children}: productProviderProps) => {
 
    
    return (
        <ProductContext.Provider value={{}}>
            {children}
        </ProductContext.Provider>
    )

}