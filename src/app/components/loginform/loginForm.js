
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { AuthContext } from '@/app/context/authContext';
import { useContext } from 'react';

const LoginForm = ( ) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuthenticated } = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/auth/login",{
      method: "POST",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify({ email:email, password: password })
    })
    console.log("...............");
    console.log(response);
    if(response.ok){
      setIsAuthenticated(true);
      redirect('/pageone');
    }else {
      console.log("tratae erro")
    }
 
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
          required
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
          required
        />
      </div>
      <button type="submit" className="bg-gray-400 px-4">
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
