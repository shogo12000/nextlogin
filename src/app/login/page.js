'use client';

import LoginForm from "../components/loginform/loginForm";

 

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1>Página Login</h1>
      <LoginForm  />
    </div>
  );
};

export default Login;