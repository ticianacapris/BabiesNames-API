import "dotenv/config";

import { createRouter } from "@driver/http/express";
import api from "@src/delivery/api";
import { initMongoDB } from "@src/driver/database/mongodb";

async function main() {
  const { router } = createRouter();

  const PORT = Number(process.env.PORT);
  const HOST = process.env.SERVER_HOST;

  api.init(router);

  router.listen(PORT, () => {
    console.log(
      `🍼 BabyNames API is running at ${HOST}:${PORT} in ${process.env.NODE_ENV} mode`,
    );
  });
}

async function run() {
  try {
    await initMongoDB();

    main();
  } catch (error) {
    console.log("😭 Error when starting server", { error: error.message });
  }
}

run();
