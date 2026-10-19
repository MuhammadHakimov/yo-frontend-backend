import express from "express";
import { getChannels } from "../controllers/channelsController.js";

const router = express.Router();

router.get("/", getChannels);

export default router;