// imports
const express = require("express");
const morgan = require("morgan");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Billing service is running.");
});

app.post("/billing", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});


app.listen(3000, () => console.log("Billing service is running"));
