import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CardTask({ task }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl">{task.title}</CardTitle>
        <CardDescription className="text-3xl font-bold text-foreground">
          {Number(task.price) === 0
            ? "Grátis"
            : `R$ ${Number(task.price).toFixed(2)}/mês`}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-2 text-sm">
        <span>✅ Até {task.maxLinks} links encurtados</span>
        <span>
          ✅ Até {task.maxClicks.toLocaleString("pt-BR")} cliques por mês
        </span>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/register">Começar agora</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}