const jwt = require("jsonwebtoken");
const config = require("config");

const key = config.get("JWT_KEY");

const generatAuthToken = (user) => {
  const { _id, isBusiness, isAdmin } = user;
  const token = jwt.sign({ _id, isBusiness, isAdmin }, key);
  return token;
};

const verifyToken = (tokenFromClaient) => {
  try {
    const userDataFromPayload = jwt.verify(tokenFromClaient, key);
    return userDataFromPayload;
  } catch (error) {
    return null;
  }
};
exports.generatAuthToken = generatAuthToken;

exports.verifyToken = verifyToken;
