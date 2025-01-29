import express from "express";
import { getGenres, addGenre, getGenreById, editGenre } from "../controllers/genre.controller";
import { validateCreateGenre } from "../middlewares/validations/validateCreateGenre.middleware";
const router = express.Router();

router.get("/", getGenres);
router.get("/:id", getGenreById);
router.post("/add", validateCreateGenre, addGenre);
router.put("/edit/:id", editGenre);
export default router