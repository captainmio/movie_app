import { Request, Response } from "express";
import { zTagSchema } from "../../schemas/tag.schema";

export const validateUpdateTag = (req: Request, res: Response, next: () => void) => {

  const {id} = req.params

  if(!id) {
    res.status(400).json({success: false, message: 'Tag\'s id does not exist'});
  }

  const validationResult = zTagSchema.safeParse(req.body);

  if (!validationResult.success ) {
    res.status(400).json({ success: false, message: validationResult.error.errors });
    return;
  }
  req.body = validationResult.data; // Store validated data in req.body
  next();
};