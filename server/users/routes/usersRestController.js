const express = require("express");
const router = express.Router();
const app = express();
const chalk = require("chalk");

// router.get("/", (req, res) => {
//   console.log(chalk.yellow("end point users"));
//   res.send("end point users");
// });
// app.use(router);

// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(chalk.yellow(`end point users${id}`));
//   res.send(`end point users${id}`);
// });
// app.use(router);

// router.post("/", (req, res) => {
//   console.log(chalk.yellow("end point users post"));
//   res.send("end point users post");
// });
// app.use(router);

// router.post("/login", (req, res) => {
//   console.log(chalk.yellow("end point users login"));
//   res.send("end point users login");
// });
// app.use(router);

// router.put("/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(chalk.yellow(`end point users${id}`));
//   res.send(`end point users${id}`);
// });
// app.use(router);

// router.patch("/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(chalk.yellow(`end point users patch${id}`));
//   res.send(`end point users patch${id}`);
// });
// app.use(router);

// router.delete("/:id", (req, res) => {
//   const user_id = req.params.id;
//   console.log(chalk.yellow(`end point user delide${user_id}`));
//   res.send(`end point user delide${user_id}`);
// });
// app.use(router);
router.get("/", (req, res) => {
  console.log(chalk.yellow("end arry of users"));
  return res.send([{}]);
});

module.exports = router;

// const PORT = 8585;
// app.listen(PORT, () => {
//   console.log(chalk.blue(`http://localhost:${PORT}`));
// });
