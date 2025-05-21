import { RequestHandler } from 'express';
import { prisma } from '../prismaClient';

export const getAll: RequestHandler = async (_req, res, next) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { order: 'asc' },
    });

    res.json(categories);
  } catch (error) {
    next(error);
  }
};
