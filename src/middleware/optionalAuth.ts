import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

export const optionalAuth: RequestHandler = (req, _res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return next();
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as jwt.JwtPayload;

    if (typeof decoded === 'object' && 'id' in decoded) {
      req.user = { id: decoded.id };
    }
  } catch (error) {
    console.log(error);
  }

  next();
};
