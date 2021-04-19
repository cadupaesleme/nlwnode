import express, { response } from "express";

const app = express();

/**
 * GET = Buscas
 * POST = Criar
 * PUT
 *
 */

app.get("/", (request, response) => {
  return response.json({ message: "Olá NLW05" });
});

app.post("/", (request, response) => {
  return response.json({ message: "Usuário salvo!!" });
});

app.listen(3333, () => console.log("Servidor rodando na porta 3333"));
