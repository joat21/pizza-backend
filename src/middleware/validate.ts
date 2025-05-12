import { RequestHandler } from 'express';
import { AnyZodObject, z, ZodError } from 'zod';

type ValidationSchemas = {
  params?: AnyZodObject;
  body?: AnyZodObject;
  query?: AnyZodObject;
};

export const validate =
  (schemas: ValidationSchemas): RequestHandler =>
  (req, res, next) => {
    try {
      if (schemas.params) {
        req.params = schemas.params.parse(req.params);
      }

      if (schemas.body) {
        req.body = schemas.body.parse(req.body);
      }

      if (schemas.query) {
        Object.assign(req.query, schemas.query.parse(req.query));
      }

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: 'Invalid data',
          errors: error.errors,
        });
        return;
      }

      next(error);
    }
  };
