import { createContext } from "react"
import { authProviderData, authProviderProps } from "./types"
import { LoginType } from "../../pages/Login/interfaces/types"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { UserRequestType } from "../../pages/RegisterPage/interfaces/register"
import { useNavigate } from "react-router-dom"


export const AuthContext = createContext<authProviderData>({} as authProviderData)

export const AuthProvider = ({children}: authProviderProps) => {

    const navigate = useNavigate()

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


    const registerUser = async (data:UserRequestType) => {
        try {
            const response = await api.post("user", data)

            if(response){
                toast.success("Conta criada com sucesso!")
                navigate("/login")
            }
        } catch (error) {
            console.log(error)
            toast.error("Ocorreu um erro, tente novamente!")
        }
    }
 
    
    return (
        <AuthContext.Provider value={{login, registerUser}}>
            {children}
        </AuthContext.Provider>
    )

}