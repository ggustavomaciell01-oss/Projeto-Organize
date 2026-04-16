import express from "express";
import cors from "cors";

import auth from "./lib/auth.js";
import protectedRoutes from "./routes/protectedRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", auth.handler);
app.use("/api", protectedRoutes);

app.get("/", (req, res) => {
  res.send("API rodando ");
});

export default app;