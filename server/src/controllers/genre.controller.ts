import { Request, Response } from "express";
import Genre from "../models/Genre.mode";

const getGenres = async (req: Request, res: Response) => {
  console.log('GET GENRES API')
  return
};


const addGenre = async (req: Request, res: Response) => {
  const {name, description} = req.body;

  const genre = await Genre.create({
    name,
    description
  })

  if (genre) {
    res.json({
      success: true,
      message: 'Genre successfully created',
      data: [genre]
    });
    return;
  } else {
    res.status(400).json({ success: false, message: "Genre failed to create" });
    return;
  }

};

export {
  getGenres as getGenres,
  addGenre as addGenre
}