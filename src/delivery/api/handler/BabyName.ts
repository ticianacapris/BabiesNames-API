/* eslint-disable no-param-reassign */
import { Request, Response } from "express";

import { initRouter, ExpressInstance } from "@driver/http/express";
import parseQuery from "@src/common/parseQuery";
import { BabyName } from "@src/domain/entity/BabyName";
import { BabyNameUseCase, initBabyNameUseCase } from "@usecase/BabyName";

type HandlerConstructor = {
  router: ExpressInstance;
  babyNameUseCase: BabyNameUseCase;
};

class BabyNameHandler {
  private babyNameUseCase: BabyNameUseCase;

  constructor({ router, babyNameUseCase }: HandlerConstructor) {
    this.babyNameUseCase = babyNameUseCase;

    router.get("/names", this.getAllBabyNameNames);
    router.get("/names/ranking", this.getNameMostUsed);
  }

  public getAllBabyNameNames = async (request: Request, response: Response) => {
    const babyNames = await this.babyNameUseCase.getAllBabyNameNames();

    return response.json(babyNames);
  };

  public getNameMostUsed = async (request: Request, response: Response) => {
    const { name, gender, year, state } = request.query as Partial<BabyName>;

    const params = parseQuery<BabyName>({
      name,
      gender,
      year,
      state,
    });

    const babyNames = await this.babyNameUseCase.getNameMostUsed(params);

    return response.json(babyNames);
  };
}

export function initBabyNameHandler(): BabyNameHandler {
  const router = initRouter();
  const babyNameUseCase = initBabyNameUseCase();

  return new BabyNameHandler({ router, babyNameUseCase });
}
