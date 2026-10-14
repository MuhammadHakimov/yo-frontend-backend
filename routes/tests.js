import { Router } from "express";

import {
  getAllTestsController,
  getTestByIdController,
  createTestController,
  updateTestController,
  deleteTestController,
} from "../controllers/tests.js";

import {
  addTestHistoryController,
  getUserTestHistoryController,
  deleteTestHistory,
} from "../controllers/testHistory.js";

export const testsRouter = Router();

testsRouter.post(
  "/history",
  addTestHistoryController
);

testsRouter.get(
  "/history/:userId",
  getUserTestHistoryController
);

testsRouter.delete(
  "/history/:id",
  deleteTestHistory
);

testsRouter.get(
  "/",
  getAllTestsController
);

testsRouter.get(
  "/:id",
  getTestByIdController
);

testsRouter.post(
  "/",
  createTestController
);

testsRouter.put(
  "/:id",
  updateTestController
);

testsRouter.delete(
  "/:id",
  deleteTestController
);