import express from "express";
import { getTags, addTag } from "../controllers/tag.controller";
import { validateCreateTag } from "../middlewares/validations/validateCreateTag.middleware";

const router = express.Router();

router.get("/", getTags);
router.post("/add", validateCreateTag, addTag);

export default router