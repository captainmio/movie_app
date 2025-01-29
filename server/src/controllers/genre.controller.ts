import { Request, Response } from "express";
import Genre from "../models/Genre.mode";

const getGenres = async (req: Request, res: Response) => {
  const genres = await Genre.find();

  if (genres) {
    res.json({
      success: true,
      message: '',
      data: genres
    });
    return;
  } else {
    res.status(400).json({ success: false, message: "Error fetching Genres" });
    return;
  }
};

const getGenreById = async (req: Request, res: Response) => {
  const {id} = req.params;

  // search if this id exist in the database
  const genre = await Genre.findOne({ _id: id });

  res.status(200).json({ success: true, data: genre });
  return;
}


const editGenre = async (req: Request, res: Response) => {

  console.log('Edit Genre')

  const {id} = req.params;
  const {name, description} = req.body;


  // search if this id exist in the database
  const genre = await Genre.findOne({ _id: id });

  if(!genre) {
    res.status(400).json({ success: false, message: "Genre not found" });
    return
  }

  genre.name = name;
  genre.description = description;
  const updatedGenre = await genre.save();

  res.status(200).json({ success: true, message:'Genre successfully updated' , data: updatedGenre });
}

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
  getGenreById as getGenreById,
  addGenre as addGenre,
  editGenre as editGenre
}