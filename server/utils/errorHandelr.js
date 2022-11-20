const chalk = require("chalk");

const handelError = (res, status, message) => {
  console.log(chalk.redBright(message));
  res.status(status).send(message);
};

const handleBadRequest = async (validator, error) => {
  const errorMessage = `${validator} Error: ${error.message}`;
  error.message = errorMessage;
  error.status = error.status || 400;
  return Promise.reject(error);
};

const handleJoiError = async (error) => {
  const joiError = new Error(error.details[0].message);
  return handleBadRequest("Joi", joiError);
};

exports.handleBadRequest = handleBadRequest;
exports.handleJoiError = handleJoiError;

exports.handelError = handelError;
