import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const signToken = (id: string, role: string) =>
  jwt.sign(
    {
      id,
      role,
    },
    process.env.JWT_SECRET!,
    { expiresIn: '30d' }
  );
