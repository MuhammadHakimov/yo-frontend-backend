import express from "express";
import {
  getPeople,
  getPersonById,
} from "../../controllers/history/peopleController.js";

const router = express.Router();

router.get("/", getPeople);
router.get("/:id", getPersonById);

export default router;