// imports
const express = require("express");
const morgan = require("morgan");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Inventory service is running.");
});

app.post("/inventory", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});


app.listen(3001, () => console.log("Inventory service is running"));
