// src/index.js - Versão organizada
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { auth } from "./lib/auth.js";
import { toNodeHandler } from "better-auth/node";
import { requireAuth } from "../src/middleware/auth.js";
import taskRoutes from "./routes/task.routes.js"; // importação


// Configuração inicial
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;

// Middleware global
app.use(express.json());


app.use(cors({
  origin: "http://localhost:3000", // endereço do frontend
  credentials: true,              // permite envio de cookies de sessão
}));

// Rotas de autenticação do Better Auth
// Isso cria todas as rotas automaticamente!
app.all("/api/auth/*path", toNodeHandler(auth));

// Rota de health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Rota de teste
app.get("/", (req, res) => {
  res.json({
    message: "Organize API rodando!",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      docs: "/api/docs",
    },
  });
});

app.get("/api/me", requireAuth, (req, res) => {
  res.json({
    message: "Bem-vindo ao seu perfil!",
    user: req.user, // Dados vindos do middleware
  });
});

app.use("/api/tasks", taskRoutes); // registro no prefixo /api/tasks

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor em http://localhost:${PORT}`);
  console.log(`Auth disponível em http://localhost:${PORT}/api/auth`);
});