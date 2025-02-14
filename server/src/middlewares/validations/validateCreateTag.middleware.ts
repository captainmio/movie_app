import { Request, Response } from "express";
import { zTagSchema } from "../../schemas/tag.schema";

export const validateCreateTag = (req: Request, res: Response, next: () => void) => {
  const validationResult = zTagSchema.safeParse(req.body);
  if (!validationResult.success) {
    res.status(400).json({ success: false, message: validationResult.error.errors });
    return;
  }
  req.body = validationResult.data; // Store validated data in req.body
  next();
};