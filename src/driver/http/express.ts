import express from "express";

export type ExpressInstance = express.Application;

let router: ExpressInstance;

export function createRouter(): {
  router: ExpressInstance;
} {
  if (router) {
    throw new Error("HTTP router already created");
  }

  router = express();

  return { router };
}

export function initRouter(): ExpressInstance {
  if (!router) {
    throw new Error("HTTP router not created");
  }

  return router;
}
