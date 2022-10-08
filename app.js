import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World 2");
});

app.listen(port, () => {
  console.log(`Application running ${port} on port`);
});
