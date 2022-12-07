const mongoose = require("mongoose");
const chalck = require("chalk");

mongoose
  .connect("mongodb://localhost:27017/elazar_business_card_app")
  .then(() =>
    console.log(chalck.magentaBright("connect succes mongodb localy"))
  )
  .catch((error) =>
    console.log(chalck.redBright.bold(`coult not connect mongodb ${error}`))
  );
