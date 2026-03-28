import fs from "fs";
import path from "path";

export async function POST(req) {

  const { email, senha } =
    await req.json();

  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "users.json"
  );

  const users = JSON.parse(
    fs.readFileSync(filePath)
  );

  const user = users.find(
    (u) =>
      u.email === email &&
      u.senha === senha
  );

  if (user) {

    return new Response(
      JSON.stringify({
        nome: user.nome
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  }

  return new Response(
    "Login inválido",
    { status: 401 }
  );

}