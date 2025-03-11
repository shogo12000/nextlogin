'use client';

import { useState } from "react";
import LoginForm from "../components/loginform/loginForm";
import Loading from "./loading";

const Login = () => {
  const [loading, setLoading] = useState(false);
  
  if(loading){
    return (
      <Loading />
    )
  }
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1>Página Login</h1>
      <LoginForm  handleForm={setLoading}/>
    </div>
  );
};

export default Login;