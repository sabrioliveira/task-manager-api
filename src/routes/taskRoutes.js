import express from "express";
import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  getUserTasks,
} from "../controllers/taskController.js";

const taskRoutes = express.Router();

taskRoutes.get("/:id", getUserTasks);
taskRoutes.get("/", getAllTasks);
taskRoutes.post("/", createTask);
taskRoutes.put("/:id", updateTask);
taskRoutes.delete("/:id", deleteTask);

export default taskRoutes;
