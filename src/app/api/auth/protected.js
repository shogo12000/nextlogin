import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const token = req.cookies.auth_token;

    if (!token) {
      return res.status(401).json({ message: 'Token não encontrado!' });
    }

    try {
      // Verificar o token
      const decoded = jwt.verify(token, SECRET_KEY);

      // Se o token for válido, retornar uma resposta protegida
      return res.status(200).json({ message: 'Conteúdo protegido acessado com sucesso!', user: decoded.email });
    } catch (error) {
      return res.status(401).json({ message: 'Token inválido ou expirado!' });
    }
  }

  return res.status(405).json({ message: 'Método não permitido' });
}
