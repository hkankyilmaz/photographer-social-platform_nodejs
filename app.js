import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import pageRoute from "./routes/pageRoutes.js";
import photoRoute from "./routes/photoRoutes.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import { checkUser } from "./middlewares/authMiddleware.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

//connection to the DB
conn();

//ejs template engine
app.set("view engine", "ejs");

//static file miidleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use("*", checkUser);
app.use("/", pageRoute);
app.use("about", pageRoute);
app.use("/photos", photoRoute);
app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`Application running ${port} on port`);
});
