import mongoose from "mongoose";

export async function initMongoDB(): Promise<void> {
  await mongoose.connect(process.env.MONGO_URL_CONNECTION);
}
