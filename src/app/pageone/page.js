
'use client';

import LogoutButton from "../components/logoutButton/logoutButton";
import { Suspense } from 'react'




const pageone = () => {
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1>Página authenthicado</h1>
        <LogoutButton />
      </div>
    </Suspense>
  );
};

export default pageone;
