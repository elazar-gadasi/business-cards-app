const express = require("express");
const app = express();

const chalk = require("chalk");
console.log(chalk.green("in app"));

app.get("/", (req, res, next) => {
  res.send("in listner");
});

const PORT = 8181;
app.listen(PORT, () => console.log(chalk.blue(`http://localhost:${PORT}`)));
