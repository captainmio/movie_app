import { Request, Response } from "express";

const register = (req: Request, res: Response) => {
  res.json({
    succes: true,
    message: 'API successfully executed v1',
    data: []
  });
  return;
}

export {
  register,
};