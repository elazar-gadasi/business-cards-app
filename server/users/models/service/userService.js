const loginValidation = require("../../validation/joi/loginValidation");
const registerValidation = require("../../validation/joi/registerValidation");
const {
  find,
  findOne,
  create,
  login,
  update,
  remove,
  changeIsBizStatuse,
} = require("../userAccessDataService");

const getUsers = async () => {
  try {
    const users = await find();
    return Promise.resolve(users);
  } catch (error) {
    Promise.reject(error);
  }
};
const getUser = async (id) => {
  try {
    const user = await findOne(id);
    return Promise.resolve(user);
  } catch (error) {
    Promise.reject(error);
  }
};
const registerUser = async (rowUser) => {
  try {
    const { error } = registerValidation(rowUser);
    console.log(error);
    if (error) return Promise.reject(error.details[0].message);
    console.log("success!!!");
    let user = { ...rowUser };
    user = await create(user);
    return Promise.resolve(user);
  } catch (error) {
    Promise.reject(error);
  }
};
const loginUser = async (rowUser) => {
  try {
    const { error } = loginValidation(rowUser);
    if (error) return Promise.reject(error.details[0].message);
    console.log("success!");
    let user = { ...rowUser };
    user = await login(user);
    return Promise.resolve(user);
  } catch (error) {
    Promise.reject(error);
  }
};
const updateUser = async (rowUser, id) => {
  try {
    let user = { ...rowUser };
    user = await update(rowUser, id);
    return Promise.resolve(user);
  } catch (error) {
    Promise.reject(error);
  }
};
const deleteUser = async (id) => {
  try {
    const user = await remove(id);
    return Promise.resolve(user);
  } catch (error) {
    Promise.reject(error);
  }
};
const changeUserBusinessStatuse = async (id) => {
  try {
    const user = await changeIsBizStatuse(id);
    return Promise.resolve(user);
  } catch (error) {
    Promise.reject(error);
  }
};

exports.getUser = getUser;
exports.getUsers = getUsers;
exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.changeUserBusinessStatuse = changeUserBusinessStatuse;
