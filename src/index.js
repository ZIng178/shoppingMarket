const express = require("express");
const env = require("dotenv");
const app = express();

const mongoose = require("mongoose");

env.config();

// Routes

const authRoutes = require("../src/routes/admin/auth");
const adminRoutes = require("../src/routes/admin/auth");
const categoryRoutes = require("../src/routes/categories");

// Mongo Connection

//mongodb+srv://Wangdi:<password>@shoppingcluster.mg2uo.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@shoppingcluster.mg2uo.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Database Connected");
  });

app.use(express.json());

app.use("/api", authRoutes);

app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);

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
