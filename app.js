import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import routes from "./server/routes";
import cors from "cors";
require('dotenv').config()

const port = 8088;
const app = express(); // setup express application
app.use(logger("dev")); // log requests to the console
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
routes(app);

app.get("/", (req, res) =>
  res.status(200).send({ message: "Welcome to the default Express API route" })
);

app.listen(port, function() {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
