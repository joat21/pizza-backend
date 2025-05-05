import express, { Express } from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import { PrismaClient } from './generated/prisma';
import './auth';

dotenv.config();

const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

const app: Express = express();

app.use(express.json());
app.use(passport.initialize());

app.get(
  '/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { session: false }),
  (req, res) => {
    const { token } = req.user as { token: string };
    res.send(`
      <script>
        window.opener.postMessage({ token: "${token}" }, "*");
        window.close();
      </script>
    `);
  }
);

app.get('/', async (req, res) => {
  const pizzas = await prisma.pizza.findMany({
    include: {
      variants: {
        include: {
          doughType: true,
          pizzaSize: true,
        },
      },
    },
  });

  const response = pizzas.map((pizza) => ({
    id: pizza.id,
    title: pizza.title,
    description: pizza.description,
    imageUrl: pizza.imageUrl,
    categoryId: pizza.categoryId,
    rating: pizza.rating,
    variants: pizza.variants.map((variant) => ({
      id: variant.id,
      price: variant.price,
      doughType: variant.doughType.name,
      size: variant.pizzaSize.size,
    })),
  }));

  res.json(response);
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error);
  }

  console.log(`[Server]: Server started at http://localhost:${PORT}`);
});
