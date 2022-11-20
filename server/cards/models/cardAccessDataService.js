const { default: mongoose } = require("mongoose");
const Card = require("./mongodb/card");

const DB = process.env.DB || "MONGODB";

const find = async () => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve([{ card: "one" }]);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("no MONGODB");
};

const findMyCards = async (userId) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`my cards${userId}`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("no mongo");
};

const findOne = async (id) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`card no.${id}`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("no mongo");
};

const create = async (rowCard) => {
  if (DB === "MONGODB") {
    try {
      const card = new Card(rowCard);
      await card.save();

      return Promise.resolve(card);
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
      return Promise.resolve(`card no. ${id} deleted`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("no mongo");
};
const update = async (card, id) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`card no. ${id} updated`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("no mongo");
};
const like = async (idOfUser, idOfCard) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`card no. ${idOfCard} liked`);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("no mongo");
};

exports.find = find;
exports.remove = remove;
exports.like = like;
exports.update = update;
exports.create = create;
exports.findOne = findOne;
exports.findMyCards = findMyCards;
