import express, { Request, Response } from "express";

const router = express.Router();

router.post("/register", (req: Request, res: Response) => {

  res.json({
    succes: true,
    message: 'You are not valid for this website.',
    data: []
  });
  return;
});

export default router