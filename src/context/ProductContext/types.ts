import React from 'react'

export interface productProviderData {}

export interface productProviderProps {
  children: React.ReactNode
}

export interface productsProps {
  id: string
  name: string
  price: number
  size: string
  color: string
}
