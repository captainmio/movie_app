import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: number;
}

interface CustomRequest extends Request {
  currenUser?: UserPayload;
}

export const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) {
    res.sendStatus(401)
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err: any, user: any) => {
    console.log('JWT ERROR: ',err)

    if (err) {
      res.sendStatus(403)
      return;
    }
    req.currenUser = user;
    next()
  })
};
