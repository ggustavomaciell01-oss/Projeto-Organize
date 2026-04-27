import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


export default function Home() {
  return (
  <main className="min-h-screen flex flex-col items-center justify-center px-4">

      <section className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold">ORGANIZE</h1>
        <p className="mt-2 text-lg opacity-90">
          sua vida em um só lugar
        </p>

        <p className="mt-4 text-sm opacity-80">
          Agenda compromissos, gerencie tarefas, controle finanças e visualize estatísticas de forma simples e eficiente.
        </p>
      </section>

      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        
        <Card className="bg-white/10 backdrop-blur border-none">
          <CardContent className="p-4 text-center">
            <h3 className="font-semibold">📅 Agenda</h3>
            <p className="text-sm mt-2">
              Marque compromissos e visualize sua agenda diária, semanal ou mensal.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur border-none">
          <CardContent className="p-4 text-center">
            <h3 className="font-semibold">✅ Tarefas</h3>
            <p className="text-sm mt-2">
              Organize tarefas e acompanhe o progresso das atividades.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur border-none">
          <CardContent className="p-4 text-center">
            <h3 className="font-semibold">💰 Finanças</h3>
            <p className="text-sm mt-2">
              Controle seus ganhos e gastos mensais com clareza.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur border-none">
          <CardContent className="p-4 text-center">
            <h3 className="font-semibold">📊 Estatísticas</h3>
            <p className="text-sm mt-2">
              Visualize gráficos e relatórios para entender melhor seus dados.
            </p>
          </CardContent>
        </Card>

      </section>

      <p className="mt-10 text-xs opacity-70">
        © 2026 Organize — Sistema de organização pessoal
      </p>

    </main>
  );
}
