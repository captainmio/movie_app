import { Request, Response } from "express";
import Tag from "../models/Tag.model";

export const getTags = async (req: Request, res: Response) => {

  const tags = await Tag.find();

  if (tags) {
    res.json({
      success: true,
      message: '',
      data: tags
    });
    return;
  } else {
    res.status(400).json({ success: false, message: "Error fetching Tags" });
    return;
  }

  return;
}

export const addTag = async (req: Request, res: Response) => {
  const {name, slug} = req.body;

  const tag = await Tag.create({
    name,
    slug
  })

  if (tag) {
    res.json({
      success: true,
      message: 'Tag successfully created',
      data: [tag]
    });
    return;
  } else {
    res.status(400).json({ success: false, message: "Tag failed to create" });
    return;
  }
  
  return;
}

