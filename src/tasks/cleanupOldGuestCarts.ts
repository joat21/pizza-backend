import cron from 'node-cron';
import { prisma } from '../prismaClient';

cron.schedule('0 0 * * *', async () => {
  console.log('Cleanup old guest carts started');

  const result = await prisma.cart.deleteMany({
    where: {
      updatedAt: {
        lt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      },
      userId: null,
    },
  });

  console.log(`Deleted ${result.count} old guest carts.`);
});
