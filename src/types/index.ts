import { Request } from 'express';

export enum Role {
  User = 'user',
  Admin = 'admin',
}

// export interface RequestWithUser extends Request {
//   user?: {
//     id?: string;
//     token?: string;
//   };
// }
