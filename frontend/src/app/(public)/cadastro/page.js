import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CardDemo() {
  return (
 <main className="min-h-screen flex items-center justify-center px-4">

      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">

        <div className="text-white max-w-md text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight">
            Organize sua vida <br /> em um só lugar
          </h1>

          <p className="mt-4 text-sm opacity-90">
            Agenda compromissos, gerencie tarefas, controle finanças e visualize estatísticas de forma simples e eficiente.
          </p>
        </div>

        <Card className="w-full max-w-sm rounded-3xl bg-indigo-200 text-indigo-950 shadow-xl border-none">

          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Cadastre-se
            </CardTitle>

            <CardDescription className="text-center">
              Digite seus dados abaixo
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form>
              <div className="flex flex-col gap-4">

                <Input
                  placeholder="Nome"
                  className="rounded-full bg-white/80 border-none"
                />

                <Input
                  placeholder="Sobrenome"
                  className="rounded-full bg-white/80 border-none"
                />

                <Input
                  type="email"
                  placeholder="E-mail"
                  className="rounded-full bg-white/80 border-none"
                />

                <Input
                  type="password"
                  placeholder="Senha"
                  className="rounded-full bg-white/80 border-none"
                />

                <Input
                  type="password"
                  placeholder="Confirmar senha"
                  className="rounded-full bg-white/80 border-none"
                />

              </div>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            
            <Button className="w-full rounded-full bg-indigo-950 text-white hover:bg-indigo-900">
              Criar conta
            </Button>

            <p className="text-sm text-center">
              Já tem conta?{" "}
              <Button variant="link" className="p-0 text-indigo-950">
                Fazer login
              </Button>
            </p>

          </CardFooter>
        </Card>

      </div>
    </main>
  )
}