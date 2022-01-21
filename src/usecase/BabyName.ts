import {
  BabyNameRepository,
  initBabyNameRepository,
} from "@repository/BabyName";
import { BabyName } from "@src/domain/entity/BabyName";

export class BabyNameUseCase {
  private babyNameRepository: BabyNameRepository;

  constructor(babyNameRepository: BabyNameRepository) {
    this.babyNameRepository = babyNameRepository;
  }

  public getAllBabyNameNames = (): Promise<BabyName[]> => {
    return this.babyNameRepository.getAllBabyNameNames();
  };

  public getNameMostUsed = async (
    params: Partial<BabyName>,
  ): Promise<BabyName[]> => {
    const babyNames = await this.babyNameRepository.getNameMostUsed(params);

    return babyNames;
  };
}

export function initBabyNameUseCase(): BabyNameUseCase {
  const babyNameRepository = initBabyNameRepository();

  return new BabyNameUseCase(babyNameRepository);
}
