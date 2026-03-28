import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">

      <section className="text-center max-w-3xl mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Organize sua vida em um só lugar
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Agenda compromissos, gerencie tarefas, controle finanças
          e visualize estatísticas de forma simples e eficiente.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Entrar
          </Link>

          <Link
            href="/cadastro"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Criar conta
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">

        <div className="border border-white p-6 rounded-2xl hover:bg-white hover:text-black transition">
          <h2 className="text-xl font-bold mb-3">
            📅 Agenda
          </h2>

          <p className="text-sm opacity-80">
            Marque compromissos e visualize sua agenda
            diária, semanal ou mensal com facilidade.
          </p>
        </div>

        <div className="border border-white p-6 rounded-2xl hover:bg-white hover:text-black transition">
          <h2 className="text-xl font-bold mb-3">
            ✅ Tarefas
          </h2>

          <p className="text-sm opacity-80">
            Organize tarefas por dia, semana ou mês
            e acompanhe o progresso das atividades.
          </p>
        </div>

        <div className="border border-white p-6 rounded-2xl hover:bg-white hover:text-black transition">
          <h2 className="text-xl font-bold mb-3">
            💰 Finanças
          </h2>

          <p className="text-sm opacity-80">
            Controle seus ganhos e gastos mensais
            com uma visão clara do seu saldo.
          </p>
        </div>

        <div className="border border-white p-6 rounded-2xl hover:bg-white hover:text-black transition">
          <h2 className="text-xl font-bold mb-3">
            📊 Estatísticas
          </h2>

          <p className="text-sm opacity-80">
            Visualize gráficos e relatórios para
            entender melhor sua produtividade e finanças.
          </p>
        </div>

      </section>

      <footer className="mt-20 text-gray-500 text-sm text-center">
        © 2026 Organize — Sistema de organização pessoal
      </footer>

    </main>
  );
}