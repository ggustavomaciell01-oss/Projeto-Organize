import { Router } from "express";
import * as PlanController from "../controllers/plan.controller.js";

const router = Router();

router.get("/:id", PlanController.listar);

router.get("/:id", PlanController.buscar);

router.get("/:id", PlanController.criar);

router.get("/:id", PlanController.atualizar);

router.get("/:id", PlanController.deletar);

export default router;