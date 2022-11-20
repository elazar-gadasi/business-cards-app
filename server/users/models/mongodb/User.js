const mongoose = require("mongoose");
const Address = require("./address");
const Image = require("./image");

const Name = require("./name");

const userSchema = new mongoose.Schema({
  name: Name,
  phone: {
    type: String,
    required: true,
    match: RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/),
  },
  email: {
    type: String,
    required: true,
    match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
    lowercase: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  image: Image,
  address: Address,
  isBusiness: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("user", userSchema);

module.exports = User;
