import { RequestHandler } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const getAll: RequestHandler = async (_req, res) => {
  const categories = await prisma.category.findMany({
    orderBy: { order: 'asc' },
  });

  res.json(categories);
};
