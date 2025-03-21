 'use client';
import Link from "next/link"
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/app/context/authContext'
 

const Nav = () => {
    const { isAuthenticated } = useContext(AuthContext);
    
    useState(()=>{
        console.log("foi mudado")
    },[{isAuthenticated}])
    return (
        <div className="w-full  p-3 bg-amber-200 flex gap-3">
            <Link href="/">Home</Link>
            <Link href="/login">login</Link> 
            {isAuthenticated && <Link href="/pageone">Page One</Link> }
   
        </div>
    )
}

export default Nav