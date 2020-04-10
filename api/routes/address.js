const express = require("express");
const router = express.Router();
const faker = require("faker");
const casual = require("casual");

router.get("/", (req, res, next) => {
  sentence = faker.image.animals();
  res.status(200).json({
    message: "handling GET requests to address",
    sentence,
  });
});

router.post("/", (req, res, next) => {
  sentence = faker.name.findName();
  res.status(201).json({
    message: "handling POST requests to address",

    sentence,
  });
});

module.exports = router;
