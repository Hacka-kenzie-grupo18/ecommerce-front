import React from "react"
import { LoginType } from "../../pages/Login/interfaces/types"
import { UserRequestType } from "../../pages/RegisterPage/interfaces/register"

export interface authProviderData  {
    login: (data: LoginType) => Promise<void>
    registerUser: (data: UserRequestType) => Promise<void>
}

export interface authProviderProps{
    children: React.ReactNode
}