import { createContext, useEffect, useState } from 'react'
import { cartProviderData, cartProviderProps } from './types'

export const CartContext = createContext<cartProviderData>(
  {} as cartProviderData
)

export const CartProvider = ({ children }: cartProviderProps) => {
  const [isScreenSmall, setIsScreenSmall] = useState(false)
  const [tabIsOpen, setTabIsOpen] = useState(false)

  const tabDeleteAndSave = () => {
    setTabIsOpen(!tabIsOpen)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 760px)')
    setIsScreenSmall(mediaQuery.matches)

    const mediaQueryListener = (event: MediaQueryListEvent) => {
      setIsScreenSmall(event.matches)
    }

    mediaQuery.addListener(mediaQueryListener)

    return () => {
      mediaQuery.removeListener(mediaQueryListener)
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        tabDeleteAndSave,
        isScreenSmall,
        tabIsOpen,
        setTabIsOpen,
        setIsScreenSmall,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
