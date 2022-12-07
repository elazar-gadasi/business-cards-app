const { verifyToken } = require("./providers/jwt");
const config = require("config");
const { handelError } = require("../utils/errorHandelr");

const tokenGenerator = config.get("TOKEN_GENERATOR") || "jwt";

const auth = (req, res, next) => {
  if (tokenGenerator === "jwt") {
    try {
      const tokenFromClient = req.header("x-auth-token");

      if (!tokenFromClient)
        throw new Error("Authentication Error: Please Login");
      const userInfo = verifyToken(tokenFromClient);

      if (!userInfo) throw new Error("Authentication Error: Unauthorize user");

      req.user = userInfo;
      return next();
    } catch (error) {
      handelError(res, 401, error.message);
    }
  }
  if (tokenGenerator !== "jwt") {
    handelError(res, 500, "you don't use jet");
  }
};

module.exports = auth;
