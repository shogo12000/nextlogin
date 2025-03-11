import cookie from 'cookie';
import { serialize } from 'cookie';
export async function POST(req) { 
    const serializedCookie = serialize('auth_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
    maxAge: 0,   
    path: '/',
  });

  return new Response(JSON.stringify({ message: 'Logout realizado com sucesso' }), {
    status: 200,
    headers: {
      'Set-Cookie': serializedCookie,  // Remove o cookie
      'Content-Type': 'application/json',
    },
  });
}