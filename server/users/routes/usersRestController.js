const express = require("express");
const router = express.Router();

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

router.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUser(id);

    res.send(user);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).send(user);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await loginUser(req.body);
    res.send(user);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await updateUser(req.body, id);

    res.send(user);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await changeUserBusinessStatuse(id);

    res.send(user);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await deleteUser(id);

    res.send(user);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

module.exports = router;
