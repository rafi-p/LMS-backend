import express from "express";
import { validateRequest } from "../middlewares/validateRequest.js";
import { signInSchema, signUpSchema } from "../utils/schema.js";
import { SignInAction, SignUpAction } from "../controllers/authController.js";

const authRoutes = express.Router();

authRoutes.post("/sign-up", validateRequest(signUpSchema), SignUpAction);
authRoutes.post("/sign-in", validateRequest(signInSchema), SignInAction);

export default authRoutes;
