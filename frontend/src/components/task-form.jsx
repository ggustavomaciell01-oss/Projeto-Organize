import { Button } from "./ui/button";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";

export default function TaskForm({
  editing,
  sheetOpen,
  setSheetOpen,
  form,
  setForm,
  error,
  saving,
  handleSubmit,
}) {
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {editing ? "Editar Tarefa" : "Nova Tarefa"}
          </SheetTitle>

          <SheetDescription>
            {editing
              ? "Altere os dados da tarefa."
              : "Preencha os dados para criar uma nova tarefa."}
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 px-4">

          <FieldGroup>
            {error && <p className="text-sm text-destructive">{error}</p>}

            {/* TITLE */}
            <Field>
              <FieldLabel htmlFor="task-title">Título</FieldLabel>
              <Input
                id="task-title"
                placeholder="Ex: Estudar Next.js"
                required
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />
            </Field>


            <Field>
              <FieldLabel htmlFor="task-desc">Descrição</FieldLabel>
              <Input
                id="task-desc"
                placeholder="Descrição da tarefa"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="task-date">Data de entrega</FieldLabel>
              <Input
                id="task-date"
                type="date"
                value={form.dueDate}
                onChange={(e) =>
                  setForm({ ...form, dueDate: e.target.value })
                }
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="task-status">Status</FieldLabel>
              <select
                id="task-status"
                className="w-full border rounded-md p-2 text-sm"
                value={form.status}
                onChange={(e) =>
                  setForm({ ...form, status: e.target.value })
                }
              >
                <option value="pending">Pendente</option>
                <option value="in_progress">Em andamento</option>
                <option value="done">Concluída</option>
              </select>
            </Field>

            <Field className="mt-4">
              <Button type="submit" disabled={saving} className="w-full">
                {saving
                  ? "Salvando..."
                  : editing
                  ? "Salvar Alterações"
                  : "Criar Tarefa"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </SheetContent>
    </Sheet>
  );
}