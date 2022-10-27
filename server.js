const express = require("express");
const fs = require("fs");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/static", express.static("public"));

// const <route> = require('./routes/<route>');

// app.use("/", <route>);

app.get("/", (req, res) => {
  console.log("Welcome! I am, but a useless server. Give me purpose!");
  res.json(
    "Connection successful, but I have nothing more to give than my validation"
  );
});

const PORT = process.env.PORT ?? 8080;

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
