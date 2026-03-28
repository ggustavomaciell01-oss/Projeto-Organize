"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter();
  const [nome, setNome] = useState("");

  useEffect(() => {

    const logado =
      localStorage.getItem("logado");

    const nomeUser =
      localStorage.getItem("nome");

    if (!logado) {
      router.push("/login");
    }

    if (nomeUser) {
      setNome(nomeUser);
    }

  }, []);

  function logout() {

    localStorage.removeItem("logado");
    localStorage.removeItem("nome");

    router.push("/login");

  }

  return (

    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-4">
        Dashboard
      </h1>

      <h2 className="text-xl mb-6">
        👋 Olá, {nome}
      </h2>

      <button
        onClick={logout}
        className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition"
      >
        Sair
      </button>

    </main>

  );
}