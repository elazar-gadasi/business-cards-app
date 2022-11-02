const express = require("express");
const app = express();
const cors = require("cors");

const middellawer = () => {
  return app.use(
    cors({ origin: "http://127.0.0.1:5500", optionsSuccessStatus: 200 })
  );
};

module.exports = middellawer;