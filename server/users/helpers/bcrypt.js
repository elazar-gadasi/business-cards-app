const bcrypt = require("bcryptjs");

const generateUserPassword = (password) => bcrypt.hashSync(password, 10);

const compaerPassword = (password, anotherPassword) => {
  return bcrypt.compareSync(password, anotherPassword);
};

exports.generateUserPassword = generateUserPassword;
exports.compaerPassword = compaerPassword;
