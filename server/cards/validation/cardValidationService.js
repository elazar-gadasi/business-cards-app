const validateCardWithJoi = require("./joi/validetCardwithJoi");

const validator = "joi" || undefined;

const validateCard = (card) => {
  if (validator === "joi") return validateCardWithJoi(card);
};

module.exports = validateCard;
