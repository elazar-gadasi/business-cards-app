const Card = require("../models/mongodb/card");
const lodash = require("lodash");
const { handleBadRequest, handelError } = require("../../utils/errorHandelr");

const generateBizNumber = async () => {
  try {
    const random = lodash.random(1_000_000, 9_000_000);
    const card = Card.findOne({ bizNumber: random }, { bizNumber: 1, _id: 0 });
    if (card) return generateBizNumber();
    return random;
  } catch (error) {
    handleBadRequest("generatBizNumber", error);
  }
};
exports.generateBizNumber = generateBizNumber;

const generateBizNumberFromAdmin = async (number) => {
  try {
    const card = await Card.findOne(
      { bizNumber: number },
      { bizNumber: 1, _id: 1 }
    );

    if (card)
      throw new Error("Authorization Error: we sory but the number is busy");

    return number;
  } catch (error) {
    handleBadRequest("generatBizNumber", error);
  }
};
exports.generateBizNumberFromAdmin = generateBizNumberFromAdmin;
