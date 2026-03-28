"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {

  const [nome, setNome] = useState("");

  useEffect(() => {

    const nomeUser =
      localStorage.getItem("nome");

    if (nomeUser) {
      setNome(nomeUser);
    }

  }, []);

  return (

    <main className="min-h-screen px-6 py-10">

      <h1 className="text-3xl font-bold mb-2">
        Dashboard
      </h1>

      <p className="text-gray-400 mb-10">
        Bem-vindo, {nome}
      </p>



    </main>

  );
}