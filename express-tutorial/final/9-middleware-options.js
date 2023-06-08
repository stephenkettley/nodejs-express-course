const express = require("express");
const app = express();
const { products } = require("./data");
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");

// req => middleware => res

app.use([logger, authorize]); // create your own functional middleware

app.use(express.static("./public")); // express middleware

app.use(morgan("tiny")); // third party

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

app.get("/items", [logger, authorize], (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
