const chalk = require("chalk");
const morgan = require("morgan");

const currentTime = require("../../utils/timeServise");

const morganLogger = morgan((token, req, res) => {
  const { year, month, day, hour, minute, second } = currentTime();
  const currentDate = `[${day}/${month}/${year} ${hour}:${minute}:${second}]`;
  if (token.status(req, res) >= 400)
    return chalk.redBright(
      [
        currentDate,
        token.method(req, res),
        token.status(req, res),
        token.url(req, res),
        "-",
        token["response-time"](req, res),
        "sm",
      ].join(" ")
    );

  return chalk.cyanBright(
    [
      token.date(req, res),
      token.method(req, res),
      token.status(req, res),
      token.url(req, res),
      "-",
      token["response-time"](req, res),
      "sm",
    ].join(" ")
  );
});

module.exports = morganLogger;
