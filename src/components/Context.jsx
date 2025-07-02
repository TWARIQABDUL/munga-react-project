import {createContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
export const AuthContext = createContext()

const AuthProvider = ({children})=>{
    const [user, setUser] = useState()
    const navigate = useNavigate()
    useEffect(()=>{
        if (!localStorage.getItem("user")) {
        navigate("/register")
        console.log("no user found, redirecting to register");
    }
    else{
        setUser(JSON.parse(localStorage.getItem("user")))
    }
    },[])
    
    return(
        <AuthContext.Provider value={{user: user}} >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
