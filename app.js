import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

//connection to the DB
conn();

//ejs template engine
app.set("view engine", "ejs");

//static file miidleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log(`Application running ${port} on port`);
});
