require("dotenv-safe").config();

import Koa from "koa";
import Router from "koa-router";
import { getEvent } from "./utils";

const PORT = process.env.PORT;

const server = async () => {
  const app = new Koa();
  const router = new Router();

  router.get("/", async (ctx) => {
    ctx.body = "Hello World.";
  });

  router.get("/api/events/:id", async (ctx) => {
    const eventId = parseInt(ctx.params.id);
    const event = await getEvent(eventId);
    ctx.body = event;
  });

  app.use(router.routes());

  app.listen(PORT, () => {
    console.log(`[Info]: server is running on port ${PORT}`);
  });
};

server();
