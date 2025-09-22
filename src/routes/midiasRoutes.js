import express from "express";
import { getAllMidias } from "../controllers/midiasController.js";

const router = express.Router();

router.get("/", getAllMidias);



export default router;