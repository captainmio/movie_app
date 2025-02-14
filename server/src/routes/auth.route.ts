import { zUserSchema } from './../schemas/user.schema';
import { validateCreateUser } from './../middlewares/validations/validateCreateUser.middleware';
import express from "express";
import { login, register } from "../controllers/auth.controller";
const router = express.Router();


router.post("/register", validateCreateUser, register);
router.post("/login", login);
export default router