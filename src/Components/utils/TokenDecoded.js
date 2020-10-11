import jwt from 'jsonwebtoken';

export const tokenDecoded = (token) => {
  return jwt.decode(token, { complete: true });
};
