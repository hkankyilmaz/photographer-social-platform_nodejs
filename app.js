import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import pageRoute from "./routes/pageRoutes.js";
import photoRoute from "./routes/photoRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

//connection to the DB
conn();

//ejs template engine
app.set("view engine", "ejs");

//static file miidleware
app.use(express.static("public"));

//routes
app.use("/", pageRoute);
app.use("about", pageRoute);
app.use("/photos", photoRoute);

app.listen(port, () => {
  console.log(`Application running ${port} on port`);
});
