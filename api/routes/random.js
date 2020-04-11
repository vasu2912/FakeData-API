const express = require("express");
const router = express.Router();
const faker = require("faker");
const casual = require("casual");

router.get("/", (req, res, next) => {
  var country_code = casual.country_code;
  var language_code = casual.language_code;
  var locale = casual.locale;
  var currency = casual.currency;
  var currency_code = casual.currency_code;
  var currency_symbol = casual.currency_symbol;
  var currency_name = casual.currency_name;
  var mime_type = casual.mime_type;
  var boolean = casual.boolean;
  var uuid = casual.uuid;
  var number = faker.random.number();
  var alphaNumeric = faker.random.alphaNumeric();
  var objectElement = faker.random.objectElement();
  var words = faker.random.words();
  var word = faker.random.word();
  var image = faker.random.image();
  var arrayElement = faker.random.arrayElement();
  res.status(200).json({
    info: {
      country_code,
      language_code,
      currency,
      currency_code,
      currency_symbol,
      currency_name,
      mime_type,
      number,
      alphaNumeric,
      objectElement,
      uuid,
      boolean,
      words,
      word,
      image,
      locale,
      arrayElement,
    },
  });
});

router.post("/", (req, res, next) => {
  var country_code = casual.country_code;
  var language_code = casual.language_code;
  var locale = casual.locale;
  var currency = casual.currency;
  var currency_code = casual.currency_code;
  var currency_symbol = casual.currency_symbol;
  var currency_name = casual.currency_name;
  var mime_type = casual.mime_type;
  var boolean = casual.boolean;
  var uuid = casual.uuid;
  var number = faker.random.number();
  var alphaNumeric = faker.random.alphaNumeric();
  var objectElement = faker.random.objectElement();
  var words = faker.random.words();
  var word = faker.random.word();
  var image = faker.random.image();
  var arrayElement = faker.random.arrayElement();
  res.status(201).json({
    info: {
      country_code,
      language_code,
      currency,
      currency_code,
      currency_symbol,
      currency_name,
      mime_type,
      number,
      alphaNumeric,
      objectElement,
      uuid,
      boolean,
      words,
      word,
      image,
      locale,
      arrayElement,
    },
  });
});

module.exports = router;
