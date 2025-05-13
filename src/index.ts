import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import passport from 'passport';

import './auth';

import * as PizzaController from './controllers/PizzaController';
import * as CategoryController from './controllers/CategoryController';
import * as CartController from './controllers/CartController';
import * as AuthController from './controllers/AuthController';
import * as OrderController from './controllers/OrderController';

import { authTokensHandler } from './middleware/authTokensHandler';
import { getUserByToken } from './middleware/getUserByToken';
import { validate } from './middleware/validate';
import { errorHandler } from './helpers/errorHandler';

import {
  AddCartItemBodySchema,
  CartItemParamsSchema,
  CartItemQuerySchema,
  UpdateCartItemBodySchema,
} from './schemas/cart';
import { PizzaParamsSchema, PizzaQuerySchema } from './schemas/pizza';
import { OrderBodySchema, OrderQuerySchema } from './schemas/order';
import { requireAuth } from './middleware/requireAuth';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app: Express = express();

app.use(cookieParser());
app.use(express.json());
app.use(passport.initialize());

app.use(authTokensHandler);
app.use(getUserByToken);

app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { session: false }),
  AuthController.callbackHandler,
);

app.get('/pizza', validate({ query: PizzaQuerySchema }), PizzaController.getAll);
app.get('/pizza/:id', validate({ params: PizzaParamsSchema }), PizzaController.getOneById);

app.get('/categories', CategoryController.getAll);

app.get('/cart', validate({ query: CartItemQuerySchema }), CartController.getItems);
app.patch(
  '/cart/:id',
  validate({ params: CartItemParamsSchema, body: UpdateCartItemBodySchema }),
  CartController.updateItem,
);
app.delete('/cart/:id', validate({ params: CartItemParamsSchema }), CartController.deleteItem);
app.post(
  '/cart',
  validate({ body: AddCartItemBodySchema, query: CartItemQuerySchema }),
  CartController.addItem,
);

app.post(
  '/order',
  validate({ body: OrderBodySchema, query: OrderQuerySchema }),
  OrderController.create,
);
app.get('/order', requireAuth, OrderController.getAll);

app.use(errorHandler);

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error);
  }

  console.log(`[Server]: Server listening at http://localhost:${PORT}`);
});
