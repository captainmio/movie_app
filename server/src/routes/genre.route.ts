import express from "express";
import { getGenres, addGenre } from "../controllers/genre.controller";
const router = express.Router();

router.get("/", getGenres);
router.post("/add", addGenre);
export default router