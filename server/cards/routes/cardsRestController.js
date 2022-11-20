const express = require("express");
const { handelError } = require("../../utils/errorHandelr");
const app = express();
const router = express.Router();
const chalk = require("chalk");
const {
  getCards,
  getMyCards,
  createCard,
  deleteCard,
  updateCard,
  likeCard,
} = require("../models/service/cardService");

router.get("/", async (req, res) => {
  try {
    const cards = await getCards();
    return res.send(cards);
  } catch (error) {
    const { status } = error;
    handelError(res, status || 404, error.message);
  }
});
router.get("/my-cards", async (req, res) => {
  try {
    const userId = "770770";
    const card = await getMyCards(userId);
    return res.send(card);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const card = await getCards(id);
    return res.send(card);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const card = await createCard(req.body);

    return res.status(201).send(card);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const card = await updateCard(req.body, id);

    return res.send(card);
  } catch (error) {
    const { status } = error;
    handelError(res, status || 500, error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userId = "123456";
    const card = await likeCard(userId, id);
    return res.send(card);
  } catch (error) {
    const { status } = error;
    handelError(res, status || 500, error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const card = await deleteCard(id);

    return res.send(card);
  } catch (error) {
    const { status } = error;
    handelError(res, status || 500, error.message);
  }
});

module.exports = router;
