const joi = require("joi");

const registerValidation = (user) => {
  const schema = joi.object({
    name: joi.object().keys({
      first: joi.string().min(2).max(256).required(),
      middle: joi.string().min(2).max(256).required().allow(""),
      last: joi.string().min(2).max(256).required(),
    }),
    isBusiness: joi.boolean().required(),

    phone: joi
      .string()
      .ruleset.regex(/^0[0-9]{1,2}(-?|s?)[0-9]{3}(-?|s?)[0-9]{4}/)
      .rule({ message: "key nust be standard phone number" })
      .required(),
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
    image: joi.object().keys({
      url: joi
        .string()
        .allow("")
        .ruleset.regex(/https:.+/)
        .rule({ message: "key nust be standard url string" })
        .required(),
      alt: joi.string().allow("").required(),
    }),
    address: joi.object().keys({
      state: joi.string().min(2).max(256).allow(""),
      country: joi.string().min(2).max(256).required(),
      city: joi.string().min(2).max(256).required(),
      street: joi.string().min(2).max(256).required(),
      houseNumber: joi.number().min(1).required(),
      zip: joi.number().min(4).required(),
    }),
  });
  return schema.validate(user);
};

module.exports = registerValidation;
