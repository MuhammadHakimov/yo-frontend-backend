
import express from "express";

import {
  adminLoginController,
  getAdminUsersController,
  getAdminLessonsController,
  getAdminTestsController,
  getAdminTasksController,
} from "../controllers/adminController.js";

import {
  deleteUserController,
} from "../controllers/users.js";

import {
  verifyToken,
  adminMiddleware,
} from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/login", adminLoginController);

router.use(verifyToken, adminMiddleware);

router.get("/users", getAdminUsersController);
router.delete("/users/:id", deleteUserController);

router.get("/lessons", getAdminLessonsController);
router.get("/tests", getAdminTestsController);
router.get("/tasks", getAdminTasksController);

export { router as adminRouter };
