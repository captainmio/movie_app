import express from "express";
import { getTags, addTag, editTag, deleteTag } from "../controllers/tag.controller";
import { validateCreateTag } from "../middlewares/validations/validateCreateTag.middleware";

const router = express.Router();

router.get("/", getTags);
router.post("/add", validateCreateTag, addTag);
router.delete("/delete/:id", deleteTag);
export default router