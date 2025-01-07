import express from "express";
import { createUser, signUser } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/new", createUser);
userRoutes.post("/sign", signUser);

export default userRoutes;
