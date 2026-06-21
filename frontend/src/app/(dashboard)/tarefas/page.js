"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import CardTask from "@/components/card-task";

const API = "http://localhost:5500/api/tasks";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="flex flex-col gap-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">Tarefas</h1>
        <p className="text-muted-foreground mt-2">
          Gerencie suas tarefas de forma eficiente.
        </p>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 rounded-xl" />
          ))}
        </div>
      ) : tasks.length === 0 ? (
        <p className="text-center text-muted-foreground text-sm">
          Nenhuma tarefa registrada ainda.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <CardTask key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}