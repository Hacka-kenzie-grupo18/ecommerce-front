import { createContext } from "react"
import { authProviderData, authProviderProps } from "./types"

export const AuthContext = createContext<authProviderData>({} as authProviderData)

export const AuthProvider = ({children}: authProviderProps) => {
 
    
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )

}