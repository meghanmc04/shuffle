const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public/")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./api"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

