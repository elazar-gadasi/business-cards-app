const { default: mongoose } = require("mongoose");
const { handleBadRequest } = require("../../utils/errorHandelr");
const Card = require("./mongodb/card");
const config = require("config");

const DB = config.get("DB") || "MONGODB";

const getCards = async () => {
  if (DB === "MONGODB") {
    try {
      const cards = await Card.find();

      return Promise.resolve(cards);
    } catch (error) {
      error.status = 404;
      handleBadRequest("Mongoos", error);
    }
  }
  return Promise.resolve([]);
};

const getMyCards = async (userId) => {
  if (DB === "MONGODB") {
    try {
      const card = await Card.find({ user_id: userId });
      if (!card.length)
        throw new Error("could not find any card in the database");

      return Promise.resolve(card);
    } catch (error) {
      error.status = 404;
      handleBadRequest("Mongoos", error);
    }
  }
  return Promise.resolve([]);
};

const getCard = async (cardId) => {
  if (DB === "MONGODB") {
    try {
      const card = await Card.findById(cardId);
      if (!card) throw new Error("could not find this card in the database");

      return Promise.resolve(card);
    } catch (error) {
      error.status = 404;
      handleBadRequest("Mongoos", error);
    }
  }
  return Promise.resolve([]);
};

const createCard = async (rowCard) => {
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
const deleteCard = async (cardId) => {
  if (DB === "MONGODB") {
    try {
      const card = await Card.findOneAndDelete(cardId);
      if (!card) throw new Error("could not delete this card in the database");

      return Promise.resolve(card);
    } catch (error) {
      error.status = 404;
      handleBadRequest("Mongoos", error);
    }
  }
  return Promise.resolve("cardnot delete in database");
};
const updateCard = async (normalizeCard, id) => {
  if (DB === "MONGODB") {
    try {
      const card = Card.findByIdAndUpdate(id, normalizeCard, {
        new: true,
      });

      if (!card) throw new Error("could not update this card in the database");

      return Promise.resolve(card);
    } catch (error) {
      error.status = 404;
      handleBadRequest("Mongoos", error);
    }
  }
  return Promise.resolve("card delete not in mongodb");
};
const likeCard = async (idOfUser, idOfCard) => {
  if (DB === "MONGODB") {
    try {
      let card = await Card.findById(idOfCard);

      if (!card)
        throw new Error(
          "could not changecard likes whit this id in the database"
        );

      const findCard = card.likes.find((_id) => _id === idOfUser);

      if (!findCard) {
        card.likes.push(idOfUser);
        card = await card.save();
        return Promise.resolve(card);
      }

      let filterUser = card.likes.filter((_id) => _id !== idOfUser);

      card.likes = filterUser;
      card = card.save();

      return Promise.resolve(card);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("Card Updated!");
};

exports.getCards = getCards;
exports.deleteCard = deleteCard;
exports.likeCard = likeCard;
exports.updateCard = updateCard;
exports.createCard = createCard;
exports.getCard = getCard;
exports.getMyCards = getMyCards;
