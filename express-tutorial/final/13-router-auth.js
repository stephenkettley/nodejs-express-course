const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`welcome to the matrix ${name}`);
  }
  res.status(401).send("please enter your name");
});

module.exports = router;
