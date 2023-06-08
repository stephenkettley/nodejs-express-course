const express = require("express");
const app = express();
const { products } = require("./data");
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res

app.use([logger, authorize]); // this will apply only to routes below it - can use multiple middleware functions (they will execute in order)
// app.use("/api",logger) this will be applied to all routes with /api

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  console.log(req.user);
  res.send("About");
});

app.get("/products", (req, res) => {
  res.send("Products");
});

app.get("/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
