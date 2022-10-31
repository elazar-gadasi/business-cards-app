const express = require("express");
const router = express.Router();

const cardsRestController = require("../cards/routes/cardsRestController");
const usersRestController = require("../users/routes/usersRestController");

router.use("/users", usersRestController);
router.use("/cards", cardsRestController);

module.exports = router;
