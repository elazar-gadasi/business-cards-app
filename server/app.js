const express = require("express");
const app = express();
const router = require("./router/router");
const chalk = require("chalk");
const { handelError } = require("./utils/errorHandelr");
app.use(express.json());
app.use(express.static("./public"));
const middellawer = require("./utils/middelwares/cors");
app.use(router);
// app.get("/", (req, res) => {
//   // try {
//   //   throw new Error("u ave error");
//   // } catch (error) {
//   //   return handelError(res, 404, error.message);
//   // }
//   const query = req.query;
//   query.user = { sasa: "sas" };
//   if (query.user) return res.send(query);
//   return res.send("no query");
// });

// app.post("/", (req, res) => {
//   res.status(201).send(req.body);
// });
// app.get("/", (req, res, next) => {
//   res.send("in listner");
// });

app.use((err, req, res, next) => {
  handelError(res, 500, err.message);
});

const PORT = 8181;
app.listen(PORT, () => console.log(chalk.blue(`http://localhost:${PORT}`)));
