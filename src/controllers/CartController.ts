import { RequestHandler } from 'express';
import { PrismaClient } from '../generated/prisma';
import { AddCartItemBody, CartItemParams, CartItemQuery, UpdateCartItemBody } from '../types/cart';

const prisma = new PrismaClient();

export const getItems: RequestHandler<any, any, any, CartItemQuery> = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    const { cartId } = req.query;

    let where;

    if (userId) {
      where = { userId };
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

export const updateItem: RequestHandler<CartItemParams, any, UpdateCartItemBody> = async (
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

export const deleteItem: RequestHandler<CartItemParams> = async (req, res, next) => {
  try {
    const { id } = req.params;

    const cartItem = await prisma.cartItem.findUnique({ where: { id } });

    if (!cartItem) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }

    await prisma.cartItem.delete({ where: { id } });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export const addItem: RequestHandler<any, any, AddCartItemBody, CartItemQuery> = async (
  req,
  res,
  next,
) => {
  try {
    const userId = req.user?.id;
    const { pizzaVariantId } = req.body;
    const { cartId } = req.query;

    const pizzaVariant = await prisma.pizzaVariant.findUnique({
      where: { id: pizzaVariantId },
    });

    if (!pizzaVariant) {
      res.status(404).json({ message: 'Pizza variant not found' });
      return;
    }

    let cart;

    if (userId) {
      cart = await prisma.cart.upsert({
        where: { userId },
        create: { userId },
        update: {},
      });
    } else if (cartId) {
      cart = await prisma.cart.upsert({
        where: { id: cartId },
        create: { id: cartId },
        update: {},
      });
    } else {
      res.status(404).json({ message: 'Cart not found' });
      return;
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        pizzaVariantId,
      },
    });

    if (cartItem) {
      await prisma.cartItem.update({
        where: { id: cartItem.id },
        data: {
          amount: cartItem.amount + 1,
        },
      });

      res.sendStatus(204);
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          pizzaVariantId,
          amount: 1,
        },
      });

      res.sendStatus(201);
    }
  } catch (error) {
    next(error);
  }
};
