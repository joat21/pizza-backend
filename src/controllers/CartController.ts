import { RequestHandler } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

type GetItemsQuery = {
  cartId: string | undefined;
};

export const getItems: RequestHandler<any, any, any, GetItemsQuery> = async (req, res, next) => {
  try {
    const id = req.user?.id;
    const { cartId } = req.query;

    let where;

    if (id) {
      where = { userId: id };
    } else if (cartId) {
      where = { id: cartId };
    } else {
      res.status(404).json({ message: 'Cart not found' });
      return;
    }

    const cart = await prisma.cart.findFirst({
      where,
      include: {
        items: {
          include: {
            pizzaVariant: {
              include: {
                doughType: true,
                pizzaSize: true,
                pizza: {
                  select: {
                    title: true,
                    imageUrl: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!cart) {
      res.status(404).json({ message: 'Cart not found' });
      return;
    }

    const response = cart.items.map((item) => ({
      id: item.id,
      amount: item.amount,
      price: item.pizzaVariant.price * item.amount,
      doughType: item.pizzaVariant.doughType.name,
      size: item.pizzaVariant.pizzaSize.size,
      title: item.pizzaVariant.pizza.title,
      imageUrl: item.pizzaVariant.pizza.imageUrl,
    }));

    res.json(response);
  } catch (error) {
    next(error);
  }
};

type UpdateOneParams = {
  id: string;
};

type UpdateOneBody = {
  amount: number;
};

export const updateItem: RequestHandler<UpdateOneParams, any, UpdateOneBody> = async (
  req,
  res,
  next,
) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;

    const cartItem = await prisma.cartItem.findUnique({ where: { id } });

    if (!cartItem) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }

    await prisma.cartItem.update({
      where: { id },
      data: {
        amount,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
