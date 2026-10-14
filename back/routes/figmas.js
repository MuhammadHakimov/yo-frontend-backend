import { Router } from "express";
import { getAllFigmasController } from "../controllers/figmas.js";

export const figmasRouter = Router();

figmasRouter.get("/", getAllFigmasController);