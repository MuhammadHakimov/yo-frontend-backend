import { Router } from "express";
import {
  getAllLessonsController,
  getLessonByIdController,
  addLessonController,
  updateLessonController,
  deleteLessonController,
} from "../controllers/lessons.js";

export const lessonsRouter = Router();

lessonsRouter.get("/", getAllLessonsController);
lessonsRouter.get("/:technology/:id", getLessonByIdController);
lessonsRouter.post("/", addLessonController);
lessonsRouter.put("/:id", updateLessonController);
lessonsRouter.delete("/:id", deleteLessonController);
