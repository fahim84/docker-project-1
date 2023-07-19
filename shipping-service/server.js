// imports
const express = require("express");
const morgan = require("morgan");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

// GET API
app.get("/", (req, res) => {
  res.send("Shipping service is running.");
});

// POST API
app.post("/shipping", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});


app.listen(3002, () => console.log("Shipping service is running"));
