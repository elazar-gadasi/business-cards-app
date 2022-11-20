const ENVIRONMENT = "prod";

const connectToDb = () => {
  if (ENVIRONMENT === "dev") require("./mongodb/connectToMongoLocally");
  if (ENVIRONMENT === "prod") require("./mongodb/connectToAtlas");
};

module.exports = connectToDb;
