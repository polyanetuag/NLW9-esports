import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient({
    log: ["query"],
});

//ROTAS
//listagem de games
app.get("/games", async (request, response) => {
  const games = await prisma.game.findMany();

  return response.json(games);
});

//criar novo anúncio
app.post("/ads", (request, response) => {
  return response.status(201).json([]);
});

//listagem de anúncios por game
app.get("/games/:id/ads", (request, response) => {
  // const gameId = request.params.id

  return response.json([
    { id: 1, name: "Anúncio 1" },
    { id: 2, name: "Anúncio 2" },
    { id: 3, name: "Anúncio 3" },
  ]);
});

//buscar discord pelo Id do anúncio
app.get("/ads/:id/discord", (request, response) => {
  // const adId = request.params.id

  return response.json([]);
});

app.listen(3333);
