declare namespace Express {
  interface Request {
    user?: { id: string };
    guestCartId?: string;
  }
}
