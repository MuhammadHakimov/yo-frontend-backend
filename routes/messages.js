
import express from "express";

import {
  sendMessage,
  getMessages,
  deleteMessage,
} from "../controllers/messagesController.js";

import {
  verifyToken,
  adminMiddleware,
} from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/", sendMessage);

router.get("/", verifyToken, adminMiddleware, getMessages);

router.delete(
  "/:id",
  verifyToken,
  adminMiddleware,
  deleteMessage
);

export default router;
