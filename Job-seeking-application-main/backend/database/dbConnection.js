import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "job_app_v2" })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(`Error in db :${err}`);
    });
};
