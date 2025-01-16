import { createUser } from './../schemas/user.schema';
import { validateCreateUser } from './../middlewares/validations/validateCreateUser.middleware';
import express, { Request } from "express";
import { register } from "../controllers/auth.controller";
const router = express.Router();


router.post("/register", validateCreateUser, register);
export default router