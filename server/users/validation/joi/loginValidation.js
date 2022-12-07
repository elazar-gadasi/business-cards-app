const joi = require("joi");

const loginValidation = (user) => {
  const schema = joi.object({
    email: joi
      .string()
      .ruleset.regex(/.+@.+\..{2,}/)
      .rule({ message: "key nust be standard email string" })
      .required(),
    password: joi
      .string()
      .ruleset.regex(
        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
      )
      .rule({ message: "key nust be standard password string" })
      .required(),
  });
  return schema.validate(user);
};

module.exports = loginValidation;
