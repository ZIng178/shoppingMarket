const express = require("express");
const env = require("dotenv");
const app = express();

env.config();

app.listen(process.env.PORT, () => {
  console.log(`Server is lstening on port ${process.env.PORT}`);
});

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello from server ",
  });
});

app.post("/data", (req, res, next) => {
  res.status(200).json({
    message: req.body,
  });
});
