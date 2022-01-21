import mongoose, { Schema } from "mongoose";

export type BabyName = {
  state: string;
  gender: string;
  year: number;
  name: string;
  count: number;
};

const BabyNameSchema: Schema = new Schema(
  {
    state: String,
    gender: String,
    year: Number,
    name: String,
    count: Number,
  },
  {
    collection: "baby-names",
  },
);

export default mongoose.model<BabyName>("baby-names", BabyNameSchema);
