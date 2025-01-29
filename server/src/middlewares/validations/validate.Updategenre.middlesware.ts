import { Request, Response } from "express";
import { zGenreSchema } from "../../schemas/genre.schema";

export const validateUpdateGenre = (req: Request, res: Response, next: () => void) => {

  const {id} = req.params

  if(!id) {
    res.status(400).json({success: false, message: 'genre does not exist'});
  }

  const validationResult = zGenreSchema.safeParse(req.body);

  if (!validationResult.success ) {
    res.status(400).json({ success: false, message: validationResult.error.errors });
    return;
  }
  req.body = validationResult.data; // Store validated data in req.body
  next();
};