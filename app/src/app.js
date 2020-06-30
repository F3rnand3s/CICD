const express = require("src/node_modules/express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

app.get("/hello-world", (req, res) => {
  res.send('hello world');
});

module.exports = app;
