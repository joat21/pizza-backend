import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const getUserByToken: RequestHandler = async (req, _res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    next();
    return;
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET!) as jwt.JwtPayload;

    if (typeof decoded === 'object' && 'id' in decoded) {
      const user = await prisma.user.findUnique({ where: { id: decoded.id } });

      if (user) {
        req.user = user;
      }
    }
  } catch (error) {
    console.error(error);
  }

  next();
};
