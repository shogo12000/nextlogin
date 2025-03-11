import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import connectDB from '@/app/db/db';
import User from '@/models/User'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server';

const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';

const generateToken = (email) => {
    const payload = { email };
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Token expira em 1 hora
};

export async function GET() {
    return Response.json({ message: 'GET request to /api/teste' });
}

export async function POST(req) {
    await connectDB();

    const { email, password } = await req.json();
 
    const user = await User.findOne({ email });

    if (!user) {
        return new Response(JSON.stringify({ message: 'Usuário não encontrado' }), { status: 401 });
    }
    console.log("passou aqui ........");
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return new Response(JSON.stringify({ message: 'Credenciais inválidas' }), { status: 401 });
    }

    const token = generateToken(email);
    console.log("gerado token.....")
    const serializedCookie = cookie.serialize('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        maxAge: 60 ,  
        path: '/',
    });

    const response = NextResponse.json({ success: true, token });

    // Adicionando o cookie à resposta
    response.headers.set("Set-Cookie", serializedCookie);
    return response;

    // return new Response(JSON.stringify({ message: 'POST request to /api/teste' }), {
    //     status: 200,
    //     headers: {
    //         'Set-Cookie': serializedCookie,   
    //         'Content-Type': 'application/json',
    //     },
    // });
}