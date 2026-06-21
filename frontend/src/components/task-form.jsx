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
          <SheetTitle>{editing ? "Editar Tarefa" : "Nova Tarefa"}</SheetTitle>
          <SheetDescription>
            {editing
              ? "Altere os dados da tarefa."
              : "Preencha os dados para criar uma nova tarefa."}
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 px-4">
          <FieldGroup>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Field>
              <FieldLabel htmlFor="task-name">Nome da Tarefa</FieldLabel>
              <Input
                id="task-name"
                placeholder="Ex: Desenvolvimento"

                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="task-price">Preço (R$)</FieldLabel>
              <Input
                id="task-price"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                required
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="task-maxlinks">Máximo de Links</FieldLabel>
              <Input
                id="task-maxlinks"
                type="number"
                min="1"
                placeholder="10"
                required
                value={form.maxLinks}
                onChange={(e) => setForm({ ...form, maxLinks: e.target.value })}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="task-maxclicks">
                Máximo de Cliques/mês
              </FieldLabel>
              <Input
                id="task-maxclicks"
                type="number"
                min="1"
                placeholder="1000"
                required
                value={form.maxClicks}
                onChange={(e) =>
                  setForm({ ...form, maxClicks: e.target.value })
                }
              />
            </Field>
            <Field className="mt-4">
              <Button type="submit" disabled={saving}>
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