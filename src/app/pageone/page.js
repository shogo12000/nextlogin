
'use client';

import LogoutButton from "../components/logoutButton/logoutButton";





const pageone = () => {
  return ( 
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1>Página authenthicado</h1>
        <LogoutButton />
      </div>
 
  );
};

export default pageone;
