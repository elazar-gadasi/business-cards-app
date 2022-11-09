const joi = require("joi");

const validateCard = (card) => {
  console.log(22);
  const schema = joi.object({
    title: joi.string().min(2).max(256).required(),
    subtitle: joi.string().min(2).max(256).required(),
    description: joi.string().min(2).max(1024).required(),
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
    web: joi
      .string()
      .ruleset.regex(/https:.+/)
      .rule({ message: "key nust be standard web string" })
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
    bizNumber: joi.number().allow("").required(),
    user_id: joi.string().allow(""),
  });
  return schema.validate(card);
};

module.exports = validateCard;
