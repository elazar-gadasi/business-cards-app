const express = require("express");
const app = express();
const router = require("./router/router");
const chalk = require("chalk");
const { handelError } = require("./utils/errorHandelr");
const cors = require("./middelwares/cors");
const logger = require("./logger/loggerService");
const connectToDb = require("./db/dbService");

app.use(cors);
app.use(logger);
app.use(express.json());
app.use(express.static("./public"));
app.use(router);

app.use((err, req, res, next) => {
  handelError(res, 500, err.message);
});

const PORT = 8181;
app.listen(PORT, () => {
  console.log(chalk.blue(`http://localhost:${PORT}`));
  connectToDb();
});
