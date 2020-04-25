const express = require("express");
const router = express.Router();
const faker = require("faker");

router.get("/", (req, res, next) => {
  var randomize = faker.helpers.randomize();
  var shuffle = faker.helpers.shuffle();
  var slugify = faker.helpers.slugify();
  var replaceSymbolWithNumber = faker.helpers.replaceSymbolWithNumber();
  var replaceSymbols = faker.helpers.replaceSymbols();
  var mustache = faker.helpers.mustache();
  var createCard = faker.helpers.createCard();
  var contextualCard = faker.helpers.contextualCard();
  var userCard = faker.helpers.userCard();
  var createTransaction = faker.helpers.createTransaction();

  res.status(200).json({
    info: {
      randomize,
      shuffle,
      slugify,
      replaceSymbolWithNumber,
      replaceSymbols,
      mustache,
      createCard,
      contextualCard,
      userCard,
      createTransaction,
    },
  });
});

module.exports = router;
