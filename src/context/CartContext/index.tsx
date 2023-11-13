import { createContext } from "react"
import { cartProviderData, cartProviderProps } from "./types"

export const CartContext = createContext<cartProviderData>({} as cartProviderData)

export const CartProvider = ({children}: cartProviderProps) => {
 
    
    return (
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )

}