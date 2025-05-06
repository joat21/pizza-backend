import { Response, Request } from 'express';
import { PrismaClient } from '../generated/prisma';

import { parseSortParam } from '../helpers/parseSortParam';

const prisma = new PrismaClient();

export const getAll = async (
  req: Request<any, any, any, { categoryId: string; sortBy: string }>,
  res: Response
) => {
  const { categoryId, sortBy } = req.query;

  const orderBy = parseSortParam(sortBy);

  const pizzas = await prisma.pizza.findMany({
    where: { categoryId },
    include: {
      variants: {
        include: {
          doughType: true,
          pizzaSize: true,
        },
      },
    },
    orderBy,
  });

  const response = pizzas.map((pizza) => ({
    ...pizza,
    variants: pizza.variants.map((variant) => ({
      id: variant.id,
      price: variant.price,
      doughType: variant.doughType.name,
      size: variant.pizzaSize.size,
    })),
  }));

  res.json(response);
};

export const getOneById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;

  const pizza = await prisma.pizza.findUnique({
    where: { id },
    include: {
      variants: {
        include: {
          doughType: true,
          pizzaSize: true,
        },
      },
    },
  });

  if (!pizza) {
    res.status(404).json({ message: 'Pizza not found' });
    return;
  }

  res.json({
    ...pizza,
    variants: pizza.variants.map((variant) => ({
      id: variant.id,
      price: variant.price,
      doughType: variant.doughType.name,
      size: variant.pizzaSize.size,
    })),
  });
};
