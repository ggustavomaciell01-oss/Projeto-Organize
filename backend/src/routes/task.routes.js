import { Router } from "express";
import * as TaskController from "../controllers/task.controller.js";

const router = Router();

router.get("/:id", TaskController.listar);

router.get("/:id", TaskController.buscar);

router.get("/:id", TaskController.criar);

router.get("/:id", TaskController.atualizar);

router.get("/:id", TaskController.deletar);

export default router;