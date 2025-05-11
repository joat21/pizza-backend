import express, { Express } from 'express';
import dotenv from 'dotenv';
import passport from 'passport';

import './auth';

import * as PizzaController from './controllers/PizzaController';
import * as CategoryController from './controllers/CategoryController';
import * as CartController from './controllers/CartController';
import * as AuthController from './controllers/AuthController';

import { optionalAuth } from './middleware/optionalAuth';
import { errorHandler } from './helpers/errorHandler';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app: Express = express();

app.use(express.json());
app.use(passport.initialize());

app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { session: false }),
  AuthController.callbackHandler,
);

app.get('/pizza', PizzaController.getAll);
app.get('/pizza/:id', PizzaController.getOneById);

app.get('/categories', CategoryController.getAll);

app.get('/cart', optionalAuth, CartController.getItems);
app.patch('/cart/:id', optionalAuth, CartController.updateItem);
app.delete('/cart/:id', optionalAuth, CartController.deleteItem);
app.post('/cart', optionalAuth, CartController.addItem);

app.use(errorHandler);

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error);
  }

  console.log(`[Server]: Server listening at http://localhost:${PORT}`);
});
