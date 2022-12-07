const express = require("express");
const router = express.Router();
const {
  registerUser,
  getUsers,
  getUser,
  loginUser,
  updateUser,
  deleteUser,
  changeUserBusinessStatuse,
} = require("../models/userAccessDataService");

const { handelError } = require("../../utils/errorHandelr");
const normalizeUser = require("../helpers/NormalizeUser");
const {
  validateRegisteration,
} = require("../validation/userValidationService");
const loginValidation = require("../validation/joi/loginValidation");
const { generateUserPassword } = require("../helpers/bcrypt");
const auth = require("../../auth/authService");
const User = require("../models/mongodb/User");

router.get("/", auth, async (req, res) => {
  try {
    const { isAdmin } = req.user;

    if (!isAdmin)
      return handelError(
        res,
        403,
        "Authorization Error: You must be an admin user to see all users in the database"
      );
    const users = await getUsers();
    return res.send(users);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const { _id, isAdmin } = req.user;
    const { id } = req.params;
    if (id !== _id && !isAdmin)
      return handelError(
        res,
        403,
        "Authorization Error: You must be an admin type user or the registered user to see this user"
      );
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

    user.password = generateUserPassword(user.password);

    user = await registerUser(user);

    return res.status(201).send(user);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    let user = req.body;
    const { error } = loginValidation(user);
    if (error)
      return handelError(error, 400, `Joi Error: ${error.details[0].message}`);

    user = await loginUser(req.body);
    return res.send(user);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { isAdmin, _id } = req.user;

    if (id != _id && !isAdmin)
      return handelError(
        res,
        403,
        "Authorization Error: You must be an the registered user to change this user"
      );
    let user = req.body;
    const { error } = validateRegisteration(user);
    if (error)
      return handelError(error, 400, `Joi Error: ${error.details[0].message}`);
    user = await normalizeUser(user);

    user = await updateUser(user, id);

    return res.send(user);
  } catch (error) {
    const { status } = error;
    handelError(res, status || 500, error.message);
  }
});

router.patch("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { isAdmin, _id } = req.user;

    if (id !== _id && !isAdmin)
      return handelError(
        res,
        403,
        "Authorization Error: You must be an the registered user to change this user"
      );
    const user = await changeUserBusinessStatuse(id);

    return res.send(user);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { isAdmin, _id } = req.user;

    if (id !== _id && !isAdmin)
      return handelError(
        res,
        403,
        "Authorization Error: You must be an the registered user to delete this user"
      );
    const user = await deleteUser(id);

    return res.send(user);
  } catch (error) {
    const { status } = error;

    handelError(res, status || 500, error.message);
  }
});

module.exports = router;
