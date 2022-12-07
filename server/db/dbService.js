const config = require("config");

const ENVIRONMENT = config.get("NODE_ENV");

const connectToDb = () => {
  if (ENVIRONMENT === "development") require("./mongodb/connectToMongoLocally");
  if (ENVIRONMENT === "protuction") require("./mongodb/connectToAtlas");
};

module.exports = connectToDb;
