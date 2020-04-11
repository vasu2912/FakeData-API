const express = require("express");
const router = express.Router();
const faker = require("faker");
const casual = require("casual");

router.get("/", (req, res, next) => {
  var suffixes = faker.company.suffixes();
  var companyName = faker.company.companyName();
  var companySuffix = faker.company.companySuffix();
  var catchPhrase = faker.company.catchPhrase();
  var bs = faker.company.bs();
  var catchPhraseAdjective = faker.company.catchPhraseAdjective();
  var catchPhraseDescriptor = faker.company.catchPhraseDescriptor();
  var catchPhraseNoun = faker.company.catchPhraseNoun();
  var bsAdjective = faker.company.bsAdjective();
  var bsBuzz = faker.company.bsBuzz();
  var bsNoun = faker.company.bsNoun();
  res.status(200).json({
    info: {
      suffixes,
      companyName,
      companySuffix,
      catchPhrase,
      bs,
      catchPhraseAdjective,
      catchPhraseDescriptor,
      catchPhraseNoun,
      bsAdjective,
      bsBuzz,
      bsNoun,
    },
  });
});

router.post("/", (req, res, next) => {
  var suffixes = faker.company.suffixes();
  var companyName = faker.company.companyName();
  var companySuffix = faker.company.companySuffix();
  var catchPhrase = faker.company.catchPhrase();
  var bs = faker.company.bs();
  var catchPhraseAdjective = faker.company.catchPhraseAdjective();
  var catchPhraseDescriptor = faker.company.catchPhraseDescriptor();
  var catchPhraseNoun = faker.company.catchPhraseNoun();
  var bsAdjective = faker.company.bsAdjective();
  var bsBuzz = faker.company.bsBuzz();
  var bsNoun = faker.company.bsNoun();
  res.status(201).json({
    info: {
      suffixes,
      companyName,
      companySuffix,
      catchPhrase,
      bs,
      catchPhraseAdjective,
      catchPhraseDescriptor,
      catchPhraseNoun,
      bsAdjective,
      bsBuzz,
      bsNoun,
    },
  });
});

module.exports = router;
