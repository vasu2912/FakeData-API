const express = require("express");
const router = express.Router();
const faker = require("faker");

router.get("/", (req, res, next) => {
  var abbreviation = faker.hacker.abbreviation();
  var adjective = faker.hacker.adjective();
  var noun = faker.hacker.noun();
  var verb = faker.hacker.verb();
  var ingverb = faker.hacker.ingverb();
  var phrase = faker.hacker.phrase();

  res.status(200).json({
    info: {
      abbreviation,
      adjective,
      noun,
      verb,
      ingverb,
      phrase,
    },
  });
});

router.post("/", (req, res, next) => {
  var abbreviation = faker.hacker.abbreviation();
  var adjective = faker.hacker.adjective();
  var noun = faker.hacker.noun();
  var verb = faker.hacker.verb();
  var ingverb = faker.hacker.ingverb();
  var phrase = faker.hacker.phrase();

  res.status(201).json({
    info: {
      abbreviation,
      adjective,
      noun,
      verb,
      ingverb,
      phrase,
    },
  });
});

module.exports = router;
