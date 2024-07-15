// Password 7MfDopZACDZiy2vR mail :deepak8367

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Mongoose Connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(port, () => {
  console.log("App Working Man");
});