import jwt from 'jsonwebtoken';

export const signToken = (payload: jwt.JwtPayload) =>
  jwt.sign(
    {
      id: payload.id,
      role: payload.role,
    },
    process.env.JWT_SECRET!,
    { expiresIn: '30d' }
  );
