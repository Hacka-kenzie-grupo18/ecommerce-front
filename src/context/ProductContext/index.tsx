import { Dispatch, createContext, useState } from 'react'
import { productProviderProps, productsProps } from './types'

export const ProductContext = createContext<ProductProvideValues>(
  {} as ProductProvideValues
)

interface ProductProvideValues {
  setButtonClicked: Dispatch<React.SetStateAction<string[]>>
  buttonClicked: string[]
  cart: productsProps[]
  setCart: Dispatch<React.SetStateAction<productsProps[]>>
  addToCart: (product: productsProps) => void
}

export const ProductProvider = ({ children }: productProviderProps) => {
  const [buttonClicked, setButtonClicked] = useState<string[]>([])
  const [cart, setCart] = useState<productsProps[]>([])

  const addToCart = (product: productsProps) => {
    setCart((prevCart) => [...prevCart, product])
  }

  return (
    <ProductContext.Provider
      value={{
        setButtonClicked,
        buttonClicked,
        cart,
        setCart,
        addToCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
