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
            Agende compromissos, gerencie tarefas, controle finanças e visualize estatísticas de forma simples e eficiente.
          </p>
        </div>


        <Card className="w-full max-w-sm rounded-3xl bg-indigo-200 text-indigo-950 shadow-xl border-none">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Entrar na sua conta</CardTitle>
            <CardDescription className="text-center">
              Digite seu e-mail abaixo para entrar na sua conta
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form>
              <div className="flex flex-col gap-4">
                
                <div className="grid gap-2">
                  <Label htmlFor="email">Email:</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="rounded-full bg-white/80 border-none"
                  />
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center">
                  </div>
                  <Input id="password" placeholder="Senha" type="password" required className="rounded-full bg-white/80 border-none" />
                  <a
                      href="#"
                      className="ml-auto text-sm hover:underline"
                    >
                      Esqueceu sua senha?
                    </a>
                </div>

              </div>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
           <Button className="w-full rounded-full bg-indigo-950 text-white hover:bg-indigo-900">
             Entrar
          </Button>

            <p className="text-sm text-center">
              Não tem conta?{" "}
              <Button variant="link" className="p-0">
                Cadastre-se
              </Button>
            </p>
          </CardFooter>
        </Card>

      </div>
    </main>
  )
}
