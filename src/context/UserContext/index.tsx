import { createContext } from "react";
import {userProviderData, userProviderProps } from "./types";

export const UserContext = createContext<userProviderData>({} as userProviderData)

export const UserProvider = ({children}: userProviderProps) => {
 
    
    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )

}