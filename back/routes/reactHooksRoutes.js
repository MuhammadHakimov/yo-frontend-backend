import express from "express";
import {
  getReactHooks,
  getReactHookById
} from "../controllers/reactHooksController.js";

const router = express.Router();

router.get("/", getReactHooks);
router.get("/:id", getReactHookById);

export default router;