"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";
import CardTaskAdmin from "@/components/card-task-admin";
import TaskForm from "@/components/task-form";

const API = "http://localhost:5500/api/tasks";

export default function TasksAdmin() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [editing, setEditing] = useState(null); // null = criar, objeto = editar
  const [form, setForm] = useState({
    name: "",
    price: "",
    maxLinks: "",
    maxClicks: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null); // id da tarefa a deletar

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    setLoading(true);
    const res = await fetch(API);
    const data = await res.json();
    setTasks(data);
    setLoading(false);
  }

  function openCreate() {
    setEditing(null);
    setForm({ name: "", price: "", maxLinks: "", maxClicks: "" });
    setError("");
    setSheetOpen(true);
  }

  function openEdit(task) {
    setEditing(task);
    setForm({
      name: task.name,
      price: String(task.price),
      maxLinks: String(task.maxLinks),
      maxClicks: String(task.maxClicks),
    });
    setError("");
    setSheetOpen(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const body = {
      name: form.name,
      price: Number(form.price),
      maxLinks: Number(form.maxLinks),
      maxClicks: Number(form.maxClicks),
    };

    const res = await fetch(editing ? `${API}/${editing.id}` : API, {
      method: editing ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    });

    setSaving(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Erro ao salvar tarefa.");
      return;
    }

    setSheetOpen(false);
    fetchTasks();
  }

  async function handleDelete(id) {
    await fetch(`${API}/${id}`, { method: "DELETE", credentials: "include" });
    setConfirmDelete(null);
    fetchTasks();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tarefas</h1>
        <Button onClick={openCreate}>
          <Plus className="size-4 mr-2" />
          Nova Tarefa
        </Button>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 rounded-xl" />
          ))}
        </div>
      ) : tasks.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          Nenhuma tarefa cadastrada ainda.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <CardTaskAdmin
              key={task.id}
              task={task}
              confirmDelete={confirmDelete}
              onEdit={openEdit}
              onDelete={handleDelete}
              onRequestDelete={setConfirmDelete}
              onCancelDelete={() => setConfirmDelete(null)}
            />
          ))}
        </div>
      )}

      <TaskForm
        editing={editing}
        sheetOpen={sheetOpen}
        setSheetOpen={setSheetOpen}
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        saving={saving}
        error={error}
      />
    </div>
  );
}