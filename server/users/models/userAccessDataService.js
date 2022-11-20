let User = require("./mongodb/User");

const DB = process.env.DB || "MONGODB";

const find = async () => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve([{ user: "one" }]);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("no MONGODB");
};

const findOne = async (id) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no.${id}`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("no mongo");
};
const registerUser1 = async (rowUser) => {
  if (DB === "MONGODB") {
    try {
      console.log(1);
      let user = new User(rowUser);
      console.log(2);
      await user.save();
      return Promise.resolve(user);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("no mongo");
};

const login = async (user) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(user);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("no mongo");
};
const remove = async (id) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no. ${id} deleted`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("no mongo");
};

const update = async (user, id) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no. ${id} updated`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("no mongo");
};
const changeIsBizStatuse = async (id) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`card no. ${id} isBusiness!`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("no mongo");
};

exports.find = find;
exports.findOne = findOne;
exports.registerUser1 = registerUser1;
exports.login = login;
exports.remove = remove;
exports.update = update;
exports.changeIsBizStatuse = changeIsBizStatuse;
