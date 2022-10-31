const express = require("express");
const app = express();
const router = express.Router();
const chalk = require("chalk");

router.get("/", (req, res) => {
  console.log(chalk.yellow("end point"));
  res.send("end point");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(chalk.yellow(`end point ${id}`));
  res.send(`end point ${id}`);
});

router.post("/", (req, res) => {
  console.log(chalk.yellow("end point post"));
  res.send("end point post");
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  console.log(chalk.yellow(`end point ${id}`));
  res.send(`end point ${id}`);
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  console.log(chalk.yellow(`end point ${id}`));
  res.send(`end point ${id}`);
});

router.delete("/:id", (req, res) => {
  const card_id = req.params.id;
  console.log(chalk.yellow(`in delite ${card_id}`));
  res.send(`in delite ${card_id}`);
});

router.get("/", (req, res) => {
  console.log(chalk.yellow("end arry of users"));
  return res.send([{}]);
});

module.exports = router;
