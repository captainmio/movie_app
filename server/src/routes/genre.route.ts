import express from "express";
import { getGenres, addGenre, getGenreById, editGenre, deleteGenre } from "../controllers/genre.controller";
import { validateCreateGenre } from "../middlewares/validations/validateCreateGenre.middleware";
import { validateUpdateGenre } from "../middlewares/validations/validateUpdateGenre.middlesware";
const router = express.Router();

router.get("/", getGenres);
router.get("/:id", getGenreById);
router.post("/add", validateCreateGenre, addGenre);
router.put("/edit/:id", validateUpdateGenre, editGenre);
router.delete("/delete/:id", deleteGenre);
export default router