const { default: mongoose } = require("mongoose");
const User = require("./mongodb/User");
const lodash = require("lodash");
const { handleBadRequest } = require("../../utils/errorHandelr");
const { compaerPassword } = require("../helpers/bcrypt");
const { assignWith } = require("lodash");

const config = require("config");
const { generatAuthToken } = require("../../auth/providers/jwt");

const DB = config.get("DB") || "MONGODB";

const getUsers = async () => {
  if (DB === "MONGODB") {
    try {
      const users = await User.find({}, { password: 0, __v: 0 });
      if (!users) throw new Error("users not defind");

      return Promise.resolve(users);
    } catch (error) {
      error.status = 404;
      handleBadRequest("mongoos", error);
    }
  }
  return Promise.resolve([]);
};

const getUser = async (id) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findById(id, { password: 0, __v: 0 });
      if (!user) throw new Error("user not defind");

      return Promise.resolve(user);
    } catch (error) {
      error.status = 404;
      handleBadRequest("mongoos", error);
    }
  }
  return Promise.resolve([]);
};
const registerUser = async (normalizeUser) => {
  if (DB === "MONGODB") {
    try {
      let { email } = normalizeUser;
      let user = await User.findOne({ email });

      if (user) throw new Error("user alredy register");

      user = new User(normalizeUser);

      await user.save();

      user = lodash.pick(user, ["email", "name", "_id"]);

      return Promise.resolve(user);
    } catch (error) {
      error.status = 404;
      handleBadRequest("mongoos", error);
    }
  }
  return Promise.resolve("user created no in mongo");
};

const loginUser = async (normalizeUser) => {
  if (DB === "MONGODB") {
    try {
      const { email, password } = normalizeUser;

      const user = await User.findOne({ email });

      if (!user) throw new Error("invali email or password");
      const validPassword = compaerPassword(password, user.password);

      if (!validPassword) throw new Error("invali email or password");
      const token = generatAuthToken(user);

      return Promise.resolve(token);
    } catch (error) {
      error.status = 404;
      handleBadRequest("mpngoos", error);
    }
  }
  return Promise.resolve("user create not in mongo");
};
const deleteUser = async (id) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findByIdAndDelete(id);
      if (!user) throw new Error("could on delet");

      return Promise.resolve(user);
    } catch (error) {
      error.status = 404;
      handleBadRequest("mongoos", error);
    }
  }
  return Promise.resolve("user delet no in mongo");
};

const updateUser = async (normalizeUser, id) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findByIdAndUpdate(id, normalizeUser, {
        new: true,
      }).select(["-password", "-__v"]);
      if (!user) throw new Error("could not update");
      return Promise.resolve(user);
    } catch (error) {
      error.status = 404;
      handleBadRequest("mongoos", error);
    }
  }
  return Promise.resolve("user update not in mongo");
};
const changeUserBusinessStatuse = async (id) => {
  if (DB === "MONGODB") {
    try {
      const pipeline = [{ $set: { isBusiness: { $not: "$isBusiness" } } }];
      const user = await User.findByIdAndUpdate(id, pipeline, {
        new: true,
      }).select(["-password", "-__v", "-isAdmin"]);

      console.log(user);
      if (!user) throw new Error("could not update isBusiness");
      return Promise.resolve(user);
    } catch (error) {
      error.status = 404;
      handleBadRequest("mongo", error);
    }
  }
  return Promise.resolve("no mongo");
};

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
exports.changeUserBusinessStatuse = changeUserBusinessStatuse;
