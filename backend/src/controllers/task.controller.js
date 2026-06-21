// src/controllers/task.controller.js
import * as TaskModel from "../models/task.model.js";

// GET /api/tasks
export async function listar(req, res) {
  const tarefas = await TaskModel.listarTarefas();
  return res.json(tarefas);
}

// GET /api/tasks/:id
export async function buscar(req, res) {
  const id = Number(req.params.id);
  const tarefa = await TaskModel.buscarTarefaPorId(id);
  if (!tarefa) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }
  return res.json(tarefa);
}

// POST /api/tasks
export async function criar(req, res) {
  const { name, price, maxLinks, maxClicks } = req.body;

  if (!name || price == null || maxLinks == null || maxClicks == null) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const tarefa = await TaskModel.criarTarefa({
    name,
    price,
    maxLinks,
    maxClicks,
  });
  return res.status(201).json(tarefa);
}

// PUT /api/tasks/:id
export async function atualizar(req, res) {
  const id = Number(req.params.id);
  const { name, price, maxLinks, maxClicks } = req.body;

  const tarefa = await TaskModel.buscarTarefaPorId(id);
  if (!tarefa) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  const atualizado = await TaskModel.atualizarTarefa(id, {
    name,
    price,
    maxLinks,
    maxClicks,
  });
  return res.json(atualizado);
}

// DELETE /api/tasks/:id
export async function deletar(req, res) {
  const id = req.params.id;

  const tarefa = await TaskModel.buscarTarefaPorId(id);
  if (!tarefa) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  await TaskModel.deletarTarefa(id);
  return res.status(204).send();
}
