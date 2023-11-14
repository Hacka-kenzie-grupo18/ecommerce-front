import { createContext } from "react"
import { authProviderData, authProviderProps } from "./types"
import { LoginType } from "../../pages/Login/interfaces/types"
import { api } from "../../services/api"
import { toast } from "react-toastify"


export const AuthContext = createContext<authProviderData>({} as authProviderData)

export const AuthProvider = ({children}: authProviderProps) => {



     const login = async(data:LoginType) => {
        try {
            const response = await api.post("login", data)
            if(response){
                localStorage.setItem("@TOKEN_ECOMMERCE", response.data.token)
                toast.success("Seja bem vindo!")
               
            }
        } catch (error) {
            toast.error("Ocorreu um erro, tente novamente!")
            console.log(error)
        }
    }
 
    
    return (
        <AuthContext.Provider value={{login}}>
            {children}
        </AuthContext.Provider>
    )

}