require("dotenv-safe").config();

import Koa from "koa";
import Router from "koa-router";

const PORT = process.env.PORT;

const server = async () => {
  const app = new Koa();
  const router = new Router();

  router.get("/api", async (ctx) => {
    ctx.body = "Hello World.";
  });

  app.use(router.routes());

  app.listen(PORT, () => {
    console.log(`[Info]: server is running on port ${PORT}`);
  });
};

server();
