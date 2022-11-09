const loginValidation = require("./joi/loginValidation");
const registerValidation = require("./joi/registerValidation");
const userUpdateValidation = require("./joi/userUpdateValidation");

const validator = "joi" || undefined;

const validateRegisteration = (user) => {
  if (validator === "joi") return registerValidation(user);
};

const validateLogin = (user) => {
  if (validator === "joi") return loginValidation(user);
};

exports.validateRegisteration = validateRegisteration;
exports.validateLogin = validateLogin;
