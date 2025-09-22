import express from "express";
import { categoriaFiltrada, createMidia, deleteMidia, getAllMidias, getById, updateMidia } from "../controllers/midiasController.js";

const router = express.Router();

router.get("/", getAllMidias);
router.get("/:id", getById);
router.post("/", createMidia);
router.delete("/:id", deleteMidia);
router.put("/:id", updateMidia);
router.get("/categorias/:categoria", categoriaFiltrada);


export default router;