import express from "express";
import { createUser, userLogin } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/signup", createUser);
userRoutes.post("/signin", userLogin);

export default userRoutes;
