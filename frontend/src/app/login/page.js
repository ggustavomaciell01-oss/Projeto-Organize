"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

async function handleLogin(e) {
  e.preventDefault();

  const res = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      senha,
    }),
  });

  if (res.ok) {

    const data = await res.json();

    localStorage.setItem(
      "logado",
      "true"
    );

    localStorage.setItem(
      "nome",
      data.nome
    );

    router.push("/dashboard");

  } else {

    alert("Login inválido");

  }
}

  return (
    <main className="min-h-screen flex items-center justify-center bg-black">

      <div className="bg-white text-black p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4"
        >

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Senha"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) =>
              setSenha(e.target.value)
            }
          />

          <button
            type="submit"
            className="bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
          >
            Entrar
          </button>

        </form>

        <p className="text-center mt-4 text-sm">

          Não tem conta?{" "}

          <Link
            href="/cadastro"
            className="font-semibold underline"
          >
            Cadastre-se
          </Link>

        </p>

      </div>

    </main>
  );
}