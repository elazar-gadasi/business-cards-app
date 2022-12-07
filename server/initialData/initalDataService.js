const chalk = require("chalk");
const { createCard } = require("../cards/models/cardAccessDataService");
const { registerUser } = require("../users/models/userAccessDataService");
const data = require("./initialData.json");

const generateInitialCards = async () => {
  const { cards } = data;

  cards.forEach(async (card) => {
    try {
      await createCard(card);
      return;
    } catch (error) {
      console.log(chalk.redBright(error.message));
      return;
    }
  });
};

const generateInitialUsers = async () => {
  const { users } = data;

  users.forEach(async (user) => {
    try {
      await registerUser(user);
      return;
    } catch (error) {
      console.log(chalk.redBright(error.message));
      return;
    }
  });
};

exports.generateInitialCards = generateInitialCards;
exports.generateInitialUsers = generateInitialUsers;
