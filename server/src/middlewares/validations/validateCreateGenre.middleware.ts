import { Request, Response } from "express";
import { zGenreSchema } from "../../schemas/genre.schema";

export const validateCreateGenre = (req: Request, res: Response, next: () => void) => {
  const validationResult = zGenreSchema.safeParse(req.body);
  if (!validationResult.success) {
    res.status(400).json({ success: false, message: validationResult.error.errors });
    return;
  }
  req.body = validationResult.data; // Store validated data in req.body
  next();
};