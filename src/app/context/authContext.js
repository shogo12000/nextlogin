'use client';
import { createContext, useEffect, useState } from "react";
import { redirect } from "next/navigation";
export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const checkAuth = async()=>{
        const response = await (await fetch("/api/auth/checkToken")).json();
        setIsAuthenticated(response.token);
        console.log(response.token)
        if(!response.token) redirect("/")
    }
    
    useEffect(()=>{
        const interval = setInterval(checkAuth, 30000);
        return ()=> clearIntervale(interval);
    },[])
    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}