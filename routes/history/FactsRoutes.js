import express from "express";
import {
  getFacts,
  getFactById,
} from "../../controllers/history/FactsController.js";

const router = express.Router();

router.get("/", getFacts);
router.get("/:id", getFactById);

export default router;  