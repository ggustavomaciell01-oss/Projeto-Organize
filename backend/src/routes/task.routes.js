import { Router } from "express";
import * as TaskController from "../controllers/task.controller.js";

const router = Router();

router.get("/", TaskController.listar);

router.get("/:id", TaskController.buscar);

router.post("/", TaskController.criar);

router.put("/:id", TaskController.atualizar);

router.delete("/:id", TaskController.deletar);

export default router;