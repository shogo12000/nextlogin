import { redirect } from 'next/navigation';
import { AuthContext } from '@/app/context/authContext';
import { useContext } from 'react';

const LogoutButton = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setIsAuthenticated(false);
        // Redireciona o usuário para a página de login ou outra página após o logout
        redirect('/login');
      } else {
        console.log('Erro ao fazer logout');
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return <button onClick={handleLogout}>Sair</button>;
};

export default LogoutButton;