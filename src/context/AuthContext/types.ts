import React from "react"
import { LoginType } from "../../pages/Login/interfaces/types"

export interface authProviderData  {
    login: (data: LoginType) => Promise<void>
}

export interface authProviderProps{
    children: React.ReactNode
}