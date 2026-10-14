import express from "express";
import {
  getHistory,
  getHistoryById,
} from "../../controllers/history/historyController.js";

const router = express.Router();

router.get("/", getHistory);
router.get("/:id", getHistoryById);

export default router;