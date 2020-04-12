const express = require("express");
const router = express.Router();
const faker = require("faker");

router.get("/", (req, res, next) => {
  var department = faker.commerce.department();
  var productName = faker.commerce.productName();
  var price = faker.commerce.price();
  var productAdjective = faker.commerce.productAdjective();
  var productMaterial = faker.commerce.productMaterial();
  var product = faker.commerce.product();
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
  var column = faker.database.column();
  var type = faker.database.type();
  var collation = faker.database.collation();
  var engine = faker.database.engine();
  res.status(200).json({
    info: {
      department,
      productName,
      price,
      productAdjective,
      productMaterial,
      product,
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
      column,
      type,
      collation,
      engine,
    },
  });
});

router.post("/", (req, res, next) => {
  var department = faker.commerce.department();
  var productName = faker.commerce.productName();
  var price = faker.commerce.price();
  var productAdjective = faker.commerce.productAdjective();
  var productMaterial = faker.commerce.productMaterial();
  var product = faker.commerce.product();
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
  var column = faker.database.column();
  var type = faker.database.type();
  var collation = faker.database.collation();
  var engine = faker.database.engine();
  res.status(201).json({
    info: {
      department,
      productName,
      price,
      productAdjective,
      productMaterial,
      product,
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
      column,
      type,
      collation,
      engine,
    },
  });
});

module.exports = router;
