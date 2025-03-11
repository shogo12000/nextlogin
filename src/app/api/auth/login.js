import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cookie from 'cookie-parser'

const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';

const usersDB = [
    {
        email: 'user@example.com',
        password: bcrypt.hashSync('password123', 10), // Senha criptografada
    },
];

const generateToken = (email) => {
    const payload = { email };
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Token expira em 1 hora
};

export default async function handler(req, res) {
    // if (req.method === 'POST') {
    //   const { email, password } = req.body;
  
    //   // Verificar se o usuário existe no banco de dados simulado
    //   const user = usersDB.find((u) => u.email === email);
  
    //   if (!user) {
    //     return res.status(401).json({ message: 'Credenciais inválidas!' });
    //   }
  
    //   // Comparar a senha usando bcrypt
    //   const isMatch = await bcrypt.compare(password, user.password);
  
    //   if (!isMatch) {
    //     return res.status(401).json({ message: 'Credenciais inválidas!' });
    //   }
  
    //   // Gerar o token JWT
    //   const token = generateToken(email);
  
    //   // Configurar o cookie HttpOnly para o token
    //   res.setHeader('Set-Cookie', cookie.serialize('auth_token', token, {
    //     httpOnly: true,  // Não acessível via JavaScript
    //     secure: process.env.NODE_ENV === 'production', // Só em produção com HTTPS
    //     sameSite: 'Strict', // Protege contra CSRF
    //     maxAge: 60 * 60, // 1 hora de expiração
    //     path: '/', // Disponível em todo o site
    //   }));
  
    //   // Retornar uma mensagem de sucesso
    //   return res.status(200).json({ message: 'Login bem-sucedido!' });
    // }
  
    return res.status(405).json({ message: 'Método não permitido' });
  }