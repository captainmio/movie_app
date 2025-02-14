import { Request, Response } from "express";
import { zUserSchema } from "../../schemas/user.schema";

export const validateCreateUser = (req: Request, res: Response, next: () => void) => {
  const validationResult = zUserSchema.safeParse(req.body);
  if (!validationResult.success) {
    res.status(400).json({ success: false, message: validationResult.error.errors });
    return;
  }
  req.body = validationResult.data; // Store validated data in req.body
  next();
};