import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import connectDB from '@/app/db/db';
import User from '@/models/User'
import bcrypt from 'bcryptjs' 

export async function GET() {
    return Response.json({ message: 'GET request to /api/teste' });}

export async function POST(req) {
    await connectDB();

    try {
        const { username, email, password } = await req.json();  

        if (!email || !password) {
            return new Response(JSON.stringify({ message: 'Email e senha são obrigatórios' }), { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            return new Response(JSON.stringify({ message: 'Usuário já cadastrado' }), { status: 400 });
        }

        // Hash da senha antes de salvar
        const hashedPassword = await bcrypt.hash(password, 10);

        // Criar novo usuário
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        return new Response(JSON.stringify({ message: 'Usuário cadastrado com sucesso!' }), { status: 201 });
    } catch (error) {
        console.error('Erro no registro:', error);
        return new Response(JSON.stringify({ message: 'Erro interno do servidor' }), { status: 500 });
    }
}