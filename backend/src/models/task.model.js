// src/models/task.model.js
import { prisma } from "../lib/prisma.js";

export async function listarTarefas() {
  return prisma.task.findMany({ orderBy: { price: "asc" } });
}

export async function buscarTarefaPorId(id) {
  return prisma.task.findUnique({ where: { id } });
}

export async function criarTarefa(data) {
  return prisma.task.create({ data });
}

export async function atualizarTarefa(id, data) {
  return prisma.task.update({ where: { id }, data });
}

export async function deletarTarefa(id) {
  return prisma.task.delete({ where: { id } });
}
