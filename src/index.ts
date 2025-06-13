import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import passport from 'passport';
import cors from 'cors';

import './auth';
import './tasks/cleanupOldGuestCarts';

import * as PizzaController from './controllers/PizzaController';
import * as CategoryController from './controllers/CategoryController';
import * as CartController from './controllers/CartController';
import * as AuthController from './controllers/AuthController';
import * as OrderController from './controllers/OrderController';

import { authTokensHandler } from './middleware/authTokensHandler';
import { getUserByToken } from './middleware/getUserByToken';
import { validate } from './middleware/validate';
import { requireAuth } from './middleware/requireAuth';
import { guestCartHandler } from './middleware/guestCartHandler';

import { errorHandler } from './helpers/errorHandler';

import {
  AddCartItemBodySchema,
  CartItemParamsSchema,
  UpdateCartItemBodySchema,
} from './schemas/cart';
import { PizzaParamsSchema, PizzaQuerySchema } from './schemas/pizza';
import { OrderBodySchema } from './schemas/order';

dotenv.config();

const PORT = 8080;

const app: Express = express();

app.use(cookieParser());
app.use(express.json());
app.use(passport.initialize());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(authTokensHandler);
app.use(getUserByToken);
app.use(guestCartHandler);

app.get(
  '/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
);
app.get(
  '/auth/github/callback',
  passport.authenticate('github', {
    session: false,
    failureRedirect: process.env.FRONTEND_URL,
  }),
  AuthController.callbackHandler
);
app.get('/auth/me', AuthController.getMe);
app.delete('/auth/logout', AuthController.logout);

app.get(
  '/pizza',
  validate({ query: PizzaQuerySchema }),
  PizzaController.getAll
);
app.get(
  '/pizza/:id',
  validate({ params: PizzaParamsSchema }),
  PizzaController.getOneById
);

app.get('/categories', CategoryController.getAll);

app.get('/cart', CartController.getItems);
app.patch(
  '/cart/:id',
  validate({ params: CartItemParamsSchema, body: UpdateCartItemBodySchema }),
  CartController.updateItem
);
app.delete(
  '/cart/:id',
  validate({ params: CartItemParamsSchema }),
  CartController.deleteItem
);
app.post(
  '/cart',
  validate({ body: AddCartItemBodySchema }),
  CartController.addItem
);
app.delete('/cart', CartController.clear);

app.post('/order', validate({ body: OrderBodySchema }), OrderController.create);
app.get('/order', requireAuth, OrderController.getAll);

app.use(errorHandler);

app.listen(PORT, '0.0.0.0', (error) => {
  if (error) {
    return console.error(error);
  }

  console.log(`[Server]: Server listening at http://localhost:${PORT}`);
});
