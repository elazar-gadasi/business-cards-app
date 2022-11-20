const {
  find,
  findMyCards,
  findOne,
  create,
  update,
  remove,
  like,
} = require("../cardAccessDataService");
const validateCard = require("../../validation/cardValidationService");
const { handleJoiError } = require("../../../utils/errorHandelr");
const normalizeCard = require("../../helpers/normalizeCard");

const getCards = async () => {
  try {
    const cards = await find();
    return Promise.resolve(cards);
  } catch (error) {
    Promise.reject(error);
  }
};
const getMyCards = async (userId) => {
  try {
    const card = await findMyCards(userId);
    return Promise.resolve(card);
  } catch (error) {
    Promise.reject(error);
  }
};

const getCard = async (id) => {
  try {
    const card = await findOne(id);
    return Promise.resolve(card);
  } catch (error) {
    Promise.reject(error);
  }
};
const createCard = async (rowCard) => {
  try {
    const { error } = validateCard(rowCard);

    if (error) return handleJoiError(error);

    rowCard.createdAt = new Date();
    let card = normalizeCard(rowCard);

    card = create(rowCard);

    return Promise.resolve(card);
  } catch (error) {
    Promise.reject(error);
  }
};
const updateCard = async (rowCard, id) => {
  try {
    let card = { ...rowCard };

    card = await update(card, id);
    return Promise.resolve(card);
  } catch (error) {
    Promise.reject(error);
  }
};
const deleteCard = async (id) => {
  try {
    card = await remove(id);
    return Promise.resolve(card);
  } catch (error) {
    Promise.reject(error);
  }
};

const likeCard = async (userId, cardId) => {
  try {
    card = await like(userId, cardId);
    return Promise.resolve(card);
  } catch (error) {
    Promise.reject(error);
  }
};

exports.deleteCard = deleteCard;
exports.likeCard = likeCard;
exports.updateCard = updateCard;
exports.createCard = createCard;
exports.getCards = getCards;
exports.getCard = getCard;
exports.getMyCards = getMyCards;
