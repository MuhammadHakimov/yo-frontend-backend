import { Router } from "express";

import {
  registerUserController,
  loginUserController,
  addXpController,
  getUserController,
  getUserByIdController,
  deleteUserController,
  levelTestController,
} from "../controllers/users.js";

import {
  addMistakeController,
  getUserMistakesController,
  deleteMistakeController,
} from "../controllers/mistakes.js";

export const usersRouter = Router();

usersRouter.post(
  "/register",
  registerUserController
);

usersRouter.post(
  "/login",
  loginUserController
);

usersRouter.post(
  "/xp",
  addXpController
);

usersRouter.post(
  "/level-test",
  levelTestController
);

usersRouter.get(
  "/profile",
  getUserController
);

usersRouter.post(
  "/mistakes",
  addMistakeController
);

usersRouter.get(
  "/mistakes",
  getUserMistakesController
);

usersRouter.delete(
  "/mistakes/:id",
  deleteMistakeController
);

usersRouter.get(
  "/:id",
  getUserByIdController
);

usersRouter.delete(
  "/:id",
  deleteUserController
);