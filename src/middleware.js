import { NextResponse } from "next/server";

export function middleware(request) {
    const token = request.cookies.get('auth_token'); // Substitua 'auth_token' com o nome do cookie do token
  
    // Se o token não estiver presente, redireciona para a página de login
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  
    // Se o token estiver presente, permite o acesso à rota
    return NextResponse.next();
  }

  export const config = {
    matcher: ['/pageone', '/home'], // Adicione as rotas protegidas aqui
  };