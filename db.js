import mongoose from "mongoose";

const conn = () => {
  mongoose
    .connect(process.env.DB_URL, {
      dbName: "photographSocialNetwork",
      userNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to the DB succesfully");
    })
    .catch((err) => console.log(`DB connection err:, ${err}`));
};

export default conn;
