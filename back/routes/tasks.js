import { Router } from "express";

import {
  getAllTasksController,
  getTaskByIdController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
} from "../controllers/tasks.js";

export const tasksRouter = Router();

tasksRouter.get("/", getAllTasksController);
tasksRouter.get("/:id", getTaskByIdController);
tasksRouter.post("/", createTaskController);
tasksRouter.put("/:id", updateTaskController);
tasksRouter.delete("/:id", deleteTaskController);