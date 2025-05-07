import 'jsonwebtoken';
import { Role } from '.';

declare module 'jsonwebtoken' {
  export interface JwtPayload {
    id: string;
    role: Role;
  }
}
