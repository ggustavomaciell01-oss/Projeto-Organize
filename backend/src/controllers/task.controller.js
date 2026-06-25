// src/controllers/task.controller.js
import * as TaskModel from "../models/task.model.js";

// GET /api/tasks
export async function listar(req, res) {
  const tarefas = await TaskModel.listarTarefas();
  return res.json(tarefas);
}

// GET /api/tasks/:id
export async function buscar(req, res) {
  const id = req.params.id;
  const tarefa = await TaskModel.buscarTarefaPorId(id);
  if (!tarefa) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }
  return res.json(tarefa);
}

// POST /api/tasks
export async function criar(req, res) {
  const { title, description, dueDate, status } = req.body;

  if (!title || description == null || dueDate == null || status == null) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const tarefa = await TaskModel.criarTarefa({
    title,
    description,
    dueDate,
    status,
  });
  return res.status(201).json(tarefa);
}

// PUT /api/tasks/:id
export async function atualizar(req, res) {
  const id = req.params.id;
  const {  title, description, dueDate, status } = req.body;

  const tarefa = await TaskModel.buscarTarefaPorId(id);
  if (!tarefa) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  const atualizado = await TaskModel.atualizarTarefa(id, {
    title,
    description,
    dueDate,
    status,
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
