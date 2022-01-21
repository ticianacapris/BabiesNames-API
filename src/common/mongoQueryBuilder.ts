import { FilterQuery } from "mongoose";

import { BabyName } from "@entity/BabyName";

type Filters = FilterQuery<BabyName>;

type Query<T> = Partial<
  Record<keyof T, (value: keyof T) => Filters | number | string>
>;

export default function mongoQueryBuilder<T>(
  params: T,
  query: Query<T>,
): Filters {
  const filters = Object.entries(params).reduce((filters, object) => {
    const [key, value] = object;

    if (key in query) {
      Object.assign(filters, { [key]: query[key](value) });
    }

    return filters;
  }, {} as Filters);

  return filters;
}
