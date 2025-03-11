'use client';

import { useEffect } from "react";
import LogoutButton from "../components/logoutButton/logoutButton";

const pageone = () => {
  useEffect(()=>{
    console.log("... montou a pagina")
  },[])
  return ( 
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1>Página authenthicados</h1>
        <LogoutButton />
      </div>
 
  );
};

export default pageone;
