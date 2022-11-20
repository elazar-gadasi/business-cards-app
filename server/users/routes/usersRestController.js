const express = require("express");
const router = express.Router();
const { registerUser1 } = require("../models/userAccessDataService");
const {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  updateUser,
  changeUserBusinessStatuse,
  deleteUser,
} = require("../models/service/userService");
const { handelError } = require("../../utils/errorHandelr");
const normalizeUser = require("../helpers/NormalizeUser");
const {
  validateRegisteration,
} = require("../validation/userValidationService");

router.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    return res.send(users);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUser(id);

    return res.send(user);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    let user = req.body;
    const { error } = validateRegisteration(user);
    if (error)
      return handelError(error, 400, `Joi Error: ${error.details[0].message}`);
    user = await normalizeUser(user);
    console.log(user);
    user = await registerUser1(user);
    console.log(user);

    return res.status(201).send(user);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await loginUser(req.body);
    return res.send(user);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await updateUser(req.body, id);

    return res.send(user);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await changeUserBusinessStatuse(id);

    return res.send(user);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await deleteUser(id);

    return res.send(user);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

module.exports = router;
