"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  async function handleCadastro(e) {
    e.preventDefault();

    // Verificar se senhas são iguais
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const res = await fetch("/api/cadastro", {
      method: "POST",
      body: JSON.stringify({
        nome,
        sobrenome,
        email,
        senha,
      }),
    });

    if (res.ok) {
      alert("Cadastro realizado!");
      router.push("/login");
    } else {
      alert("Erro ao cadastrar");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black">

      <div className="bg-white text-black p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Criar Conta
        </h1>

        <form
          onSubmit={handleCadastro}
          className="flex flex-col gap-4"
        >

          {/* Nome */}
          <input
            type="text"
            placeholder="Nome"
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) =>
              setNome(e.target.value)
            }
          />

          {/* Sobrenome */}
          <input
            type="text"
            placeholder="Sobrenome"
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) =>
              setSobrenome(e.target.value)
            }
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          {/* Senha */}
          <input
            type="password"
            placeholder="Senha"
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) =>
              setSenha(e.target.value)
            }
          />

          {/* Confirmar senha */}
          <input
            type="password"
            placeholder="Confirmar senha"
            required
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            onChange={(e) =>
              setConfirmarSenha(e.target.value)
            }
          />

          <button
            type="submit"
            className="bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
          >
            Criar conta
          </button>

        </form>

        <p className="text-center mt-4 text-sm">

          Já tem conta?{" "}

          <Link
            href="/login"
            className="font-semibold underline"
          >
            Fazer login
          </Link>

        </p>

      </div>

    </main>
  );
}