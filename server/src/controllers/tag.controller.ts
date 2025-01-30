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
}

export const getTagById = async (req: Request, res: Response) => {
  const {id} = req.params;

  // search if this id exist in the database
  const tag = await Tag.findOne({ _id: id });

  res.status(200).json({ success: true, data: tag });
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
}

export const editTag = async (req: Request, res: Response) => {

  const {id} = req.params;
  const {name, slug} = req.body;

  // search if this id exist in the database
  const tag = await Tag.findOne({ _id: id });

  if(!tag) {
    res.status(400).json({ success: false, message: "Tag not found" });
    return
  }

  tag.name = name;
  tag.slug = slug;
  const updatedTag = await tag.save();

  res.status(200).json({ success: true, message:'Tag successfully updated' , data: updatedTag });
  return;
}

export const deleteTag = async (req: Request, res: Response) => {
  const {id} = req.params;
  const removeTag = await Tag.findByIdAndDelete({ _id: id });

  if(!removeTag) {
    res.status(400).json({ success: false, message: "Tag not found" });
    return
  }

  res.status(200).json({
    success: true,
    message: 'Tag successfully deleted',
    data: removeTag
  });
  return;
}

