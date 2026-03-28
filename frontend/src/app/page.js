import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="text-center space-y-6">

        {/* Título */}
        <h1 className="text-5xl font-bold">
          Organize
        </h1>

        {/* Subtítulo */}
        <p className="text-gray-400 text-lg">
          Organize suas tarefas de forma simples e eficiente
        </p>

        {/* Botões */}
        <div className="flex justify-center gap-4 mt-6">

          <Link href="/login">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
              Login
            </button>
          </Link>

          <Link href="/cadastro">
            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">
              Cadastro
            </button>
          </Link>

        </div>

      </div>

    </main>
  );
}