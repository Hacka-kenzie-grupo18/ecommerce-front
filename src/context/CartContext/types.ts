import React from 'react'

export interface cartProviderData {
  isScreenSmall: boolean
  setIsScreenSmall: React.Dispatch<React.SetStateAction<boolean>>
  tabIsOpen: boolean
  setTabIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  tabDeleteAndSave: () => void
}

export interface cartProviderProps {
  children: React.ReactNode
}
