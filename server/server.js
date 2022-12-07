const express = require("express");
const app = express();
const router = require("./router/router");
const chalk = require("chalk");
const { handelError } = require("./utils/errorHandelr");
const cors = require("./middelwares/cors");
const logger = require("./logger/loggerService");
const connectToDb = require("./db/dbService");
const config = require("config");
const {
  generateInitialCards,
  generateInitialUsers,
} = require("./initialData/initalDataService");

app.use(cors);
app.use(logger);
app.use(express.json());
app.use(express.static("./public"));
app.use(router);

app.use((err, req, res, next) => {
  handelError(res, 500, err.message);
});

const PORT = config.get("PORT");
app.listen(PORT, () => {
  console.log(chalk.blue(`http://localhost:${PORT}`));
  connectToDb();
  // generateInitialCards();
  // generateInitialUsers();
});
