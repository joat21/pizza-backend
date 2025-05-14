import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const mergeGuestAndUSerCarts = async (userId: string, guestCartId?: string) => {
  try {
    if (!guestCartId) {
      return;
    }

    const guestCart = await prisma.cart.findUnique({
      where: { id: guestCartId },
      include: {
        items: true,
      },
    });

    if (!guestCart || guestCart.items.length === 0) {
      return;
    }

    const userCart = await prisma.cart.upsert({
      where: { userId },
      create: { userId },
      update: {},
    });

    await prisma.$transaction(async (tx) => {
      for (const guestItem of guestCart.items) {
        const existingItem = await tx.cartItem.findFirst({
          where: {
            cartId: userCart.id,
            pizzaVariantId: guestItem.pizzaVariantId,
          },
        });

        if (existingItem) {
          await tx.cartItem.update({
            where: { id: existingItem.id },
            data: {
              amount: existingItem.amount + guestItem.amount,
            },
          });
        } else {
          await tx.cartItem.create({
            data: {
              cartId: userCart.id,
              pizzaVariantId: guestItem.pizzaVariantId,
              amount: guestItem.amount,
            },
          });
        }
      }

      await tx.cart.delete({
        where: { id: guestCart.id },
      });
    });
  } catch (error) {
    console.error(error);
  }
};
