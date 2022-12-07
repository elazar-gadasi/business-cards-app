const express = require("express");
const { handelError, handleJoiError } = require("../../utils/errorHandelr");
const app = express();
const router = express.Router();
const chalk = require("chalk");

const {
  getCards,
  getMyCards,
  getCard,
  createCard,
  updateCard,
  deleteCard,
  likeCard,
} = require("../models/cardAccessDataService");
const normalizeCard = require("../helpers/normalizeCard");
const validateCard = require("../validation/joi/validetCardwithJoi");
const auth = require("../../auth/authService");
const Card = require("../models/mongodb/card");
const { generateBizNumberFromAdmin } = require("../helpers/generateBizNumber");

router.get("/", async (req, res) => {
  try {
    const cards = await getCards();
    return res.send(cards);
  } catch (error) {
    const { status } = error;
    handelError(res, status || 404, error.message);
  }
});

router.get("/my-cards", auth, async (req, res) => {
  try {
    console.log(req.user.isBusiness);
    const { _id, isBusiness } = req.user;
    console.log(isBusiness);
    if (!isBusiness)
      return handelError(
        res,
        403,
        "Authorization Error: You must be an isBusiness type user see this cards"
      );
    const card = await getMyCards(_id);
    return res.send(card);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const card = await getCard(id);
    return res.send(card);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.post("/", auth, async (req, res) => {
  try {
    let card = req.body;
    const { _id, isBusiness } = req.user;
    card.user_id = _id;

    if (!isBusiness)
      return handelError(
        res,
        403,
        "Authorization Error: You must be an isBusiness type user for create cards"
      );

    const { user_id } = card;

    const { error } = validateCard(card);

    if (error)
      return handelError(res, 400, `Joi Error: ${error.details[0].message}`);

    card = normalizeCard(card, user_id);

    card = await createCard(req.body);

    return res.status(201).send(card);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    let card = req.body;
    const { id } = req.params;
    const user = req.user;

    const cardData = await Card.findOne({ _id: id });

    if (!user.isBusiness && user._id != cardData.user_id) {
      return handelError(
        res,
        403,
        "Authorization Error: You must be an isBusiness type user or the update user to user"
      );
    }

    const { error } = validateCard(card);
    if (error)
      return handelError(res, 400, `Joi Error: ${error.details[0].message}`);

    card = await normalizeCard(card, user._id);
    card = await updateCard(card, id);

    return res.send(card);
  } catch (error) {
    const { status } = error;
    handelError(res, status || 500, error.message);
  }
});

router.patch("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;
    const card = await likeCard(user._id, id);
    return res.send(card);
  } catch (error) {
    const { status } = error;
    handelError(res, status || 500, error.message);
  }
});

router.patch("/number/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;
    const { isAdmin } = user;
    if (!isAdmin)
      return handelError(
        res,
        403,
        "Authorization Error: You must be an isAdmin type user for create number"
      );

    const bizNumber = await generateBizNumberFromAdmin(133223);
    if (!bizNumber)
      return handelError(
        res,
        403,
        "Authorization Error: we sory but the number is busy"
      );
    const cardUpdata = await Card.findByIdAndUpdate(
      id,
      { bizNumber: bizNumber },
      { new: true }
    );
    // cardUpdata.bizNumber = bizNumber;

    return res.send(cardUpdata);
  } catch (error) {
    const { status } = error;
    handelError(res, status || 500, error.message);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const cardData = await Card.findById(id);
    const { isAdmin, _id } = req.user;

    if (_id != cardData.user_id && !isAdmin) {
      return handelError(
        res,
        403,
        "Authorization Error: You must be an isAdmin type or user to delete"
      );
    }
    const card = await deleteCard(id);

    return res.send(card);
  } catch (error) {
    const { status } = error;
    handelError(res, status || 500, error.message);
  }
});

module.exports = router;
