import express from "express";
import { getAllMidias, getById } from "../controllers/midiasController.js";

const router = express.Router();

router.get("/", getAllMidias);
router.get("/:id", getById);



export default router;