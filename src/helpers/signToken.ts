import jwt from 'jsonwebtoken';

type ExpirationTime =
  | `${number}ms`
  | `${number}s`
  | `${number}m`
  | `${number}h`
  | `${number}d`
  | `${number}w`
  | number;

export const signToken = (payload: jwt.JwtPayload, secret: string, expiresIn: ExpirationTime) =>
  jwt.sign(
    {
      id: payload.id,
      role: payload.role,
    },
    secret,
    { expiresIn: expiresIn },
  );
