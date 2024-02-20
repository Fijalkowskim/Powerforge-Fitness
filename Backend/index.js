import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBUrl } from "./config.js";
import progressRoute from "./routes/progressRoute.js";

const app = express();
app.use(express.json());
app.get(`/`, (req, res) => {
  return res.status(200).send("App is working");
});

app.use("/progress", progressRoute);

mongoose
  .connect(mongoDBUrl)
  .then(() => {
    console.log(`App connected to database`);
    app.listen(PORT, () => {
      console.log(`App is listening at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
