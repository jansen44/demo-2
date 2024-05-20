const version = 2;

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(":: New request on /");
  res.json({ message: "Hi, from demo 2!", version });
});

app.listen(8000, () => {
  console.log("running on port 8000");
});
