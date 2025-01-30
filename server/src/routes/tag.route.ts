import express from "express";
import { getTags, addTag, getTagById, editTag, deleteTag } from "../controllers/tag.controller";
import { validateCreateTag } from "../middlewares/validations/validateCreateTag.middleware";
import { validateUpdateTag } from "../middlewares/validations/validateUpdateTag.middlesware";

const router = express.Router();

router.get("/", getTags);
router.get("/:id", getTagById);
router.post("/add", validateCreateTag, addTag);
router.put("/edit/:id", validateUpdateTag, editTag);
router.delete("/delete/:id", deleteTag);
export default router