import mongoQueryBuilder from "@src/common/mongoQueryBuilder";
import BabyName, {
  BabyName as BabyNameType,
} from "@src/domain/entity/BabyName";

export class BabyNameRepository {
  public getAllBabyNameNames = async (): Promise<BabyNameType[]> => {


    const babyNames = await BabyName.find().limit(100000);

    return babyNames as BabyNameType[];
  };

  public getNameMostUsed = async (
    params: Partial<BabyNameType>,
  ): Promise<BabyNameType[]> => {
    const filters = mongoQueryBuilder<typeof params>(params, {
      name: name => ({ $regex: name }),
      state: state => ({ $regex: state }),
      gender: gender => gender,
      year: year => year,
    });

    const babyNames = await BabyName.find(filters).sort({ count: -1 }).limit(5);

    return babyNames as BabyNameType[];
  };
}

export function initBabyNameRepository(): BabyNameRepository {
  return new BabyNameRepository();
}
