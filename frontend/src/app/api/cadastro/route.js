import fs from "fs";
import path from "path";

export async function POST(req) {

  const { nome, sobrenome, email, senha } =
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

  // Verificar se email já existe
  const existe = users.find(
    (u) => u.email === email
  );

  if (existe) {
    return new Response(
      "Email já cadastrado",
      { status: 400 }
    );
  }

  users.push({
    nome,
    sobrenome,
    email,
    senha,
  });

  fs.writeFileSync(
    filePath,
    JSON.stringify(users, null, 2)
  );

  return new Response("OK", {
    status: 200,
  });

}