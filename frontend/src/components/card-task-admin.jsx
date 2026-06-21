import { Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function CardTaskAdmin({
  task,
  confirmDelete,
  onEdit,
  onDelete,
  onRequestDelete,
  onCancelDelete,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{task.name}</CardTitle>
        <CardDescription>
          {Number(task.price) === 0
            ? "Grátis"
            : `R$ ${Number(task.price).toFixed(2)}/mês`}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground flex flex-col gap-1">
        <span>🔗 Até {task.maxLinks} links</span>
        <span>📊 Até {task.maxClicks.toLocaleString("pt-BR")} cliques/mês</span>
      </CardContent>
      <CardFooter className="flex gap-2">
        {confirmDelete === task.id ? (
          <>
            <span className="text-sm text-destructive flex-1">
              Confirmar exclusão?
            </span>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onDelete(task.id)}
            >
              Sim
            </Button>
            <Button size="sm" variant="outline" onClick={onCancelDelete}>
              Não
            </Button>
          </>
        ) : (
          <>
            <Button size="sm" variant="outline" onClick={() => onEdit(task)}>
              <Pencil className="size-3.5 mr-1" /> Editar
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onRequestDelete(task.id)}
            >
              <Trash2 className="size-3.5 mr-1" /> Excluir
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}