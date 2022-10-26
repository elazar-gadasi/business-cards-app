const chalk = require("chalk");

const handelError = (res, status, message) => {
  console.log(chalk.redBright(message));
  res.status(status).send(message);
};

exports.handelError = handelError;
