const mongoose = require("mongoose");
const chalck = require("chalk");
const config = require("config");

const userName = config.get("DB_NAME");
const userPassword = config.get("DB_PASSWORD");

mongoose
  .connect(
    `mongodb+srv://${userName}:${userPassword}@cluster0.07ddhhg.mongodb.net/test`
  )
  .then(() => console.log(chalck.magentaBright("connect succes mongodb atlas")))
  .catch((error) =>
    console.log(chalck.redBright.bold(`coult not connect mongodb ${error}`))
  );
