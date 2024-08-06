import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://mhdmusharrafedu:fgK9zjvpMQgFVUjE@cluster0.p6jcjfm.mongodb.net/food-delivery-app"
    )
    .then(() => console.log("DB Connected"));
};
