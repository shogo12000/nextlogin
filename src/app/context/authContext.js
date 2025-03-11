'use client';
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();
    
    const checkAuth = async()=>{
        const response = await (await fetch("/api/auth/checkToken")).json();
        setIsAuthenticated(response.token);
 
        router.push('/login');
    }
    
    useEffect(()=>{
        const interval = setInterval(checkAuth, 3000);
        return ()=> clearIntervale(interval);
    },[])
    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}