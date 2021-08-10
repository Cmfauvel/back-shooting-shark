/** @format */

require("dotenv").config();
const express = require("express");
const app = express();

// const cookieParser = require("cookie-parser");
// app.use(cookieParser());
const cors = require("cors");
const db = require("./models");
const api = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./generateurCitations"));

app.use(
  cors({
    origin: "https://shooting-words.herokuapp.com",
    credentials: true,
    // allowedHeaders: "origin",
    // methods: "GET, POST"
  })
);
let port = "https://shooting-words.herokuapp.com" || 3000;
app.use("/api", api);

//.sync({ force: true })
db.sequelize.sync().then((req) => {
  app.listen(port, () => {
    console.log("server running");
  });
});