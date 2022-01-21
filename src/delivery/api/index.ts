import cors from "cors";
import { Request, Response } from "express";

import { ExpressInstance } from "@driver/http/express";

import { initBabyNameHandler } from "./handler/BabyName";

function defineMiddlewares(router: ExpressInstance): void {
  router.use(cors());

  router.get("/health", (_: Request, res: Response) => {
    res.send("I'm ok 👶");
  });
}

function defineHandlers() {
  initBabyNameHandler();
}

function init(router: ExpressInstance): void {
  defineMiddlewares(router);
  defineHandlers();
}

export default { init };
